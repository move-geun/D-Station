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
		boolean answer = quizRepository.getQuizByUid(quizReq.getQUid()).isAnswer();
		
		
		//정답을 맞췄을때
		if (answer == quizReq.getUserAnswer()) {
			User user = userRepository.getUsersById(quizReq.getId()).get();
			Quiz quiz = quizRepository.getQuizByUid(quizReq.getQUid());
			Mission mission = missionRepository.getMissionByUid(quiz.getMission().getUid()).get();
			MissionCompleted mc = new MissionCompleted();

			mc.setUser(user);
			mc.setMission(mission);
			mc.setCompleted(true);

			Optional<MissionCompleted> mc2 = missionCompletedRepository.getMissionCompletedByUserAndMission(user, mission);
			
			//mc2가 존재하면
			if (mc2.isPresent()) {
				MissionCompleted m = mc2.get();
				if ((mc.getUser() == m.getUser()) && (mc.getMission() == m.getMission())) {
					System.out.println("이미 존재");
				}
			} else {
				System.out.println("존재안함");
				missionCompletedRepository.save(mc);
				
				// 경험치 +5
				user.addExp(user.getExp());
				userRepository.save(user);
			}
			return true;
		} else {
			return false;
		}
	}

}
