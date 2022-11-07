package com.ssafy.api.response.til;

import com.ssafy.db.entity.Mission;

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
@ApiModel("MissionDirRes")
public class MissionDirRes {

	@ApiModelProperty(name = "행성 이름 ", example = "java")
	String planetName;
	@ApiModelProperty(name = "위성 이름 ", example = "자료구조")
	String satellitesName;

	public static MissionDirRes of(Mission mission) {
		return MissionDirRes.builder()
				.satellitesName(mission.getSatellite().getSName())
				.planetName(mission.getSatellite().getPlanet().getPName())
				.build();
	}

}
