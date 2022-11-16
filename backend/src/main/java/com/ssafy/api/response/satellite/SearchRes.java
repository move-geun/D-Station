package com.ssafy.api.response.satellite;

import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Satellite;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("SearchRes")
public class SearchRes {

	@ApiModelProperty(name = "은하 uid")
	long gUid;

	@ApiModelProperty(name = "은하명")
	String gName;

	@ApiModelProperty(name = "행성명")
	long pUid;

	@ApiModelProperty(name = "행성 이름")
	String pName;

	@ApiModelProperty(name = "위성 uid")
	long sUid;

	@ApiModelProperty(name = "위성명")
	String sName;

	public static SearchRes of(Satellite satellite) {
		SearchRes res = new SearchRes();
		res.setSUid(satellite.getUid());
		res.setSName(satellite.getSName());
		res.setPUid(satellite.getPlanet().getUid());
		res.setPName(satellite.getPName());
		res.setGUid(satellite.getGUid());
		res.setGName(satellite.getGName());
		return res;
	}

	public static SearchRes of(Planet planet) {
		SearchRes res = new SearchRes();
		res.setPUid(planet.getUid());
		res.setPName(planet.getPName());
		res.setGUid(planet.getGalaxy().getUid());
		res.setGName(planet.getGalaxy().getGName());
		return res;
	}

	public static SearchRes of(Galaxy galaxy) {
		SearchRes res = new SearchRes();
		res.setGUid(galaxy.getUid());
		res.setGName(galaxy.getGName());
		return res;
	}
}
