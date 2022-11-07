package com.ssafy.api.response.mission;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("MissionListResponse")
public class MissionListRes {

    @ApiModelProperty(name = "미션 리스트")
    List<MissionRes> list;

    public static MissionListRes of (List<MissionRes> list) {
        MissionListRes res = new MissionListRes();
        res.setList(list);
        return res;
    }
}
