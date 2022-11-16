package com.ssafy.api.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.response.planet.PlanetRes;
import com.ssafy.api.response.satellite.SatelliteListRes;
import com.ssafy.api.response.satellite.SatelliteRes;
import com.ssafy.api.response.satellite.SearchListRes;
import com.ssafy.api.response.satellite.SearchRes;
import com.ssafy.api.service.PlanetService;
import com.ssafy.api.service.SatelliteService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Satellite;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@Api(value = "위성 API", tags = { "satellite" })
@RestController
@RequestMapping("/api/satellite")
public class SatelliteController {

	@Autowired
	SatelliteService satelliteService;

	@Autowired
	PlanetService planetService;

	// 전체 위성 리스트 조회
	// ==============================================================================================
	@GetMapping("/list")
	@ApiOperation(value = "위성 리스트 조회", notes = "모든 위성의 리스트를 불러온다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공") })
	public ResponseEntity<SatelliteListRes> getSatelliteList() {
		return ResponseEntity.status(200).body(SatelliteListRes.of(satelliteService.getSatelliteList()));
	}

	// 위성 정보 조회
	// ====================================================================================================
	@GetMapping("/uid")
	@ApiOperation(value = "위성 조회", notes = "<strong>uid</strong>를 기반으로 위성의 정보를 불러온다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = PlanetRes.class),
			@ApiResponse(code = 404, message = "데이터 없음") })
	public ResponseEntity<?> getSatellite(@RequestBody @ApiParam(value = "위성 uid", required = true) Long uid) {
		Optional<Satellite> satellite = satelliteService.getSatellite(uid);
		if (!satellite.isPresent()) {
			return ResponseEntity.status(404).body(BaseResponseBody.of(404, "해당 위성이 존재하지 않습니다."));
		}
		return ResponseEntity.status(200).body(SatelliteRes.of(satellite.get()));
	}

	// 행성 내 위성 리스트 조회
	// ===========================================================================================
	@GetMapping("/list_by_planet")
	@ApiOperation(value = "위성 리스트 조회", notes = "<strong>행성 uid</strong>를 기반으로 위성의 정보를 불러온다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = PlanetRes.class) })
	public ResponseEntity<?> getSatelliteByPuid(@RequestBody @ApiParam(value = "행성 uid", required = true) Long uid) {
		Planet planet = planetService.getPlanet(uid).get();
		if (planet == null) {
			return ResponseEntity.status(404).body(BaseResponseBody.of(404, "해당 행성이 존재하지 않습니다."));
		}
		return ResponseEntity.status(200).body(SatelliteListRes.of(satelliteService.getSatellitesByGUid(uid)));
	}

	// 위성 이름 검색
	@GetMapping("/search")
	@ApiOperation(value = "키워드 검색", notes = "<strong>키워드로 위성 목록을</strong> 검색한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<SearchListRes> getSatelliteByKeyword(
			@RequestParam @ApiParam(name = "키워드", required = true) String keyword) {
		 ArrayList<SearchRes> reslist = satelliteService.SearchByKeyword(keyword);
		if (reslist.size() == 0) {
			return ResponseEntity.status(404).body(SearchListRes.of(reslist));
		} else {
			return ResponseEntity.status(200).body(SearchListRes.of(reslist));
		}
		//return null;
	}
}
