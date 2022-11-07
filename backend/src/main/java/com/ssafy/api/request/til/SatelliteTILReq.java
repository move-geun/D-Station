package com.ssafy.api.request.til;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("SatelliteTILReq")
public class SatelliteTILReq {

	@ApiModelProperty(name = "사용자 id", example = "ssafy123")
	String id;
//	@ApiModelProperty(name = "satelliteName", example = "위성이름")
//	String satelliteName;
	@ApiModelProperty(name = "satellite uid", example = "위성 uid")
	long sUid;
}
