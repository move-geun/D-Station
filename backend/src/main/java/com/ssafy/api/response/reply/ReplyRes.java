package com.ssafy.api.response.reply;

import com.ssafy.db.entity.Reply;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("ReplyResponse")
public class ReplyRes {

    @ApiModelProperty(name = "답변 정보")
    Long uid;

    @ApiModelProperty(name = "답변자")
    String nickname;

    @ApiModelProperty(name = "답변 내용")
    String content;

    public static ReplyRes of(Reply reply) {
        ReplyRes res = new ReplyRes();
        res.setUid(res.getUid());
        res.setNickname(reply.getUser().getNickname());
        res.setContent(reply.getContent());
        return res;
    }
}
