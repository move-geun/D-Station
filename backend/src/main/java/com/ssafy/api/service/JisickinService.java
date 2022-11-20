package com.ssafy.api.service;

import com.ssafy.api.request.jisickin.JisickinPostReq;
import com.ssafy.api.response.jisickin.JisickinDetailRes;
import com.ssafy.api.response.jisickin.JisickinRes;
import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.User;

import java.util.List;
import java.util.Optional;

public interface JisickinService {

    // 질문 생성
    void createAsk(JisickinPostReq jisickinPostReq, User user);

    // uid에 기반하여 질문 조회
    Optional<Jisickin> getOne(long uid);

    // 전체 질문 조회
    List<JisickinRes> getAllAsks();

    // 태그별 질문 조회
    List<JisickinRes> getAllByTag(String tag);

    // 질문 수정
    void updateAsk(Long uid, JisickinPostReq jisickinPostReq, User user);

    // 질문 삭제
    boolean deleteAsk(Long uid, String userId);
    
    // 검색
    List<JisickinRes> getJisickinByKeyword(String keyword);
}
