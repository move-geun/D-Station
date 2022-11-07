package com.ssafy.api.response.jisickin;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "JisickinListResponse")
public class JisickinListRes {

    @ApiModelProperty(name = "질문 리스트")
    List<JisickinRes> list;

    public static JisickinListRes of(List<JisickinRes> jisickinRes) {
        JisickinListRes res = new JisickinListRes();
        res.setList(jisickinRes);
        return res;
    }
}
