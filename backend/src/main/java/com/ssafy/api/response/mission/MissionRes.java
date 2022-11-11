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
    String quest;

    @ApiModelProperty(name = "미션 태그")
    String mTag;

    @ApiModelProperty(name = "미션 URL")
    String mUrl;

    public static MissionRes of(Mission mission) {
        MissionRes res = new MissionRes();
        res.setUid(mission.getUid());
//        res.setQuest(mission.getQuest());
//        res.setMTag(mission.getMTag());
//        res.setMUrl(mission.getMUrl());
        return res;
    }
}
