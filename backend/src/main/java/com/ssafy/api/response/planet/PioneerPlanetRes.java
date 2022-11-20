package com.ssafy.api.response.planet;

import com.ssafy.db.entity.Planet;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel("PioneerPlanetResponse")
public class PioneerPlanetRes {

    @ApiModelProperty(name = "행성 정보")
    Long pUid;

    @ApiModelProperty(name = "행성 이미지 url")
    String pImage;

    @ApiModelProperty(name = "개척도")
    Double progress;

    public static PioneerPlanetRes of(Planet planet, double progress) {
        PioneerPlanetRes res = new PioneerPlanetRes();
        res.setPUid(planet.getUid());
        res.setPImage(planet.getPImage());
        res.setProgress(progress);
        return res;
    }
}
