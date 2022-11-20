package com.ssafy.api.controller;

import com.ssafy.api.response.mission.MissionListRes;
import com.ssafy.api.response.mission.MissionRes;
import com.ssafy.api.response.satellite.SatelliteRes;
import com.ssafy.api.service.MissionService;
import com.ssafy.api.service.SatelliteService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Satellite;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.User;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Api(value = "미션 API", tags = {"mission"})
@RestController
@RequestMapping("/api/mission")
public class MissionController {

    @Autowired
    MissionService missionService;

    @Autowired
    SatelliteService satelliteService;

    // 전체 미션 리스트 조회 ==============================================================================================
    @GetMapping("/list")
    @ApiOperation(value = "미션 리스트 조회", notes = "모든 미션의 리스트를 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = MissionRes.class)
    })
    public ResponseEntity<MissionListRes> getMissionList () {
        return ResponseEntity.status(200).body(MissionListRes.of(missionService.getMissionList()));
    }

    // 미션 정보 조회 ====================================================================================================
    @GetMapping("/uid")
    @ApiOperation(value = "미션 조회", notes = "<strong>uid</strong>를 기반으로 미션의 정보를 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = MissionRes.class),
            @ApiResponse(code = 404, message = "데이터 없음")
    })
    public ResponseEntity<?> getMission (
            @RequestParam @ApiParam(value = "미션 uid", required = true) Long uid
    ) {
        Optional<Mission> mission = missionService.getMission(uid);
        if ( !mission.isPresent() ) {
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "해당 미션이 존재하지 않습니다."));
        }
        return ResponseEntity.status(200).body(MissionRes.of(mission.get()));
    }

    // 위성 내 미션 리스트 조회 ===========================================================================================
    @GetMapping("/list_by_satellite")
    @ApiOperation(value = "미션 리스트 조회", notes = "<strong>위성 uid</strong>를 기반으로 미션의 정보를 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = MissionRes.class)
    })
    public ResponseEntity<?> getMissionsBySuid (
            @RequestParam @ApiParam(value = "위성 uid", required = true) Long uid
    ) {
        Optional<Satellite> satellite = satelliteService.getSatellite(uid);
        if ( satellite.isPresent() ) {
            return ResponseEntity.status(200).body(MissionListRes.of(missionService.getMissionsBySUid(uid)));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "해당 위성이 존재하지 않습니다."));
    }

    	// 미션 완료 조회
	@GetMapping("/iscompleted")
	@ApiOperation(value = "미션 완료 여부 조회", notes = "<strong>미션 uid와 사용자 아이디로</strong>해당 미션의 완료 여부를 반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = MissionRes.class) })
	public ResponseEntity<Boolean> getMissionsCompletedByMuidAndUserUid(
			@RequestParam @ApiParam(value = "미션 uid", required = true) Long mUid, String id) {
		
		boolean IsCompleted = missionService.getMissionsCompletedByMuidAndUserUid(mUid, id);
		
		return ResponseEntity.status(200).body(IsCompleted);
	}

}
