package com.ssafy.api.service;

import com.ssafy.api.request.user.UserRegisterPostReq;
import com.ssafy.db.entity.User;

import java.util.Optional;


/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
	User createUser(UserRegisterPostReq userRegisterInfo);

	User getUserByNickname(String nickname);

	String getUserIdByGithubCode(String githubCode);

	User getUserById(String id);
	
	Optional<User> getUserByUid(Long uid);

	boolean login(String id);
	
}
