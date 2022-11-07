package com.ssafy.api.controller;

import com.ssafy.api.request.reply.ReplyPostReq;
import com.ssafy.api.response.reply.ReplyListRes;
import com.ssafy.api.response.reply.ReplyRes;
import com.ssafy.api.service.JisickinService;
import com.ssafy.api.service.ReplyService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Jisickin;

import io.swagger.annotations.*;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Api(value = "답변 API", tags = {"reply"})
@RestController
@RequestMapping("/api/reply")
public class ReplyController {

    @Autowired
    ReplyService replyService;

    @Autowired
    JisickinService jisickinService;


    // 답변 생성하기 ====================================================================================================

    @PostMapping("/")
    @ApiOperation(value = "답변 생성", notes = "답변을 생성한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = ReplyRes.class),
            @ApiResponse(code = 403, message = "권한 없음")
    })
    public ResponseEntity<BaseResponseBody> createReply(
            @RequestBody @ApiParam(value = "답변 생성 정보", required = true) ReplyPostReq replyInfo,
            @RequestParam @ApiParam(value = "유저 정보", required = true) String userId
    ) {
        Optional<Jisickin> jisickin = jisickinService.getOne(replyInfo.getJisickinUid());
        if (jisickin.isPresent()) {
            if (replyService.createReply(replyInfo, userId)) {
                return ResponseEntity.status(200).body(BaseResponseBody.of(200, "답변 생성완료"));
            }
            return ResponseEntity.status(403).body(BaseResponseBody.of(403, "유저 권한이 없습니다."));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "질문이 존재하지 않습니다."));
    }

    //
    @GetMapping("/")
    @ApiOperation(value = "답변 리스트 조회", notes = "해당 질문 답변을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = ReplyListRes.class),
            @ApiResponse(code = 404, message = "데이터 없음")
    })
    public ResponseEntity<?> getReplyList(
            @RequestParam @ApiParam(name = "질문 정보", required = true) Long jisickinUid
    ) {
        List<ReplyRes> list = replyService.getReplyListbyAskId(jisickinUid);
        if (list == null) {
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "해당 질문이 존재하지 않습니다."));
        }
        return ResponseEntity.status(200).body(ReplyListRes.of(list));
    }

    @PutMapping("/")
    @ApiOperation(value = "답변 수정", notes = "답변을 수정한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = ReplyRes.class),
            @ApiResponse(code = 403, message = "권한 없음")
    })
    public ResponseEntity<BaseResponseBody> updateReply(
            @RequestParam @ApiParam(value = "수정할 답변 정보", required = true) Long uid,
            @RequestBody @ApiParam(value = "수정할 내용", required = true) ReplyPostReq replyInfo,
            @RequestParam @ApiParam(value = "유저 정보", required = true) String userId
    ) {
        if (replyService.getOne(uid).isPresent()) {
            if (replyService.updateReply(uid, replyInfo, userId)) {
                return ResponseEntity.status(200).body(BaseResponseBody.of(200, "답변이 수정되었습니다."));
            }
            return ResponseEntity.status(403).body(BaseResponseBody.of(403, "권한이 없는 유지입니다."));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "존재하지 않는 댓글입니다."));
    }

    @DeleteMapping("/")
    @ApiOperation(value = "답변 삭제", notes = "답변을 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = ReplyRes.class),
            @ApiResponse(code = 403, message = "권한 없음")
    })
    public ResponseEntity<BaseResponseBody> deleteReply(
            @RequestParam @ApiParam(value = "삭제할 답변 정보", required = true) Long uid,
            @RequestParam @ApiParam(value = "유저 정보", required = true) String userId
    ) {
        if (replyService.getOne(uid).isPresent()) {
            if (replyService.deleteReply(uid, userId)) {
                return ResponseEntity.status(200).body(BaseResponseBody.of(200, "답변이 삭제되었습니다."));
            }
            return ResponseEntity.status(403).body(BaseResponseBody.of(403, "권한이 없는 유저입니다."));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "존재하지 않는 답변입니다."));
    }
}
