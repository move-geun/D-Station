package com.ssafy.api.request.til;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;

@Getter
@Setter
@ApiModel("TILRepoReq")
public class TILRepoReq {

	@ApiModelProperty(name="유저 ID", example="ssafy123")
	String id;
	@ApiModelProperty(name="repo_name", example="TIL")
	String repoName;
}
