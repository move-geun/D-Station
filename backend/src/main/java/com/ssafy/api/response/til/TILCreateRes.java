package com.ssafy.api.response.til;

import java.util.HashMap;

import com.ssafy.common.model.response.BaseResponseBody;

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
@ApiModel("TILCreateRes")
public class TILCreateRes extends BaseResponseBody {

	@ApiModelProperty(name = "repoName")
	String gitLink;
	@ApiModelProperty(name = "statusCode")
	Integer statusCode;
	@ApiModelProperty(name = "message")
	String message;

	public static TILCreateRes of(Integer statusCode, String message, String gitLink) {
		return TILCreateRes.builder()
				.statusCode(statusCode)
				.message(message)
				.gitLink(gitLink)
				.build();
	}
}
