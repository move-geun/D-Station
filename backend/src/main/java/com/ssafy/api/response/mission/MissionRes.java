package com.ssafy.api.response.mission;

import com.ssafy.db.entity.Mission;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("MissionResponse")
public class MissionRes {

    @ApiModelProperty(name = "미션 uid")
    Long uid;

    @ApiModelProperty(name = "미션 이름")
    String mName;

    @ApiModelProperty(name = "미션 태그")
    String mDescription;

    @ApiModelProperty(name = "위성 uid")
    long sUid;
    
    @ApiModelProperty(name = "위성 이름")
    String sName;
    
    @ApiModelProperty(name = "행성 uid")
    long pUid;
    
    @ApiModelProperty(name = "행성 이름")
    String pName;
    
    @ApiModelProperty(name = "은하 uid")
    long gUid;
    
    @ApiModelProperty(name = "은하 이름")
    String gName;
    
    public static MissionRes of(Mission mission) {
        MissionRes res = new MissionRes();
        res.setUid(mission.getUid());
        res.setMName(mission.getMName());
        res.setMDescription(mission.getMDescription());
        res.setSUid(mission.getSatellite().getUid());
        res.setSName(mission.getSName());
        res.setPUid(mission.getPUid());
        res.setPName(mission.getPName());
        res.setGUid(mission.getGUid());
        res.setGName(mission.getSName());
        return res;
    }
}
