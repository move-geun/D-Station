package com.ssafy.api.response.grading;

import com.ssafy.db.entity.Problem;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("GalaxyListResponse")
public class GradingRes {

    @ApiModelProperty(name = "문제 uid")
    Long uid;

    @ApiModelProperty(name = "문제 이름")
    String name;
    
    @ApiModelProperty(name = "문제 내용")
    String content;

    public static GradingRes of(Problem problem) {
        GradingRes res = new GradingRes();
        res.setUid(problem.getUid());
        res.setName(problem.getName());
        res.setContent(problem.getContent());
        return res;
    }
}
