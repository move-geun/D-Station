package com.ssafy.db.repository;

import com.ssafy.api.response.planet.PlanetRes;
import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.entity.Planet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 행성 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface PlanetRepository extends JpaRepository<Planet, Long> {

    Optional<Planet> getPlanetByUid(Long uid);
    List<Planet> getAllByGalaxy(Galaxy galaxy);
}
