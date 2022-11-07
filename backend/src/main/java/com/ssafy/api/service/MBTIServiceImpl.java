package com.ssafy.api.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.MBTI.MBTIPostReq;
import com.ssafy.api.response.mbti.MBTIRes;
import com.ssafy.db.entity.MBTI;
import com.ssafy.db.repository.MBTIRepository;

@Service
public class MBTIServiceImpl implements MBTIService {
	@Autowired
	MBTIRepository mBTIRepository;
	
	@Override
	public MBTIRes getResult(MBTIPostReq req) {
		// infp
		// estj
		List ans = req.getAns();
		int[][] result = new int[4][2];
		for (int i = 0; i < 12; i++) {
			result[i / 3][(int)ans.get(i) - 1]++;
		}
		String res = "";
		for(int i=0; i<4; i++) {
			System.out.println(Arrays.toString(result[i]));
		}
		res += result[0][0] > result [0][1] ? "I" : "E";
		res += result[1][0] > result [1][1] ? "N" : "S";
		res += result[2][0] > result [2][1] ? "F" : "T";
		res += result[3][0] > result [3][1] ? "P" : "J";
		MBTI mbti = mBTIRepository.findMBTIByType(res).get();
		ArrayList<String> BackSmallSort = new ArrayList<>();
		ArrayList<String> FrontSmallSort = new ArrayList<>();
		ArrayList<String> DevSmallSort = new ArrayList<>();
		BackSmallSort.add("백엔드 개발자");
		BackSmallSort.add("서버 개발자");
		BackSmallSort.add("웹 풀스택");
		BackSmallSort.add("머신러닝/인공지능");
		BackSmallSort.add("Android 앱 개발자");
		BackSmallSort.add("데이터 엔지니어");
		BackSmallSort.add("ios 앱 개발자");
		BackSmallSort.add("임베디드 소프트웨어 개발자");
		BackSmallSort.add("데스크탑 앱 개발자");
		BackSmallSort.add("게임 서버 개발자");
		BackSmallSort.add("블록체인 개발자");
		BackSmallSort.add("QA");
		BackSmallSort.add("시스템 네트워크");
		FrontSmallSort.add("프론트엔드 개발자");
		FrontSmallSort.add("모션 디자이너");
		FrontSmallSort.add("웹 풀스택");
		FrontSmallSort.add("Android 앱 개발자");
		FrontSmallSort.add("ios 앱 개발자");
		FrontSmallSort.add("게임 클라이언트 개발자");
		FrontSmallSort.add("UI/UX");
		FrontSmallSort.add("데스크탑 앱 개발자");
		FrontSmallSort.add("QA");
		DevSmallSort.add("DevOps 엔지니어");
		DevSmallSort.add("데이터 엔지니어");
		DevSmallSort.add("보안 전문가");
		DevSmallSort.add("임베디드 소프트웨어 개발자");
		DevSmallSort.add("사물인터넷 개발자");
		DevSmallSort.add("시스템/네트워크");
		DevSmallSort.add("QA");
		
		HashMap<String, String> bigSortMap = new HashMap<>();
		bigSortMap.put("INFP", "백엔드 개발자");
		bigSortMap.put("INFJ", "백엔드 개발자");
		bigSortMap.put("INTP", "백엔드 개발자");
		bigSortMap.put("INTJ", "백엔드 개발자");
		bigSortMap.put("ISFP", "프론트엔드 개발자");
		bigSortMap.put("ISFJ", "백엔드 개발자");
		bigSortMap.put("ISTP", "프론트엔드 개발자");
		bigSortMap.put("ISTJ", "백엔드 개발자");
		bigSortMap.put("ENFP", "데브 옵스 개발자");
		bigSortMap.put("ENFJ", "프론트엔드 개발자");
		bigSortMap.put("ENTP", "데브 옵스 개발자");
		bigSortMap.put("ENTJ", "프론트엔드 개발자");
		bigSortMap.put("ESFP", "데브 옵스 개발자");
		bigSortMap.put("ESFJ", "프론트엔드 개발자");
		bigSortMap.put("ESTP", "데브 옵스 개발자");
		bigSortMap.put("ESTJ", "프론트엔드 개발자");
		String bigSort = bigSortMap.get(res);
		List<String> smallSort = null;
		if(bigSort.compareTo("백엔드 개발자")==0) {
			smallSort = BackSmallSort;
		} else if (bigSort.compareTo("프론트엔드 개발자")==0) {
			smallSort = FrontSmallSort;
		} else {
			smallSort = DevSmallSort;
		}
		MBTIRes mbtiRes = MBTIRes.of(mbti, bigSort, smallSort);
		return mbtiRes;
	}

}
