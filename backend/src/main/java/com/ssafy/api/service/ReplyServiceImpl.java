package com.ssafy.api.service;

import com.ssafy.api.request.reply.ReplyPostReq;
import com.ssafy.api.response.reply.ReplyRes;
import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.Reply;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.JisickinRepository;
import com.ssafy.db.repository.ReplyRepository;
import com.ssafy.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReplyServiceImpl implements ReplyService{

    @Autowired
    ReplyRepository replyRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    JisickinRepository jisickinRepository;

    @Override
    public boolean createReply(ReplyPostReq replyPostReq, String userId) {
        Optional<Jisickin> jisickin = jisickinRepository.findById(replyPostReq.getJisickinUid());
        Optional<User> user = userRepository.getUsersById(userId);
        if (user.isPresent()) {
            Reply reply = Reply.builder()
                    .content(replyPostReq.getContent())
                    .user(user.get())
                    .jisickin(jisickin.get())
                    .build();
            replyRepository.save(reply);
            // 경험치 + 5
            user.get().addExp(user.get().getExp());
            userRepository.save(user.get());
            return true;
        }
        return false;
    }

    @Override
    public Optional<Reply> getOne(Long uid) {
        Optional<Reply> reply = replyRepository.getReplyByUid(uid);
        if (reply.isPresent()) {
            return reply;
        }
        return Optional.empty();
    }

    @Override
    public List<ReplyRes> getReplyListbyAskId(Long jisickinUid) {
        Optional<Jisickin> jisickin = jisickinRepository.findById(jisickinUid);
        // 해당 질문이 존재하면 리스트 반환
        if ( jisickin.isPresent() ) {
            List<ReplyRes> list = replyRepository.getAllByJisickin(jisickin.get())
                    .stream()
                    .map(m -> ReplyRes.of(m))
                    .collect(Collectors.toList());
            return list;
        }
        // 질문이 존재하지 않으면 null 반환
        return null;
    }

    @Override
    public boolean updateReply(Long uid, ReplyPostReq replyPostReq, String userId) {
        Optional<User> user = userRepository.getUsersById(userId);
        if (user.isPresent()) {
            Reply reply = Reply.builder()
                    .uid(uid)
                    .content(replyPostReq.getContent())
                    .regDate(LocalDateTime.now())
                    .user(user.get())
                    .jisickin(jisickinRepository.getOne(replyPostReq.getJisickinUid()))
                    .build();
            replyRepository.save(reply);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteReply(Long uid, String userId) {
        Optional<User> user = userRepository.getUsersById(userId);
        // 유저가 존재하고
        if (user.isPresent()) {
            // 작성자와 유저 정보가 일치하면
            if (replyRepository.getOne(uid).getUser() == user.get()) {
                replyRepository.delete(replyRepository.getOne(uid));
                // 경험치 - 5
                user.get().subtractExp(user.get().getExp());
                userRepository.save(user.get());
                return true;
            }
        }
        return false;
    }
}
