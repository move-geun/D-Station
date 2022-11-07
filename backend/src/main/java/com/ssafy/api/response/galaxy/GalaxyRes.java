package com.ssafy.api.response.galaxy;

import com.ssafy.db.entity.Galaxy;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("GalaxyListResponse")
public class GalaxyRes {

    @ApiModelProperty(name = "은하 uid")
    Long uid;

    @ApiModelProperty(name = "은하명")
    String gName;

    public static GalaxyRes of(Galaxy galaxy) {
        GalaxyRes res = new GalaxyRes();
        res.setUid(galaxy.getUid());
        res.setGName(galaxy.getGName());
        return res;
    }
}
