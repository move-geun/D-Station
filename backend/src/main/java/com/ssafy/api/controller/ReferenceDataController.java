package com.ssafy.api.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.response.ReferenceData.ReferenceDataRes;
import com.ssafy.api.response.til.SatelliteTILRes;
import com.ssafy.api.service.ReferenceDataService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * 참고자료 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "참고자료 API", tags = { "referenceData." })
@RestController
@RequestMapping("/api/reference")
public class ReferenceDataController {
	 @Autowired
	 ReferenceDataService referenceDataService;

	@GetMapping("")
	@ApiOperation(value = "참고자료 검색", notes = "<strong>미션 uid로 참고자료 목록을</strong> 반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<ArrayList<ReferenceDataRes>> getReferenceDataByMUid(
			@RequestParam @ApiParam(value = "mUid 정보", required = true) long uid) {
		ArrayList<ReferenceDataRes> list = referenceDataService.getReferenceDataByMUid(uid);
		if (list == null) {
			return ResponseEntity.status(401).body(list);
		} else {
			return ResponseEntity.status(200).body(list);
		}
	}

}
