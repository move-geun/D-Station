package com.ssafy.api.service;

import java.io.IOException;

public interface GradingService {

    String gradingJava(String code) throws IOException;
    String gradingPython(int uid, String code) throws IOException;

}
