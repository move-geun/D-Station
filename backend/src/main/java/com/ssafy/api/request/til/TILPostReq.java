package com.ssafy.api.request.til;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;

@Getter
@Setter
@ApiModel("TILPostRequest")
public class TILPostReq {

    @ApiModelProperty
    Blob content;
}
