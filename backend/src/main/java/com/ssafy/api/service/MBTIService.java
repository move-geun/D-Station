package com.ssafy.api.service;

import com.ssafy.api.request.MBTI.MBTIPostReq;
import com.ssafy.api.response.mbti.MBTIRes;

public interface MBTIService {

    MBTIRes getResult(MBTIPostReq req);
}
