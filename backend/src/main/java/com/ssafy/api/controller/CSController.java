package com.ssafy.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.response.cs.CSRes;
import com.ssafy.api.response.user.UserGithubCheckRes;
import com.ssafy.api.response.user.UserLoginPostRes;
import com.ssafy.api.service.CSService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.CSKnow;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "CS API", tags = { "cs" })
@RestController
@RequestMapping("/api/cs")
public class CSController {

	@Autowired
	CSService csService;

	@GetMapping("")
	@ApiOperation(value = "cs 지식 얻기", notes = "<strong>cs지식을 랜덤으로</strong> 반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<CSRes> getCSKnows() {

		CSKnow cs = csService.getCSKnow();

		return ResponseEntity.status(200).body(CSRes.of(200, "Success", cs));
	}

}
