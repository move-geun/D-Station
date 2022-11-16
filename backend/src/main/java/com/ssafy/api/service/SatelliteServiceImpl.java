package com.ssafy.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.response.satellite.SatelliteRes;
import com.ssafy.api.response.satellite.SearchRes;
import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Satellite;
import com.ssafy.db.repository.GalaxyRepository;
import com.ssafy.db.repository.PlanetRepository;
import com.ssafy.db.repository.SatelliteRepository;

@Service
public class SatelliteServiceImpl implements SatelliteService {

	@Autowired
	SatelliteRepository satelliteRepository;

	@Autowired
	PlanetRepository planetRepository;
	
	@Autowired
	GalaxyRepository galaxyRepository;

	@Override
	public List<SatelliteRes> getSatelliteList() {
		List<SatelliteRes> list = satelliteRepository.findAll().stream().map(m -> SatelliteRes.of(m))
				.collect(Collectors.toList());
		return list;
	}

	@Override
	public Optional<Satellite> getSatellite(Long uid) {
		Optional<Satellite> satellite = satelliteRepository.getSatelliteByUid(uid);
		if (satellite.isPresent()) {
			return satellite;
		}
		return Optional.empty();
	}

	@Override
	public List<SatelliteRes> getSatellitesByGUid(Long uid) {
		Optional<Planet> planet = planetRepository.getPlanetByUid(uid);
		List<SatelliteRes> list = satelliteRepository.getAllByPlanet(planet.get()).stream().map(m -> SatelliteRes.of(m))
				.collect(Collectors.toList());
		return list;
	}

	@Override
	public ArrayList<SearchRes> SearchByKeyword(String keyword) {
		ArrayList<Satellite> list = satelliteRepository.getBysNameContaining(keyword);
		ArrayList<Planet> list2 = planetRepository.getBypNameContaining(keyword);
		ArrayList<Galaxy> list3 = galaxyRepository.getBygNameContaining(keyword);
		ArrayList<SearchRes> resList = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			resList.add(SearchRes.of(list.get(i)));
		}
		
		for (int i = 0; i < list2.size(); i++) {
			resList.add(SearchRes.of(list2.get(i)));			
		}
		
		for (int i = 0; i < list3.size(); i++) {
			resList.add(SearchRes.of(list3.get(i)));			
		}
		return resList;
	}
}
