package com.ssafy.api.controller;

import com.ssafy.api.response.galaxy.GalaxyListRes;
import com.ssafy.api.response.galaxy.GalaxyRes;
import com.ssafy.api.service.GalaxyService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Galaxy;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Api(value = "은하 API", tags = {"Galaxy"})
@RestController
@RequestMapping("/api/galaxy")
@CrossOrigin
public class GalaxyController {

    @Autowired
    GalaxyService galaxyService;

    // 전체 은하 조회 ====================================================================================================
    @GetMapping("/list")
    @ApiOperation(value = "은하 리스트 조회", notes = "모든 은하의 리스트를 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공")
    })
    public ResponseEntity<GalaxyListRes> getGalaxyList () {
        return ResponseEntity.status(200).body(GalaxyListRes.of(galaxyService.getGalaxyList()));
    }

    // 은하 정보 조회 ====================================================================================================
    @GetMapping("/uid")
    @ApiOperation(value = "은하 정보 조회", notes = "<strong>uid</strong>를 기반으로 은하의 정보를 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = GalaxyRes.class)
    })
    public ResponseEntity<?> getGalaxy (
            @RequestParam @ApiParam(value = "은하 uid", required = true) Long uid
    ) {
        Optional<Galaxy> galaxy = galaxyService.getGalaxy(uid);
        if ( !galaxy.isPresent() ) {
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "존재하지 않는 은하입니다."));
        }
        return ResponseEntity.status(200).body(GalaxyRes.of(galaxy.get()));
    }
}
