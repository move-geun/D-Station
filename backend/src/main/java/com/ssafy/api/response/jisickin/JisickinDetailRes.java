package com.ssafy.api.response.jisickin;

import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@ApiModel("JisickinDetailResponse")
public class JisickinDetailRes {

    @ApiModelProperty(name = "질문 uid")
    Long uid;

    @ApiModelProperty(name = "태그")
    String tag;

    @ApiModelProperty(name = "작성자 아이디")
    String userId;

    @ApiModelProperty(name = "질문자")
    String nickname;

    @ApiModelProperty(name = "질문 제목")
    String title;

    @ApiModelProperty(name = "질문 내용")
    String content;

    @ApiModelProperty(name = "생성일 / 수정일")
    LocalDateTime theDate;


    public static JisickinDetailRes of(Jisickin jisickin) {
        JisickinDetailRes res = new JisickinDetailRes();
        res.setUid(jisickin.getUid());
        res.setTag(jisickin.getTag());
        res.setUserId(jisickin.getUser().getId());
        res.setNickname(jisickin.getUser().getNickname());
        res.setTitle(jisickin.getTitle());
        res.setContent(jisickin.getContent());
        if (jisickin.getUpdatedAt() != null) {
            res.setTheDate(jisickin.getUpdatedAt());
        } else {
            res.setTheDate(jisickin.getCreatedAt());
        }
        return res;
    }
}