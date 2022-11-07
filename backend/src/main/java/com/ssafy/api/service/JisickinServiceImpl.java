package com.ssafy.api.service;

import com.ssafy.api.request.jisickin.JisickinPostReq;
import com.ssafy.api.response.jisickin.JisickinRes;
import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JisickinServiceImpl implements JisickinService{

    @Autowired
    JisickinRepository jisickinRepository;

    @Autowired
    GalaxyRepository galaxyRepository;

    @Autowired
    PlanetRepository planetRepository;

    @Autowired
    SatelliteRepository satelliteRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public void createAsk(JisickinPostReq jisickinPostReq, User user) {
        Jisickin jisickin = Jisickin.builder()
                .tag(jisickinPostReq.getTag())
                .title(jisickinPostReq.getTitle())
                .content(jisickinPostReq.getContent())
                .user(user)
                .build();
        // 경험치 + 5
        user.addExp(user.getExp());
        userRepository.save(user);
        jisickinRepository.save(jisickin);
    }

    @Override
    public Optional<Jisickin> getOne(long uid) {
        Optional<Jisickin> jisickin = jisickinRepository.findById(uid);
        if (jisickin.isPresent()) {
            return jisickin;
        }
        return Optional.empty();
    }

    @Override
    public List<JisickinRes> getAllAsks() {
        List<JisickinRes> list = jisickinRepository.findAll()
                .stream()
                .map(m->JisickinRes.of(m))
                .collect(Collectors.toList());
        return list;
    }

    @Override
    public List<JisickinRes> getAllByTag(String tag) {
        List<JisickinRes> list = jisickinRepository.getJisickinsByTag(tag)
                .stream()
                .map(m->JisickinRes.of(m))
                .collect(Collectors.toList());
        return list;
    }

    @Override
    public void updateAsk(Long uid, JisickinPostReq jisickinPostReq, User user) {
        Jisickin modifiedjisickin = Jisickin.builder()
                .uid(uid)
                .tag(jisickinPostReq.getTag())
                .title(jisickinPostReq.getTitle())
                .content(jisickinPostReq.getContent())
                .user(user)
                .updatedAt(LocalDateTime.now())
                .build();
        jisickinRepository.save(modifiedjisickin);
    }

    @Override
    public boolean deleteAsk(Long uid, String userId){
        Optional<User> user = userRepository.getUsersById(userId);
        if (jisickinRepository.getOne(uid).getUser() == user.get()) {
            jisickinRepository.delete(jisickinRepository.getOne(uid));
            // 경험치 - 5
            user.get().subtractExp(user.get().getExp());
            userRepository.save(user.get());
            return true;
        }
        return false;
    }
}
