package com.ssafy.api.response.user;

import java.util.StringTokenizer;

import com.ssafy.common.model.response.BaseResponseBody;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 깃헙 사용자 check API ([POST] //api/user/github/check) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("UserGithubCheckRes")
public class UserGithubCheckRes extends BaseResponseBody{

	@ApiModelProperty(name = "user github id", example = "ssafy123")
	String githubId;
	@ApiModelProperty(name = "user github uid", example = "1257843")
	String githubUid;

	public static UserGithubCheckRes of(Integer statusCode, String message, String userInfo) {
		UserGithubCheckRes res = new UserGithubCheckRes();
		if (userInfo == null) {
			res.setStatusCode(statusCode);
			res.setMessage(message);
			res.setGithubId(null);
			res.setGithubUid(null);
			return res;
		} else {
			StringTokenizer st = new StringTokenizer(userInfo, ",");
			res.setStatusCode(statusCode);
			res.setMessage(message);
			res.setGithubId(st.nextToken());
			res.setGithubUid(st.nextToken());
			return res;
		}
	}
}
