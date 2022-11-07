package com.ssafy.api.service;

import com.ssafy.api.response.profile.ProfileDto;
import com.ssafy.db.entity.User;

public interface ProfileService {

    ProfileDto getProfileImage(User user);
}