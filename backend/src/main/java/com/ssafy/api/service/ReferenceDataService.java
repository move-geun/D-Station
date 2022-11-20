package com.ssafy.api.service;

import java.util.ArrayList;

import com.ssafy.api.response.ReferenceData.ReferenceDataRes;

public interface ReferenceDataService{

	ArrayList<ReferenceDataRes> getReferenceDataByMUid(long uid);
}
