package com.ssafy.api.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.StringTokenizer;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.user.UserRegisterPostReq;
import com.ssafy.db.entity.User;
//import com.ssafy.db.entity.User;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;

import java.util.Optional;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Component
@Service("Userervice")
public class UserServiceImpl implements UserService {

	@Value("${clientId}")
	private String clientId;
	@Value("${clientSecret}")
	private String clientSecret;

	@Autowired
	UserRepository userRepository;

	@Autowired
	UserRepositorySupport userRepositorySupport;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public User createUser(UserRegisterPostReq userRegisterInfo) {
		User user = new User();
		user.setId(userRegisterInfo.getId());
		user.setNickname(userRegisterInfo.getNickname());
		// 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
		// user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
		return userRepository.save(user);
	}

	@Override
	public User getUserByNickname(String nickname) {
		// 디비에 유저 정보 조회 (nickname 를 통한 조회).
		if (!userRepository.findByNickname(nickname).isPresent())
			return null;
		User user = userRepository.findUserByNickname(nickname).get();
		return user;
	}

	@Override
	public String getUserIdByGithubCode(String githubCode) {
		String userInfo = "";
		String userLogin = "";
		String userId = "";

		// 사용자 인가 code로 accessToken 얻어오기
		// String redirectUri = "http://k7e106.p.ssafy.io:3000";
		String redirectUri = "http://localhost:3000/github";
		String accessToken = "";

		try {
			URL url = new URL("https://github.com/login/oauth/access_token?client_id=" + clientId + "&client_secret="
					+ clientSecret + "&code=" + githubCode + "&redirect_uri=" + redirectUri);

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("POST"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line = br.readLine();
			StringTokenizer st;
			StringTokenizer st2;

			if (line != null) {
				if (line.contains("access_token")) {
					st = new StringTokenizer(line, "&");
					st2 = new StringTokenizer(st.nextToken(), "=");
					st2.nextToken();
					accessToken = st2.nextToken();
				} else {
					System.out.println("=====Incorrect code");
					return null;
				}

			}
		} catch (Exception e) {
			System.out.println("========Incorrect URL");
			return null;
		}

		// 위에서 얻은 access token 으로 user 정보 얻어오기
		try {
			URL url = new URL("https://api.github.com/user");

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("Authorization", "token " + accessToken); // header의 auth 정보
			// System.err.println("token " + accessToken);
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuilder sb = new StringBuilder();
			String line = null;

			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			// System.err.println("sb : " + sb);
			userLogin = obj.getString("login");
			userId = Integer.toString(obj.getInt("id"));
			userInfo = userLogin + "," + userId;
			return userInfo;

		} catch (Exception e) {
			System.out.println("=========user 정보 얻기 실패");
			return null;
		}
	}

	@Override
	public User getUserById(String id) {
		// 디비에 유저 정보 조회 (id 를 통한 조회).
		if (!userRepository.findById(id).isPresent())
			return null;
		User user = userRepository.findUserById(id).get();
		return user;
	}

	@Override
	public Optional<User> getUserByUid(Long uid) {
		Optional<User> user = userRepository.findById(uid);
		if (user.isPresent()) {
			return user;

		} 
		return null;
	}

	@Override
	public boolean login(String id) {



		return false;
	}


}
