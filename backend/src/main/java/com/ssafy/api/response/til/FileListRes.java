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
@ApiModel("FileListRes")
public class FileListRes extends BaseResponseBody {
	@ApiModelProperty(name = "Name")
	HashMap<String, String> list;

}
