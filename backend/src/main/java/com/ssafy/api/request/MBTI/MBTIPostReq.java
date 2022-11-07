package com.ssafy.api.request.MBTI;

import java.util.List;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("MBTIPostRequest")
public class MBTIPostReq {
	@ApiModelProperty(name="answer", example="true")
	List<Integer> ans;
}
