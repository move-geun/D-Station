package com.ssafy.api.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.til.SatelliteTILReq;
import com.ssafy.api.request.til.TILCreateReq;
import com.ssafy.api.request.til.TILPostReq;
import com.ssafy.api.request.til.TILRepoReq;
import com.ssafy.api.response.til.MissionDirRes;
import com.ssafy.api.response.til.SatelliteTILRes;
import com.ssafy.api.response.til.TILListByUserRes;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.Satellite;
import com.ssafy.db.entity.TIL;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.MissionRepository;
import com.ssafy.db.repository.SatelliteRepository;
import com.ssafy.db.repository.TILRepository;
import com.ssafy.db.repository.UserRepository;

@Service
public class TILServiceImpl implements TILService {

	@Autowired
	TILRepository tilRepository;
	@Autowired
	MissionRepository missionRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	SatelliteRepository satelliteRepository;

	@Override
	public void createTIl(TILPostReq tilPostReq) {

	}

	// repo 생성
	@Override
	public String createRepo(TILRepoReq tILRepoReq) {

		ArrayList<String> repoList = getRepo(tILRepoReq.getId());

		for (int i = 0; i < repoList.size(); i++) {
			if (repoList.get(i).equals(tILRepoReq.getRepoName())) {
				return "중복";
			}
		}

		String repoName = "";

		// user id로 user 정보 얻어오기
		User user = userRepository.getUsersById(tILRepoReq.getId()).get();
		String personalAccessToken = user.getPat();

		// git API 사용
		try {
			URL url = new URL("https://api.github.com/user/repos");

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("POST"); // http 메서드
			conn.setRequestProperty("Content-Type", "applicaiton/json;utf-8"); // header Content-Type 정보
			conn.setRequestProperty("Accept", "application/vnd.github+json"); // header Content-Type 정보
			conn.setRequestProperty("Authorization", "Bearer " + personalAccessToken); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true
//			byte[] rName = tILRepoReq.getRepoName().getBytes("UTF-8");
//			String encodeName = DatatypeConverter.printBase64Binary(rName);

			JSONObject object = new JSONObject();
			object.put("name", tILRepoReq.getRepoName());
//			object.put("name", encodeName);
			String jsonInputString = object.toString();

			try (OutputStream os = conn.getOutputStream()) {
				byte[] input = jsonInputString.getBytes("utf-8");
				os.write(input, 0, input.length);
			} catch (Exception e) {
				System.out.println("=========post요청 실패");
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line = "";
			StringBuilder sb = new StringBuilder();

			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}

			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			repoName = obj.getString("name");
			return repoName;

		} catch (Exception e) {
			System.err.println(e);
			return null;
		}

	}

	// repo 목록 얻기
	@Override
	public ArrayList<String> getRepo(String id) {

		ArrayList<String> repoList = new ArrayList<String>();

		// user id로 user 정보 얻어오기
		User user = userRepository.getUsersById(id).get();
		String personalAccessToken = user.getPat();

		// git API 사용
		try {
			URL url = new URL("https://api.github.com/user/repos");

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Authorization", "Bearer " + personalAccessToken); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line2 = "";
			StringBuilder sb = new StringBuilder();

			while ((line2 = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line2);
//				System.out.println("요기 : " + line2);
			}

			JSONArray objList = new JSONArray(sb.toString()); // json으로 변경 (역직렬화)

			for (int i = 0; i < objList.length(); i++) {
				JSONObject obj = (objList.getJSONObject(i));
				repoList.add((obj.getString("name")));
			}

			return repoList;

		} catch (Exception e) {
			System.err.println(e);
			return null;
		}
	}

	// repo 내의 dir얻기
	@Override
	public ArrayList<String> getRepoDir(TILRepoReq tILRepoReq) {
		ArrayList<String> dirList = new ArrayList<String>();
		String id = tILRepoReq.getId();
		String repoName = tILRepoReq.getRepoName();

		// user id로 user 정보 얻어오기
		User user = userRepository.getUsersById(id).get();
		String personalAccessToken = user.getPat();

		// git API 사용
		try {
			URL url = new URL("https://api.github.com/repos/" + id + "/" + repoName + "/contents");

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Authorization", "Bearer " + personalAccessToken); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line2 = "";
			StringBuilder sb = new StringBuilder();

			while ((line2 = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line2);
			}

			JSONArray objList = new JSONArray(sb.toString()); // json으로 변경 (역직렬화)

			for (int i = 0; i < objList.length(); i++) {
				JSONObject obj = (objList.getJSONObject(i));
				// if (obj.getString("type").equals("dir")) {
				dirList.add((obj.getString("name")));
				// }
			}

			return dirList;

		} catch (Exception e) {
			System.err.println(e);
			return null;
		}
	}

