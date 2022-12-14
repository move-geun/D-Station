package com.ssafy.api.response.user;

import com.ssafy.common.model.response.BaseResponseBody;
//import com.ssafy.db.entity.User;
import com.ssafy.db.entity.User;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("UserResponse")
public class UserRes extends BaseResponseBody{
	@ApiModelProperty(name = "user ID")
	String Id;
	@ApiModelProperty(name = "user nickname")
	String nickname;

	public static UserRes of(Integer statusCode, String message, User user) {
		UserRes res = new UserRes();
		if (user == null) {
			res.setStatusCode(statusCode);
			res.setMessage(message);
			res.setId(null);
			res.setNickname(null);
			return res;
		} else {
			res.setStatusCode(statusCode);
			res.setMessage(message);
			res.setId(user.getId());
			res.setNickname(user.getNickname());
			return res;
		}
	}
}
