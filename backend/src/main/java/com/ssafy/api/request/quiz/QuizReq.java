package com.ssafy.api.request.quiz;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("QuizReq")
public class QuizReq {
	
	@ApiModelProperty(name = "퀴즈 uid", example = "1")
	long qUid;
	
	@ApiModelProperty(name = "유저 ID", example = "ssafy")
	String id;
	
	@ApiModelProperty(name = "사용자가 고른 답", example = "true")
	Boolean userAnswer;
}
