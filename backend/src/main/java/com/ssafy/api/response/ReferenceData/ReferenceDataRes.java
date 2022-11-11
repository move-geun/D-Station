package com.ssafy.api.response.ReferenceData;

import java.time.LocalDateTime;

import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.ReferenceData;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
@ApiModel("ReferenceDataRes")
public class ReferenceDataRes{

	@ApiModelProperty(name = "reference uid", example = "1")
	long rUid;
	@ApiModelProperty(name = "reference URL", example = "www.ssafy.com")
	String rUrl;
	@ApiModelProperty(name = "참고 자료 제목", example = "파이썬의 자료구조")
	String title;
	@ApiModelProperty(name = "mission uid", example = "1")
	long muid;

	public static ReferenceDataRes of(ReferenceData referenceData) {
		return ReferenceDataRes.builder()
				.rUid(referenceData.getUid())
				.rUrl(referenceData.getRUrl())
				.title(referenceData.getTitle())
				.muid(referenceData.getMission().getUid())
				.build();
	}
}
