package com.ssafy.api.response.planet;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("PlanetListResponse")
public class PlanetListRes {

    @ApiModelProperty
    List<PlanetRes> list;

    public static PlanetListRes of(List<PlanetRes> planetRes) {
        PlanetListRes res = new PlanetListRes();
        res.setList(planetRes);
        return res;
    }
}
