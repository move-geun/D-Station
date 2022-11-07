package com.ssafy.api.response.mbti;

import java.util.List;

import com.ssafy.db.entity.MBTI;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("MBTIResponse")
public class MBTIRes {

    @ApiModelProperty(name = "mbti uid")
    Long uid;

    @ApiModelProperty(name = "유형")
    String type;
    
    @ApiModelProperty(name = "타이틀")
    String title;
    
    @ApiModelProperty(name = "설명")
    String description;
    
    @ApiModelProperty(name = "이미지소스")
    String imgsrc;
    
    @ApiModelProperty(name = "대분류")
    String bigSort;
    
    @ApiModelProperty(name = "소분류")
    List<String> smallSort;

    public static MBTIRes of(MBTI mbti, String bigSort, List<String> smallSort) {
        MBTIRes res = new MBTIRes();
        res.setUid(mbti.getUid());
        res.setDescription(mbti.getDescription());
        res.setImgsrc(mbti.getImgsrc());
        res.setTitle(mbti.getTitle());
        res.setType(mbti.getType());
        res.setBigSort(bigSort);
        res.setSmallSort(smallSort);
        return res;
    }
}
