package com.ssafy.api.response.til;

import com.ssafy.common.model.response.BaseResponseBody;
//import com.ssafy.db.entity.User;
import com.ssafy.db.entity.User;

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
@ApiModel("TILCreateRepoRes")
public class TILCreateRepoRes extends BaseResponseBody {
	@ApiModelProperty(name = "repoName")
	String repoName;
	@ApiModelProperty(name = "statusCode")
	Integer statusCode;
	@ApiModelProperty(name = "message")
	String message;

	public static TILCreateRepoRes of(Integer statusCode, String message, String repoName) {
		return TILCreateRepoRes.builder()
				.statusCode(statusCode)
				.message(message)
				.repoName(repoName)
				.build();
	}
}
