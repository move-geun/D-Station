package com.ssafy.api.response.jisickin;

import com.ssafy.db.entity.Jisickin;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@ApiModel("JisickinResponse")
public class JisickinRes {

    @ApiModelProperty(name = "uid")
    Long uid;

    @ApiModelProperty(name = "tag")
    String tag;

    @ApiModelProperty(name = "title")
    String title;

    @ApiModelProperty(name = "nickname")
    String Nickname;

    @ApiModelProperty(name = "생성일 / 수정일")
    LocalDateTime theDate;

    public static JisickinRes of (Jisickin jisickin) {
        JisickinRes res = new JisickinRes();
        res.setUid(jisickin.getUid());
        res.setTag(jisickin.getTag());
        res.setTitle(jisickin.getTitle());
        res.setNickname(jisickin.getUser().getNickname());
        if (jisickin.getUpdatedAt() != null) {
            res.setTheDate(jisickin.getUpdatedAt());
        } else {
            res.setTheDate(jisickin.getCreatedAt());
        }
        return res;
    }
}
