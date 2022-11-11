package com.ssafy.api.response.planet;

import com.ssafy.api.response.galaxy.GalaxyRes;
import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.entity.Planet;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("PlanetListResponse")
public class PlanetRes {

    @ApiModelProperty(name = "행성 uid")
    Long uid;

    @ApiModelProperty(name = "행성명")
    String pName;

    @ApiModelProperty(name = "행성 이미지")
    String pImage;

    @ApiModelProperty(name = "행성 설명")
    String pDescription;

    public static PlanetRes of(Planet planet) {
        PlanetRes res = new PlanetRes();
        res.setUid(planet.getUid());
        res.setPName(planet.getPName());
        res.setPImage(planet.getPImage());
        res.setPDescription(planet.getPDescription());
        return res;
    }
}
