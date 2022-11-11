package com.ssafy.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.Quiz;
import com.ssafy.db.repository.MissionRepository;
import com.ssafy.db.repository.QuizRepository;

@Service
public class QuizServiceImpl implements QuizService {

	@Autowired
	QuizRepository quizRepository;

	@Autowired
	MissionRepository missionRepository;

	@Override
	public Quiz getQuizByMUid(long uid) {
		Optional<Mission> mission = missionRepository.getMissionByUid(uid);
		Quiz quiz = quizRepository.getQuizByMission(mission);
		return quiz;
	}

}
