package com.ssafy.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.user.UserRegisterPostReq;
import com.ssafy.api.response.user.UserGithubCheckRes;
import com.ssafy.api.response.user.UserLoginPostRes;
import com.ssafy.api.response.user.UserRes;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.common.util.JwtTokenUtil;
import com.ssafy.db.entity.User;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * github 로그인 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "github 로그인 API", tags = { "GithubLogin." })
@RestController
@RequestMapping("/api/user")
public class UserGithubController {
	@Autowired
	UserService userService;

	@PostMapping("/github/check")
	@ApiOperation(value = "깃헙 유저 정보 얻기", notes = "<strong>깃헙</strong>을 통해 유저 정보를 얻는다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<UserGithubCheckRes> check(
			@RequestParam @ApiParam(value = "사용자 인가 code", required = true) String githubCode) {

		String userInfo = userService.getUserIdByGithubCode(githubCode);

		if (userInfo != null) {
			return ResponseEntity.status(200).body(UserGithubCheckRes.of(200, "Success", userInfo));
		} else {
			return ResponseEntity.status(200).body(UserGithubCheckRes.of(401, "Failed", null));

		}
	}

	@GetMapping("/nickname-info")
	@ApiOperation(value = "닉네임 중복 검사", notes = "<strong>닉네임이 DB에 있는 지 확인한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<UserRes> nicknameOverlapCheck(
			@RequestParam @ApiParam(value = "닉네임 정보", required = true) String nickname) {
		User user = userService.getUserByNickname(nickname);
		if (user == null) {
			return ResponseEntity.status(200).body(UserRes.of(200, "Success", null));
		} else {
			return ResponseEntity.status(200).body(UserRes.of(401, "Failed", user));
		}
	}
	@GetMapping("/id-info")
	@ApiOperation(value = "회원가입 검사", notes = "<strong>아이디가 DB에 있는 지 확인한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<UserRes> idOverlapCheck(
			@RequestParam @ApiParam(value = "아이디 정보", required = true) String id) {
		User user = userService.getUserById(id);
		if (user == null) {
			return ResponseEntity.status(200).body(UserRes.of(200, "Success", null));
		} else {
			return ResponseEntity.status(200).body(UserRes.of(401, "Failed", user));
		}
	}

	@PostMapping("/signup")
	@ApiOperation(value = "회원 가입", notes = "<strong>아이디와 닉네임</strong>를 통해 회원가입 한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<UserRes> register(
			@RequestBody @ApiParam(value = "회원가입 정보", required = true) UserRegisterPostReq registerInfo) {
		User user = userService.createUser(registerInfo);
		return ResponseEntity.status(200).body(UserRes.of(200, "Success", user));
	}

	@PostMapping("/login")
	@ApiOperation(value = "로그인", notes = "<strong>아이디</strong>를 통해 로그인 한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<UserLoginPostRes> login(
			@RequestParam @ApiParam(value = "아이디 정보", required = true) String id) {

		User user = userService.getUserById(id);

		//유효하지 않은 아이디인 경우 실패로 응답
		if (user != null) {
			// user가 있는 경우 로그인 성공으로 응답.(액세스 토큰을 포함하여 응답값 전달)
			return ResponseEntity.status(200)
					.body(UserLoginPostRes.of(200, "Success", user, JwtTokenUtil.getToken(id)));
		}
		return ResponseEntity.status(401).body(UserLoginPostRes.of(401, "Failed", user, null));
	}

	
}
