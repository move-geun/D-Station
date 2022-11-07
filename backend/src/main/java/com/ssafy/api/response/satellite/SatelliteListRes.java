package com.ssafy.api.response.satellite;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("SatelliteListResponse")
public class SatelliteListRes {

    @ApiModelProperty
    List<SatelliteRes> list;

    public static SatelliteListRes of(List<SatelliteRes> satelliteRes) {
        SatelliteListRes res = new SatelliteListRes();
        res.setList(satelliteRes);
        return res;
    }
}
