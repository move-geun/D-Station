package com.ssafy.api.controller;

import com.ssafy.api.request.jisickin.JisickinPostReq;
import com.ssafy.api.response.jisickin.JisickinDetailRes;
import com.ssafy.api.response.jisickin.JisickinListRes;
import com.ssafy.api.response.jisickin.JisickinRes;
import com.ssafy.api.response.satellite.SearchListRes;
import com.ssafy.api.response.satellite.SearchRes;
import com.ssafy.api.service.JisickinService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.auth.SsafyUserDetails;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.User;
import io.swagger.annotations.*;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Api(value = "질문게시판 API", tags = { "jisickin" })
@RestController
@RequestMapping("/api/ask")
public class JisickinController {

	@Autowired
	JisickinService jisickinService;

	@Autowired
	UserService userService;

	// 질문 생성하기
	// =====================================================================================================
	@PostMapping("/")
	@ApiOperation(value = " 질문 생성", notes = "질문게시판에 질문을 생성한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = JisickinRes.class),
			@ApiResponse(code = 401, message = "실패") })
	public ResponseEntity<BaseResponseBody> createAsk(
			@RequestBody @ApiParam(value = "질문 생성 폼", required = true) JisickinPostReq jisickinInfo,
			@RequestParam @ApiParam(value = "유저 정보", required = true) String userId) {
		User user = userService.getUserById(userId);
		if (user != null) {
			jisickinService.createAsk(jisickinInfo, user);
			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "게시글이 생성되었습니다."));
		}
		return ResponseEntity.status(401).body(BaseResponseBody.of(401, "게시글 생성에 실패했습니다."));

	}

	// 전체 질문 리스트 조회
	// ==============================================================================================
	@GetMapping("/")
	@ApiOperation(value = "전체 질문 리스트 조회", notes = "전체 질문 리스트를 조회한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공") })
	public ResponseEntity<JisickinListRes> getAll() {

		return ResponseEntity.status(200).body(JisickinListRes.of(jisickinService.getAllAsks()));
	}

	// 태그 기반 리스트 조회
	// =========================================================================================
	@GetMapping("/tag")
	@ApiOperation(value = "태크로 질문 리스트 조회", notes = "해당 태그에 속한 질문 리스트를 조회한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공") })
	public ResponseEntity<JisickinListRes> getAllByTag(
			@RequestParam @ApiParam(value = "tag 정보", required = true) String tag) {
		return ResponseEntity.status(200).body(JisickinListRes.of(jisickinService.getAllByTag(tag)));
	}

	// 질문 상세 조회
	// ====================================================================================================
	@GetMapping("/detail")
	@ApiOperation(value = "질문 상세 조회", notes = "해당 질문의 상세 내용을 조회한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = JisickinDetailRes.class),
			@ApiResponse(code = 404, message = "데이터 없음") })
	public ResponseEntity<?> getJisickinDetail(@RequestParam @ApiParam(value = "질문 Uid", required = true) Long uid) {
		Optional<Jisickin> jisickin = jisickinService.getOne(uid);
		if (jisickin.isPresent()) {
			return ResponseEntity.status(200).body(JisickinDetailRes.of(jisickin.get()));
		}
		return ResponseEntity.status(404).body(BaseResponseBody.of(404, "존재하지 않는 질문입니다."));
	}

	// 질문 수정
	// ========================================================================================================
	@PutMapping("/detail")
	@ApiOperation(value = "질문 수정", notes = "해당 질문의 내용을 수정한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = JisickinDetailRes.class),
			@ApiResponse(code = 404, message = "데이터 없음") })
	public ResponseEntity<BaseResponseBody> updateAsk(
			@RequestParam @ApiParam(value = "수정할 질문", required = true) Long uid,
			@RequestBody @ApiParam(value = "수정할 내용", required = true) JisickinPostReq jisickinInfo,
			@RequestParam @ApiParam(value = "유저 정보", required = true) String userId) {
		Optional<Jisickin> jisickin = jisickinService.getOne(uid);
		// 해당 질문이 존재하고, 유저가 존재할때
		if (jisickin.isPresent() && userService.getUserById(userId) != null) {
			// 작성자와 현재 유저 정보가 일치하면
			if (jisickin.get().getUser() == userService.getUserById(userId)) {
				jisickinService.updateAsk(uid, jisickinInfo, userService.getUserById(userId));
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "질문이 수정되었습니다."));
			}
			return ResponseEntity.status(403).body(BaseResponseBody.of(403, "권한이 없습니다."));
		}
		return ResponseEntity.status(404).body(BaseResponseBody.of(404, "존재하지 않는 질문입니다."));
	}

	// 질문 삭제
	// ========================================================================================================
	@DeleteMapping("/detail")
	@ApiOperation(value = "질문 삭제", notes = "해당 질문의 내용을 삭제한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 404, message = "데이터 없음") })
	public ResponseEntity<BaseResponseBody> deleteAsk(
			@RequestParam @ApiParam(name = "삭제할 질문 uid", required = true) Long uid,
			@RequestParam @ApiParam(name = "유저 id", required = true) String userId) {
		Optional<Jisickin> jisickin = jisickinService.getOne(uid);
		if (jisickin.isPresent()) {
			if (jisickinService.deleteAsk(uid, userId)) {
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "질문이 삭제되었습니다."));
			}
			return ResponseEntity.status(403).body(BaseResponseBody.of(403, "권한이 없습니다."));
		}
		return ResponseEntity.status(404).body(BaseResponseBody.of(404, "해당 질문이 존재하지 않습니다."));
	}

	// 질문 검색
	@GetMapping("/search")
	@ApiOperation(value = "키워드 검색", notes = "<strong>키워드로 질문 내용이나 제목을 </strong> 검색한다.")
	@ApiResponses({ @ApiResponse(code = 200, message = "성공"), @ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"), @ApiResponse(code = 500, message = "서버 오류") })
	public ResponseEntity<JisickinListRes> getJisickinByKeyword(
			@RequestParam @ApiParam(name = "키워드", required = true) String keyword) {
		List<JisickinRes> list = jisickinService.getJisickinByKeyword(keyword);
		if (list.size() == 0) {
			return ResponseEntity.status(404).body(JisickinListRes.of(list));
		} else {
			return ResponseEntity.status(200).body(JisickinListRes.of(list));
		}
	}
}