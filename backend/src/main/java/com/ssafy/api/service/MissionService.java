package com.ssafy.api.service;

import com.ssafy.api.response.mission.MissionRes;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.User;

import java.util.List;
import java.util.Optional;

public interface MissionService {

    // 미션 리스트 조회
    List<MissionRes> getMissionList();

    // uid로 미션 정보 조회
    Optional<Mission> getMission(Long uid);

    // 위성 uid로 미션 리스트 조회
    List<MissionRes> getMissionsBySUid(Long uid);

    Boolean getMissionsCompletedByMuidAndUserUid(long mUid, String id);

}
