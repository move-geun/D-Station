package com.ssafy.api.response.satellite;

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
    
    @ApiModelProperty(name = "위성 설명")
    String sDescription;
    
    @ApiModelProperty(name = "행성명")
    long pUid;
    
    @ApiModelProperty(name = "행성 이름")
    String pName;
    
    @ApiModelProperty(name = "은하명")
    long gUid;
    
    @ApiModelProperty(name = "은하 설명")
    String gName;

    public static SatelliteRes of(Satellite satellite) {
        SatelliteRes res = new SatelliteRes();
        res.setUid(satellite.getUid());
        res.setSName(satellite.getSName());
        res.setSDescription(satellite.getSDescription());
        res.setPUid(satellite.getPlanet().getUid());
        res.setPName(satellite.getPName());
        res.setGUid(satellite.getGUid());
        res.setGName(satellite.getGName());
        return res;
    }
}
