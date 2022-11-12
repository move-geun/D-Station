package com.ssafy.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.quiz.QuizReq;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.MissionCompleted;
import com.ssafy.db.entity.Quiz;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.MissionCompletedRepository;
import com.ssafy.db.repository.MissionRepository;
import com.ssafy.db.repository.QuizRepository;
import com.ssafy.db.repository.UserRepository;

@Service
public class QuizServiceImpl implements QuizService {

	@Autowired
	QuizRepository quizRepository;

	@Autowired
	MissionRepository missionRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	MissionCompletedRepository missionCompletedRepository;

	@Override
	public Quiz getQuizByMUid(long uid) {
		Optional<Mission> mission = missionRepository.getMissionByUid(uid);
		Quiz quiz = quizRepository.getQuizByMission(mission);
		return quiz;
	}

	@Override
	public Boolean isCorrect(QuizReq quizReq) {
		Quiz quiz = quizRepository.getQuizByUid(quizReq.getQUid());
		boolean answer = quizRepository.getQuizByUid(quizReq.getQUid()).isAnswer();
		if (answer == quizReq.getUserAnswer()) {
			User user = userRepository.getUsersById(quizReq.getId()).get();
			
			MissionCompleted mc = new MissionCompleted();
			mc.setUser(user);
			mc.setMission(missionRepository.getMissionByUid(quizReq.getMUid()).get());
			mc.setCompleted(true);
			missionCompletedRepository.save(mc);
			//경험치 +5
			user.addExp(5);
			userRepository.save(user);
			return true;
		} else {
			return false;
		}
	}

}
