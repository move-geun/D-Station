package com.ssafy.api.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.response.ReferenceData.ReferenceDataRes;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.ReferenceData;
import com.ssafy.db.repository.MissionRepository;
import com.ssafy.db.repository.ReferenceDataRepository;

@Service
public class ReferenceDataServiceImpl implements ReferenceDataService {

	@Autowired
	ReferenceDataRepository referenceDataRepository;

	@Autowired
	MissionRepository missionRepository;

	@Override
	public ArrayList<ReferenceDataRes> getReferenceDataByMUid(long uid) {
		Optional<Mission> mission = missionRepository.getMissionByUid(uid);
		ArrayList<ReferenceData> rList = referenceDataRepository.getReferenceDataByMission(mission);
		ArrayList<ReferenceDataRes> list = new ArrayList<ReferenceDataRes>();

		for (int i = 0; i < rList.size(); i++) {
			list.add(ReferenceDataRes.of(rList.get(i)));
		}
		System.err.println("=======serviceImpl : " + list.size());
		return list;
	}

}
