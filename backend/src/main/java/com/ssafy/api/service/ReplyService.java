package com.ssafy.api.service;

import com.ssafy.api.request.reply.ReplyPostReq;
import com.ssafy.api.response.reply.ReplyRes;
import com.ssafy.db.entity.Reply;

import java.util.List;
import java.util.Optional;

public interface ReplyService {

    // 답변 작성
    boolean createReply(ReplyPostReq replyPostReq, String userId);

    // 답변 하나 요청하기
    Optional<Reply> getOne(Long uid);

    // 답변 리스트
    List<ReplyRes> getReplyListbyAskId(Long JisickinUid);

    // 답변 수정
    boolean updateReply(Long uid, ReplyPostReq replyPostReq, String userId);

    // 답변 삭제
    boolean deleteReply(Long uid, String userId);
}
