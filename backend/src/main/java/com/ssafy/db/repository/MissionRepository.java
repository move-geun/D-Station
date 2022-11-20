package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.Satellite;

/**
 * 미션 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface MissionRepository extends JpaRepository<Mission, Long> {

    List<Mission> getAllBySatellite(Satellite satellite);

    Optional<Mission> getMissionByUid(Long uid);
    
    Mission findMissionByUid(long uid);

    @Query(value = "select count(m) from Mission m where m.pUid=:puid")
    int countAllByPUid(Long puid);
}
