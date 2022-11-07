package com.ssafy.api.response.til;

import java.util.ArrayList;

import com.ssafy.common.model.response.BaseResponseBody;
//import com.ssafy.db.entity.User;
import com.ssafy.db.entity.User;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@ApiModel("RepoListRes")
public class RepoListRes extends BaseResponseBody {
	@ApiModelProperty(name = "Name")
	ArrayList<String> Name;

	public static RepoListRes of(Integer statusCode, String message, ArrayList<String> list) {
		RepoListRes res = new RepoListRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setName(list);
		return res;
	}
}
