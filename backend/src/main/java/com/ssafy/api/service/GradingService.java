package com.ssafy.api.service;

import java.io.IOException;

import com.ssafy.api.response.grading.GradingRes;

public interface GradingService {

    String gradingJava(String code) throws IOException;
    String gradingPython(int uid, String code) throws IOException;
    GradingRes getProblem(int uid);
    GradingRes getProblemByMUid(long uid);
}
