package com.ssafy.api.service;

import com.ssafy.api.request.quiz.QuizReq;
import com.ssafy.db.entity.Quiz;

public interface QuizService{

	Quiz getQuizByMUid(long uid);
	
	Boolean isCorrect(QuizReq quizReq);
}
