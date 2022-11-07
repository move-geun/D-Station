package com.ssafy.api.request.reply;

import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("ReplyPostRequest")
public class ReplyPostReq {

    @ApiModelProperty(name = "답변 내용")
    String content;
    @ApiModelProperty(name = "질문 정보")
    Long jisickinUid;

}
