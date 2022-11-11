package com.ssafy.api.response.til;

import java.time.LocalDateTime;

import com.ssafy.common.model.response.BaseResponseBody;
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
@ApiModel("TILListByUserRes")
public class TILListByUserRes{

//	@ApiModelProperty(name = "message", example = "Success")
//	String message;
	@ApiModelProperty(name = "til uid", example = "1")
	long tilUid;
	@ApiModelProperty(name = "missionUid", example = "1")
	long missionUid;
	@ApiModelProperty(name = "galaxyName", example = "은하이름")
	String galaxyName;
	@ApiModelProperty(name = "planetName", example = "행성이름")
	String planetName;
	@ApiModelProperty(name = "satelliteName", example = "위성이름")
	String satelliteName;
	@ApiModelProperty(name = "mission", example = "미션이름")
	String mission;
	@ApiModelProperty(name = "fileName", example = "TIL 파일 이름")
	String fileName;
	@ApiModelProperty(name = "link", example = "TIL 링크")
	String link;
	@ApiModelProperty(name = "regDate", example = "TIL 작성 일자")
	LocalDateTime regDate;

	public static TILListByUserRes of(TIL til) {
		return TILListByUserRes.builder()
				.tilUid(til.getUid())
				.missionUid(til.getMission().getUid())
				.galaxyName(til.getMission().getSatellite().getPlanet().getGalaxy().getGName())
				.planetName(til.getMission().getSatellite().getPlanet().getPName())
				.satelliteName(til.getMission().getSatellite().getSName())
				.mission(til.getMission().getMName())
				.fileName(til.getFileName())
				.link(til.getAddress())
				.regDate(til.getDate())
				.build();
	}
}
