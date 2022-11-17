package com.ssafy.api.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.jisickin.JisickinPostReq;
import com.ssafy.api.response.jisickin.JisickinRes;
import com.ssafy.api.response.satellite.SearchRes;
import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.GalaxyRepository;
import com.ssafy.db.repository.JisickinRepository;
import com.ssafy.db.repository.PlanetRepository;
import com.ssafy.db.repository.SatelliteRepository;
import com.ssafy.db.repository.UserRepository;

@Service
public class JisickinServiceImpl implements JisickinService {

	@Autowired
	JisickinRepository jisickinRepository;

	@Autowired
	GalaxyRepository galaxyRepository;

	@Autowired
	PlanetRepository planetRepository;

	@Autowired
	SatelliteRepository satelliteRepository;

	@Autowired
	UserRepository userRepository;

	@Override
	public void createAsk(JisickinPostReq jisickinPostReq, User user) {
		Jisickin jisickin = Jisickin.builder().tag(jisickinPostReq.getTag()).title(jisickinPostReq.getTitle())
				.content(jisickinPostReq.getContent()).user(user).build();
		// 경험치 + 5
		user.addExp(user.getExp());
		userRepository.save(user);
		jisickinRepository.save(jisickin);
	}

	@Override
	public Optional<Jisickin> getOne(long uid) {
		Optional<Jisickin> jisickin = jisickinRepository.findById(uid);
		if (jisickin.isPresent()) {
			return jisickin;
		}
		return Optional.empty();
	}

	@Override
	public List<JisickinRes> getAllAsks() {
		List<JisickinRes> list = jisickinRepository.findAll().stream().map(m -> JisickinRes.of(m))
				.collect(Collectors.toList());
		return list;
	}

	@Override
	public List<JisickinRes> getAllByTag(String tag) {
		List<JisickinRes> list = jisickinRepository.getJisickinsByTag(tag).stream().map(m -> JisickinRes.of(m))
				.collect(Collectors.toList());
		return list;
	}

	@Override
	public void updateAsk(Long uid, JisickinPostReq jisickinPostReq, User user) {
		Jisickin modifiedjisickin = Jisickin.builder().uid(uid).tag(jisickinPostReq.getTag())
				.title(jisickinPostReq.getTitle()).content(jisickinPostReq.getContent()).user(user)
				.updatedAt(LocalDateTime.now()).build();
		jisickinRepository.save(modifiedjisickin);
	}

	@Override
	public boolean deleteAsk(Long uid, String userId) {
		Optional<User> user = userRepository.getUsersById(userId);
		if (jisickinRepository.getOne(uid).getUser() == user.get()) {
			jisickinRepository.delete(jisickinRepository.getOne(uid));
			// 경험치 - 5
			user.get().subtractExp(user.get().getExp());
			userRepository.save(user.get());
			return true;
		}
		return false;
	}

	@Override
	public List<JisickinRes> getJisickinByKeyword(String keyword) {
		ArrayList<Jisickin> list = jisickinRepository.getByTitleContaining(keyword);
		ArrayList<Jisickin> list2 = jisickinRepository.getByContentContaining(keyword);

		List<JisickinRes> resList = new ArrayList<>();

		for (int i = 0; i < list.size(); i++) {
			resList.add(JisickinRes.of(list.get(i)));
		}
		
		for (int i = 0; i < list2.size(); i++) {
			
			if (list.size() == 0) {
				resList.add(JisickinRes.of(list2.get(i)));
			} else {
				for (int j = 0; j < list.size(); j++) {
					if (list2.get(i).getUid() != list.get(j).getUid()) {
						resList.add(JisickinRes.of(list2.get(i)));
					}

				}
			}
		}

		return resList;
	}

}
