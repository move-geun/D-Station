package com.ssafy.api.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspose.words.Document;
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
		
		//현재 사용자의 repo list 얻어오기
		ArrayList<String> repoList = getRepo(tILRepoReq.getId());
		//중복인 repo 이름 입력시 중복이라고 반환 
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

			JSONObject object = new JSONObject(); 
			object.put("name", tILRepoReq.getRepoName());
			String jsonInputString = object.toString();

			//요청 보내기
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
				JSONObject obj = objList.getJSONObject(i);
				dirList.add((obj.getString("name"))); //name이라는 key값이 있으면 dirList에 저장
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
		String gitLink = "";
		String gitLink2 = "";

		// user id로 user 정보 얻어오기
		User user = userRepository.getUsersById(tILCreateReq.getId()).get();
		String repoName = user.getRepo();
		String personalAccessToken = user.getPat();

		// mission uid로 dir 정보 얻어오기
		Mission mission = missionRepository.findMissionByUid(tILCreateReq.getMissionUid());
		MissionDirRes mdr = MissionDirRes.of(mission);
		String dir = mdr.getPlanetName() + "/" + mdr.getSatellitesName();
		String fileName = tILCreateReq.getFileName();

		////////파일 변환 시작
		String filePath = ".\\json\\testDir\\"; //파일 경로

		File file1 = new File(filePath + "document.html");
		File file2 = new File(filePath + "Output.md"); 
		
		//이전에 파일이 있다면 삭제하기
		if (file1.exists() || file2.exists()) {
			if (file1.delete() && file2.delete()) {
				System.out.println("파일삭제 성공");
			} else {
				System.out.println("파일삭제 실패");
			}
		}
		
		//사용자가 입력한 content
		String content = tILCreateReq.getContent();
		
		//전달 받은 내용(html)으로 파일 생성하기
		FileWriter fw;
		try {
			fw = new FileWriter(filePath + "document.html");
			fw.write(content);
			fw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		//html to markdown
		Document doc;
		try {
			doc = new Document(filePath + "document.html");
			doc.save(filePath + "Output.md");
		} catch (Exception e1) {
			e1.printStackTrace();
		}

		// markdown 파일 입력받기
		byte[] binary = getFileBinary(filePath + "Output.md");
		
		// markdown to base64
		String base64data = Base64.getEncoder().encodeToString(binary);
		////////파일 변환 끝
		
		// git API 사용, til 작성하기
		try {

			URL url = new URL("https://api.github.com/repos/" + tILCreateReq.getId() + "/" + repoName + "/contents/"
					+ URLEncoder.encode(dir, "UTF-8") + "/" + URLEncoder.encode(fileName, "UTF-8"));
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("PUT"); // http 메서드
			conn.setRequestProperty("Authorization", "Bearer " + personalAccessToken); // header의 auth 정보
			conn.setRequestProperty("Accept", "application/vnd.github+json");
			conn.setRequestProperty("Content-Type", "application/json;utf-8");
			conn.setDoInput(true);
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			JSONObject object = new JSONObject();
			object.put("message", tILCreateReq.getMessage());
			object.put("content", base64data);
			String jsonInputString = object.toString();

			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
			bw.write(jsonInputString); // 버퍼에 담기
			bw.flush(); // 버퍼에 담긴 데이터 전달

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line = "";
			StringBuilder sb = new StringBuilder();

			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject json = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			JSONObject info = json.getJSONObject("content");
			JSONObject link = info.getJSONObject("_links");

			gitLink = (String) link.get("html");

			gitLink2 = URLDecoder.decode(gitLink, "UTF-8");

			// db에 til 저장
			TIL til = new TIL();
			til.setAddress(gitLink2);
			til.setMission(mission);
			til.setUser(user);
			til.setFileName(fileName);
			tilRepository.save(til);

		} catch (Exception e) {
			System.err.println(e);
			return gitLink2;
		}
		return gitLink2;
	}

	// 사용자별 til 얻기
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

	// 사용자 별 위성 별 til 얻기
	@Override
	public ArrayList<SatelliteTILRes> getUserTILBySatellite(SatelliteTILReq satelliteTILReq) {
		long userUid = userRepository.getUsersById(satelliteTILReq.getId()).get().getUid();
		Optional<Satellite> satellite = satelliteRepository.getSatelliteByUid(satelliteTILReq.getSUid());
		ArrayList<SatelliteTILRes> stresList = new ArrayList<>();

		if (satellite.isPresent()) {
			// 해당 위성의 mission list
			List<Mission> mList = missionRepository.getAllBySatellite(satellite.get());

			ArrayList<TIL> list = tilRepository.getTILByUserUid(userUid);
			ArrayList<TILListByUserRes> resList = new ArrayList<>();

			// 사용자의 모든 til list
			for (int i = 0; i < list.size(); i++) {
				resList.add(TILListByUserRes.of(list.get(i)));
			}


			for (int i = 0; i < mList.size(); i++) {
				for (int j = 0; j < resList.size(); j++) {
					if (resList.get(j).getMissionUid() == mList.get(i).getUid()) {
						stresList.add(SatelliteTILRes.of(resList.get(j)));
					}
				}
			}
			return stresList;
		}
		return stresList;
	}


	// 파일 읽어드리는 함수
	private static byte[] getFileBinary(String filePath) {
		File file = new File(filePath);
		byte[] data = new byte[(int) file.length()];
		try (FileInputStream stream = new FileInputStream(file)) {
			stream.read(data, 0, data.length);
		} catch (Throwable e) {
			e.printStackTrace();
		}
		return data;
	}

}
