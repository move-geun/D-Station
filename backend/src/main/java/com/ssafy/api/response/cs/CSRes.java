package com.ssafy.api.response.cs;

import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.CSKnow;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("CSResponse")
public class CSRes extends BaseResponseBody {

	@ApiModelProperty(name = "은하 uid")
	Long uid;

	@ApiModelProperty(name = "은하명")
	String csSubject;

	@ApiModelProperty(name = "은하명")
	String csContnet;

	public static CSRes of(Integer statusCode, String message, CSKnow cs) {
		CSRes res = new CSRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setUid(cs.getUid());
		res.setCsSubject(cs.getCsSubject());
		res.setCsContnet(cs.getCsContents());
		return res;
	}
}
