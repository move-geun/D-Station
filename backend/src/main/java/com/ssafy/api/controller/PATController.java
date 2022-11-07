package com.ssafy.api.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.response.user.UserLoginPostRes;
import com.ssafy.api.service.PATService;
import com.ssafy.common.model.response.BaseResponseBody;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * 채점 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "Personal Access Token 생성 API", tags = { "PAT." })
@RestController
@RequestMapping("/api/PAT")
public class PATController {
	@Autowired
	PATService pakService;

	@PostMapping("/create")
	@ApiOperation(value = "Personal Access Token 생성", notes = "<strong>PAT</strong>가 존재하는지 확인하고 생성한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<?> checkPAK(@RequestParam @ApiParam(value = "유저 아이디", required = true) String userId,
			@RequestParam @ApiParam(value = "깃허브 아이디", required = true) String githubId,
			@RequestParam @ApiParam(value = "유저 아이디", required = true) String githubPw) throws IOException {
		boolean success = pakService.createPAT(userId, githubId, githubPw);
		if (success) {
			return ResponseEntity.status(200).body("Personal Access Token 생성 완료");
		} else {
			return ResponseEntity.status(404).body("이미 Personal Access Token이 존재하는 유저입니다.");
		}
	}
}
