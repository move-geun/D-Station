package com.ssafy.api.request.jisickin;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("JisickinPostRequest")
public class JisickinPostReq {

    @ApiModelProperty(name = "tag")
    String tag;

    @ApiModelProperty(name = "title")
    String title;

    @ApiModelProperty(name = "content")
    String content;

}
