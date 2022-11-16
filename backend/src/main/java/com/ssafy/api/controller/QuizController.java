package com.ssafy.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.quiz.QuizReq;
import com.ssafy.api.response.quiz.QuizRes;
import com.ssafy.api.service.QuizService;
import com.ssafy.db.entity.Quiz;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * Quiz API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "Quiz API", tags = { "Quiz." })
@RestController
@RequestMapping("/api/quiz")
public class QuizController {
	@Autowired
	QuizService quizService;

	@GetMapping("")
	@ApiOperation(value = "quiz 얻기", notes = "<strong>미션 uid로 퀴즈를</strong> 반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<QuizRes> getQuizByMUid(@RequestParam @ApiParam(value = "mUid 정보", required = true) long uid) {
		Quiz quiz = quizService.getQuizByMUid(uid);
		return ResponseEntity.status(200).body(QuizRes.of(quiz));
	}

	@PostMapping("/correct")
	@ApiOperation(value = "quiz 정답인지 아닌지 확인", notes = "<strong>퀴즈 uid와 사용자가 택한 정답을 보내면 결과를</strong> 반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<Boolean> IsCorrect(@RequestBody @ApiParam(value = "", required = true) QuizReq quizReq) {
		boolean IsCorrect = quizService.isCorrect(quizReq);
		return ResponseEntity.status(200).body(IsCorrect);
	}

}