	// til 만들기
	@Override
	public String createTIL(TILCreateReq tILCreateReq) {
//		System.out.println(tILCreateReq.getId()); // pat 얻어오기, repo name얻어오기
//		System.out.println(tILCreateReq.getMissionUid()); // 위성이름, 행성이름 얻어오기
//		System.out.println(tILCreateReq.getFileName()); // 그대로 쓰면 될 듯
//		System.out.println(tILCreateReq.getMessage()); // 그대로 쓰면 될 듯
//		System.out.println(tILCreateReq.getContent()); // content -> base64로 변환
		String gitLink = "";
		String gitLink2 = "";

		// user id로 user 정보 얻어오기
		User user = userRepository.getUsersById(tILCreateReq.getId()).get();
		String repoName = user.getRepo();
		String personalAccessToken = user.getPat();

		// mission uid로 dir 정보 얻어오기
		Mission mission = missionRepository.findMissionByUid(tILCreateReq.getMissionUid());
		MissionDirRes mdr = MissionDirRes.of(mission);
		String dir = mdr.getPlanetName() + "/" + mdr.getSatellitesName(); // mission
		String fileName = tILCreateReq.getFileName();

		// git API 사용
		try {

			URL url = new URL("https://api.github.com/repos/" + tILCreateReq.getId() + "/" + repoName + "/contents/"
					+ URLEncoder.encode(dir, "UTF-8") + "/" + URLEncoder.encode(fileName, "UTF-8"));
//			System.out.println("ㅋㅋㅋㅋㅋㅋ" + URLDecoder.decode(URLEncoder.encode(dir, "UTF-8"), "UTF-8"));
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("PUT"); // http 메서드
			conn.setRequestProperty("Authorization", "Bearer " + personalAccessToken); // header의 auth 정보
			conn.setRequestProperty("Accept", "application/vnd.github+json");
			conn.setRequestProperty("Content-Type", "application/json;utf-8");
			conn.setDoInput(true);
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			JSONObject object = new JSONObject();
			object.put("message", tILCreateReq.getMessage());
			object.put("content", tILCreateReq.getContent());
			String jsonInputString = object.toString();

			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
			bw.write(jsonInputString); // 버퍼에 담기
			bw.flush(); // 버퍼에 담긴 데이터 전달

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line2 = "";
			StringBuilder sb = new StringBuilder();

			while ((line2 = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line2);
//				System.out.println("요기 : " + line2);
			}
			JSONObject json = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			JSONObject info = json.getJSONObject("content");
			JSONObject link = info.getJSONObject("_links");

			gitLink = (String) link.get("html");
//			System.out.println(gitLink);
//			System.out.println("ㅋㅋㅋㅋㅋㅋ" + URLDecoder.decode(gitLink, "UTF-8"));

			gitLink2 = URLDecoder.decode(gitLink, "UTF-8");

			personalAccessToken = "";

//			System.out.println("til 저장 시작");
			TIL til = new TIL();
			til.setAddress(gitLink2);
			til.setMission(mission);
			til.setUser(user);
			til.setFileName(fileName);
			tilRepository.save(til);
//			System.out.println("til 저장 끝");

		} catch (Exception e) {
			System.err.println(e);
			return gitLink2;
		}
		return gitLink2;
	}

	@Override
	public ArrayList<TILListByUserRes> getTILListByUser(String id) {
		long userUid = userRepository.getUsersById(id).get().getUid();
		ArrayList<TIL> list = tilRepository.getTILByUserUid(userUid);
		ArrayList<TILListByUserRes> resList = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			resList.add(TILListByUserRes.of(list.get(i)));
		}

		return resList;
	}

	@Override
	public ArrayList<SatelliteTILRes> getUserTILBySatellite(SatelliteTILReq satelliteTILReq) {
//		System.err.println("=====serviceImpl");
		long userUid = userRepository.getUsersById(satelliteTILReq.getId()).get().getUid();
		Optional<Satellite> satellite = satelliteRepository.getSatelliteByUid(satelliteTILReq.getSUid());
//		System.err.println(satelliteTILReq.getSUid());
//		System.err.println("======"+satellite.toString());

		if (satellite.isPresent()) {
			// 해당 위성의 mission list
			List<Mission> mList = missionRepository.getAllBySatellite(satellite.get());
			ArrayList<SatelliteTILRes> stresList = new ArrayList<>();

			ArrayList<TIL> list = tilRepository.getTILByUserUid(userUid);
			ArrayList<TILListByUserRes> resList = new ArrayList<>();

			// 사용자의 모든 til list
			for (int i = 0; i < list.size(); i++) {
				resList.add(TILListByUserRes.of(list.get(i)));
			}

			for (int i = 0; i < mList.size(); i++) {
				for (int j = 0; j < resList.size(); j++) {
					if (resList.get(j).getMission() == mList.get(i).getQuest()) {
						stresList.add(SatelliteTILRes.of(resList.get(j)));
					}
				}
			}

//			System.err.println("====== " + stresList.size());
			return stresList;
		}
		return null;
	}
}
