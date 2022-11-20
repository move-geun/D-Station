package com.ssafy.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.ssafy.api.response.satellite.SatelliteRes;
import com.ssafy.api.response.satellite.SearchRes;
import com.ssafy.db.entity.Satellite;

public interface SatelliteService {

	// 위성 리스트 조회
	List<SatelliteRes> getSatelliteList();

	// uid로 위성 정보 조회
	Optional<Satellite> getSatellite(Long uid);

	// 행성 uid로 위성 리스트 조회
	List<SatelliteRes> getSatellitesByGUid(Long uid);

	//키워득 검색
	ArrayList<SearchRes> SearchByKeyword(String keyword);
}
