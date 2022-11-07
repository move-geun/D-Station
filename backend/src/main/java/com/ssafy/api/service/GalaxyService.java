package com.ssafy.api.service;

import com.ssafy.api.response.galaxy.GalaxyRes;
import com.ssafy.db.entity.Galaxy;

import java.util.List;
import java.util.Optional;

public interface GalaxyService {

    // 은하 리스트 조회
    List<GalaxyRes> getGalaxyList();

    // uid로 은하 정보 조회
    Optional<Galaxy> getGalaxy(Long uid);
}
