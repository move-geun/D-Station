package com.ssafy.api.request.til;

import java.sql.Blob;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("TILCreateReq")
public class TILCreateReq {

	@ApiModelProperty(name = "사용자 id", example = "ssafy123")
	String id;
	@ApiModelProperty(name = "내용", example = "제가 미국에 있었을때는 말이죠..")
	String content;
	@ApiModelProperty(name = "미션 uid", example = "1")
	long missionUid ;
	@ApiModelProperty(name = "md 파일 이름", example = "20221102 자료구조.md")
	String fileName;
	@ApiModelProperty(name = "commit message", example = "Create 20221102 자료구조")
	String message;
	
}
