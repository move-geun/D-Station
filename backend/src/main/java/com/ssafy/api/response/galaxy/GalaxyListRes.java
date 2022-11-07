package com.ssafy.api.response.galaxy;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("GalaxyListResponse")
public class GalaxyListRes {

    @ApiModelProperty
    List<GalaxyRes> list;

    public static GalaxyListRes of(List<GalaxyRes> galaxyRes) {
        GalaxyListRes res = new GalaxyListRes();
        res.setList(galaxyRes);
        return res;
    }
}
