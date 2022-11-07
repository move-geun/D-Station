package com.ssafy.api.response.reply;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("ReplyListResponse")
public class ReplyListRes {

    @ApiModelProperty
    List<ReplyRes> list;

    public static ReplyListRes of(List<ReplyRes> replyRes) {
        ReplyListRes res = new ReplyListRes();
        res.setList(replyRes);
        return res;
    }
}
