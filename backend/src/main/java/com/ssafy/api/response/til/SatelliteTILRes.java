package com.ssafy.api.response.til;

import java.time.LocalDateTime;
import java.util.HashMap;

import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.TIL;

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
@ApiModel("SatelliteTILRes")
public class SatelliteTILRes {
	@ApiModelProperty(name = "mission uid", example = "1")
	long mUid;
	@ApiModelProperty(name = "TIL uid", example = "1")
	long TILUid;
	@ApiModelProperty(name = "mission", example = "미션이름")
	String mission;
	@ApiModelProperty(name = "fileName", example = "TIL 파일 이름")
	String fileName;
	@ApiModelProperty(name = "link", example = "TIL 링크")
	String link;
	@ApiModelProperty(name = "regDate", example = "TIL 작성 일자")
	LocalDateTime regDate;

	public static SatelliteTILRes of(TILListByUserRes tILListByUserRes) {
		return SatelliteTILRes.builder()
				.mUid(tILListByUserRes.getMissionUid())
				.TILUid(tILListByUserRes.getTilUid())
				.mission(tILListByUserRes.getMission())
				.fileName(tILListByUserRes.getFileName())
				.link(tILListByUserRes.getLink())
				.regDate(tILListByUserRes.getRegDate())
				.build();
	}
	

}
