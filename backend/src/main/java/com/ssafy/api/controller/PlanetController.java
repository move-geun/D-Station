package com.ssafy.api.controller;

import com.ssafy.api.response.planet.PlanetListRes;
import com.ssafy.api.response.planet.PlanetRes;
import com.ssafy.api.service.GalaxyService;
import com.ssafy.api.service.PlanetService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.entity.Planet;
import io.swagger.annotations.*;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@Api(value = "행성 API", tags = {"planet"})
@RestController
@RequestMapping("/api/planet")
public class PlanetController {

    @Autowired
    PlanetService planetService;

    @Autowired
    GalaxyService galaxyService;

    // 전체 행성 리스트 조회 ==============================================================================================
    @GetMapping("/list")
    @ApiOperation(value = "행성 리스트 조회", notes = "모든 행성의 리스트를 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공")
    })
    public ResponseEntity<PlanetListRes> getPlanetList () {
        return ResponseEntity.status(200).body(PlanetListRes.of(planetService.getPlanetList()));
    }

    // 행성 정보 조회 ====================================================================================================
    @GetMapping("/uid")
    @ApiOperation(value = "행성 조회", notes = "<strong>uid</strong>를 기반으로 행성의 정보를 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = PlanetRes.class)
    })
    public ResponseEntity<?> getPlanet (
            @RequestBody @ApiParam(value = "행성 uid", required = true) Long uid
    ) {
        Optional<Planet> planet = planetService.getPlanet(uid);
        if( !planet.isPresent() ) {
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "존재하지 않는 행성입니다."));
        }
        return ResponseEntity.status(200).body(PlanetRes.of(planet.get()));
    }

    // 은하 내 행성 리스트 조회 ===========================================================================================
    @GetMapping("/list_by_galaxy")
    @ApiOperation(value = "행성 리스트 조회", notes = "<strong>은하 uid</strong>를 기반으로 행성의 정보를 불러온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = PlanetRes.class),
            @ApiResponse(code = 404, message = "데이터 없음")
    })
    public ResponseEntity<?> getPlanetByGuid (
            @RequestBody @ApiParam(value = "은하 uid", required = true) Long uid
    ) {
        Optional<Galaxy> galaxy = galaxyService.getGalaxy(uid);
        if ( !galaxy.isPresent() ) {
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "존재하지 않는 은하입니다."));
        }
        return ResponseEntity.status(200).body(PlanetListRes.of(planetService.getPlanetsByGUid(uid)));
    }
}
