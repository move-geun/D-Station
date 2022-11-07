package com.ssafy.api.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.MBTI.MBTIPostReq;
import com.ssafy.api.request.user.UserLoginPostReq;
import com.ssafy.api.request.user.UserRegisterPostReq;
import com.ssafy.api.response.mbti.MBTIRes;
import com.ssafy.api.response.user.UserLoginPostRes;
import com.ssafy.api.service.GradingService;
import com.ssafy.api.service.GradingServiceImpl;
import com.ssafy.api.service.MBTIService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;

/**
 * 채점 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "설문 API", tags = {"MBTI."})
@RestController
@RequestMapping("/api/MBTI")
public class MBTIController {
	
	@Autowired
	private MBTIService mbtiService;
	
	@PostMapping("/result")
	@ApiOperation(value = "설문 조사", notes = "<strong>답변 내용으로</strong>설문 결과를 리턴한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
        @ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
        @ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
        @ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
    })
	public MBTIRes result(@RequestBody @ApiParam(value="답변 정보", required = true) MBTIPostReq req) {
		return mbtiService.getResult(req);
	}
}
