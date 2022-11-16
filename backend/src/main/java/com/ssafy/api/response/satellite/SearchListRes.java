package com.ssafy.api.response.satellite;

import java.util.ArrayList;

import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Satellite;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("SearchListRes")
public class SearchListRes {

	@ApiModelProperty(name = "은하 uid")
	ArrayList<SearchRes> list;

	public static SearchListRes of(ArrayList<SearchRes> searchRes) {
		SearchListRes res = new SearchListRes();
		res.setList(searchRes);
		return res;
	}

}
