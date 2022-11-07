package com.ssafy.db.repository;

import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.Satellite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 미션 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface MissionRepository extends JpaRepository<Mission, Long> {

    List<Mission> getAllBySatellite(Satellite satellite);

    Optional<Mission> getMissionByUid(Long uid);
    
    Mission findMissionByUid(long uid);
}
