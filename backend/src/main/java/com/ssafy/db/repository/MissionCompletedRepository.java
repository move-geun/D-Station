package com.ssafy.db.repository;

import com.ssafy.api.response.planet.PlanetRes;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.MissionCompleted;
import com.ssafy.db.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 미션완료 여부 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface MissionCompletedRepository extends JpaRepository<MissionCompleted, Long> {

    Optional<MissionCompleted> getMissionCompletedByUserAndMission(User user, Mission mission);

    @Query(value = "select m.pUid from MissionCompleted mc join Mission m on (mc.mission = m) where mc.user.id = :userId group by m.pUid")
    List<Long> getPlanetList(String userId);

    @Query(value = "select count(mc) from MissionCompleted mc where mc.user = :user and mc.mission.pUid = :puid")
    int countAllByUserAndMission_PUid(User user, long puid);
}
