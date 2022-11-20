package com.ssafy.api.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.response.grading.GradingRes;
import com.ssafy.api.response.quiz.QuizRes;
import com.ssafy.api.response.user.UserLoginPostRes;
import com.ssafy.api.service.GradingService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Quiz;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * 채점 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "채점 API", tags = { "Grading." })
@RestController
@RequestMapping("/api/grading")
public class GradingController {

	@Autowired
	private GradingService gradingService;

	@PostMapping("/java")
	@ApiOperation(value = "채점", notes = "<strong>자바 코드</strong>를 채점 한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public String javaGrading(@RequestBody @ApiParam(value = "자바 코드", required = true) String code) throws IOException {
		return gradingService.gradingJava(code);
	}

	@PostMapping("/python")
	@ApiOperation(value = "채점", notes = "<strong>파이썬 코드</strong>를 채점 한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public String pythonGrading(@RequestParam @ApiParam(value = "문제 uid", required = true) int uid,
			@RequestParam @ApiParam(value = "파이썬 코드", required = true) String code) throws IOException {
		return gradingService.gradingPython(uid, code);
	}
	
	@GetMapping("/problem")
	@ApiOperation(value = "문제", notes = "<strong>문제 정보</strong>를 가져온다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
		@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
		@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
		@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public GradingRes getProblem(@RequestParam @ApiParam(value = "문제 uid", required = true) int uid) throws IOException {
		return gradingService.getProblem(uid);
	}
	
	@GetMapping("/muid")
	@ApiOperation(value = "문제 얻기", notes = "<strong>미션 uid로 문제를</strong> 반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<GradingRes> getGradingByMUid(@RequestParam @ApiParam(value = "mUid 정보", required = true) long uid) {
		return ResponseEntity.status(200).body(gradingService.getProblemByMUid(uid));
	}
}
