package com.ssafy.api.service;

import com.ssafy.api.response.planet.PioneerPlanetRes;
import com.ssafy.api.response.planet.PlanetRes;
import com.ssafy.db.entity.Planet;

import java.util.List;
import java.util.Optional;

public interface PlanetService {

    // 행성 리스트 조회
    List<PlanetRes> getPlanetList();

    // uid로 행성 정보 조회
    Optional<Planet> getPlanet(Long uid);

    // 은하 uid로 행성 리스트 조회
    List<PlanetRes> getPlanetsByGUid(Long uid);

    // 개척중인 행성 리스트 조회
    List<PioneerPlanetRes> getPlanetListByUser(String userId);
}
