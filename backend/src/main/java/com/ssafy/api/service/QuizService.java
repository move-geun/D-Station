package com.ssafy.api.service;

import com.ssafy.db.entity.Quiz;

public interface QuizService{

	Quiz getQuizByMUid(long uid);
}
