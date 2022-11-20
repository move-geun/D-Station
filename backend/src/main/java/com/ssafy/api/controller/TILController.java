package com.ssafy.api.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.til.TILCreateReq;
import com.ssafy.api.request.til.TILRepoReq;
import com.ssafy.api.response.til.MissionTILRes;
import com.ssafy.api.response.til.RepoListRes;
import com.ssafy.api.response.til.SatelliteTILRes;
import com.ssafy.api.response.til.TILCreateRepoRes;
import com.ssafy.api.response.til.TILCreateRes;
import com.ssafy.api.response.til.TILListByUserRes;
import com.ssafy.api.response.user.UserLoginPostRes;
import com.ssafy.api.service.TILService;
import com.ssafy.common.model.response.BaseResponseBody;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "TIL API", tags = { "til" })
@RestController
@RequestMapping("/api/til")
public class TILController {

	@Autowired
	TILService tilService;

	@PostMapping("/create-repo")
	@ApiOperation(value = "repo 생성", notes = "<strong>사용자 id를 보내면 repo</strong> 를 생성한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<TILCreateRepoRes> createGitRepo(
			@RequestBody @ApiParam(value = "", required = true) TILRepoReq tILRepoReq) {

		String repoName = tilService.createRepo(tILRepoReq);

		if (repoName == null) {
			return ResponseEntity.status(401).body(TILCreateRepoRes.of(401, "Failed", repoName));
		} else if (repoName.equals("중복")) {
			return ResponseEntity.status(409).body(TILCreateRepoRes.of(409, "Success", repoName));
		} else {
			return ResponseEntity.status(200).body(TILCreateRepoRes.of(200, "Success", repoName));
		}
	}

	@GetMapping("/repo")
	@ApiOperation(value = "repo 얻기", notes = "<strong>사용자 id를 보내면 repo목록을</strong> 반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<RepoListRes> getGitRepo(@RequestParam @ApiParam(value = "", required = true) String id) {

		ArrayList<String> repoList = tilService.getRepo(id);

		if (repoList == null) {
			return ResponseEntity.status(401).body(RepoListRes.of(401, "Success", repoList));
		} else {
			return ResponseEntity.status(200).body(RepoListRes.of(200, "Success", repoList));
		}
	}

	@GetMapping("/repo/dir")
	@ApiOperation(value = "repo 내의 dir 얻기", notes = "<strong>사용자 id를 보내면 repos내의 dir 목록을</strong> 반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<RepoListRes> getGitRepoDir(
			@RequestBody @ApiParam(value = "", required = true) TILRepoReq tILRepoReq) {

		ArrayList<String> dirList = tilService.getRepoDir(tILRepoReq);

		if (dirList == null) {
			return ResponseEntity.status(401).body(RepoListRes.of(401, "Success", dirList));
		} else {
			return ResponseEntity.status(200).body(RepoListRes.of(200, "Success", dirList));
		}
	}

	@PostMapping("/create")
	@ApiOperation(value = "til 생성", notes = "<strong>til</strong>을 생성한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<TILCreateRes> createTIL(
			// public String createTIL(
			@RequestBody @ApiParam(value = "", required = true) TILCreateReq tILCreateReq) {

		String gitLink = tilService.createTIL(tILCreateReq);

		if (gitLink.equals("")) {
			return ResponseEntity.status(401).body(TILCreateRes.of(401, "Failed", gitLink));
		} else {
			return ResponseEntity.status(200).body(TILCreateRes.of(200, "Success", gitLink));
		}
	}

	@GetMapping("")
	@ApiOperation(value = "user별 til보기", notes = "<strong>사용자 id를 통해 til을</strong>반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<ArrayList<TILListByUserRes>> getTILByUser(
			@RequestParam @ApiParam(value = "", required = true) String id) {
		ArrayList<TILListByUserRes> list = tilService.getTILListByUser(id);

		if (list == null) {
			return ResponseEntity.status(401).body(list);
		} else {
			return ResponseEntity.status(200).body(list);
		}
	}
	
	@GetMapping("/satellite")
	@ApiOperation(value = "위성별 til보기", notes = "<strong>사용자 id와 위성uid를 통해 til을</strong>반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<ArrayList<SatelliteTILRes>> getUserTILBySatellite(
			@RequestParam @ApiParam(value = "", required = true) String id,
			@RequestParam @ApiParam(value = "", required = true) long sUid)  {

		ArrayList<SatelliteTILRes> list = tilService.getUserTILBySatellite(id, sUid);
		if (list == null) {
			return ResponseEntity.status(401).body(list);
		} else {
			return ResponseEntity.status(200).body(list);
		}
	}
	
	
	@GetMapping("/mission")
	@ApiOperation(value = "미션별 til보기", notes = "<strong>사용자 id와 미션 uid를 통해 til을</strong>반환한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
			@ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
			@ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class) })
	public ResponseEntity<MissionTILRes> getUserTILByMission(
			@RequestParam @ApiParam(value = "", required = true) String id,
			@RequestParam @ApiParam(value = "", required = true) long mUid)  {

		MissionTILRes res = tilService.getUserTILByMission(id, mUid);
		if (res == null) {
			return ResponseEntity.status(401).body(res);
		} else {
			return ResponseEntity.status(200).body(res);
		}
	}

}
