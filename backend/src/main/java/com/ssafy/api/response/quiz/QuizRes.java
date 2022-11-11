package com.ssafy.api.response.quiz;

import com.ssafy.db.entity.Quiz;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
@ApiModel("quizRes")
public class QuizRes{

	@ApiModelProperty(name = "quiz uid", example = "1")
	long qUid;
	
	@ApiModelProperty(name = "answer", example = "true")
	boolean answer;
	
	@ApiModelProperty(name = "퀴즈 내용", example = "이클립스는 프로그래밍언어이다.")
	String content;
	
	@ApiModelProperty(name = "mission uid", example = "1")
	long mUid;
	
	public static QuizRes of(Quiz quiz) {
		return QuizRes.builder()
				.qUid(quiz.getUid())
				.answer(quiz.isAnswer())
				.content(quiz.getContent())
				.mUid(quiz.getMission().getUid())
				.build();
	}
}
