package com.ssafy.api.service;

import java.util.ArrayList;

import com.ssafy.api.request.til.TILCreateReq;
import com.ssafy.api.request.til.TILRepoReq;
import com.ssafy.api.response.til.MissionTILRes;
import com.ssafy.api.response.til.SatelliteTILRes;
import com.ssafy.api.response.til.TILListByUserRes;

public interface TILService {

	String createRepo(TILRepoReq tILRepoReq);

	ArrayList<String> getRepo(String id);
	
	ArrayList<String> getRepoDir(TILRepoReq tILRepoReq);
	
	String createTIL(TILCreateReq tILCreateReq);
	
	ArrayList<TILListByUserRes> getTILListByUser(String id);
	
	ArrayList<SatelliteTILRes> getUserTILBySatellite(String id,long sUid);
	
	MissionTILRes getUserTILByMission(String id,long mUid);
	
}
