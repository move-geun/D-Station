package com.ssafy.api.response.satellite;

import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Satellite;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("SatelliteResponse")
public class SatelliteRes {

    @ApiModelProperty(name = "위성 uid")
    Long uid;

    @ApiModelProperty(name = "위성명")
    String sName;

    public static SatelliteRes of(Satellite satellite) {
        SatelliteRes res = new SatelliteRes();
        res.setUid(satellite.getUid());
        res.setSName(satellite.getSName());
        return res;
    }
}
