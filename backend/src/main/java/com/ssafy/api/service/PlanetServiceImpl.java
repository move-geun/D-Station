package com.ssafy.api.service;

import com.ssafy.api.response.planet.PioneerPlanetRes;
import com.ssafy.api.response.planet.PlanetRes;
import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Satellite;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PlanetServiceImpl implements PlanetService{

    @Autowired
    MissionCompletedRepository missionCompletedRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    MissionRepository missionRepository;

    @Autowired
    PlanetRepository planetRepository;

    @Autowired
    GalaxyRepository galaxyRepository;

    @Override
    public List<PlanetRes> getPlanetList() {
        List<PlanetRes> list = planetRepository.findAll()
                .stream().map(m -> PlanetRes.of(m)).collect(Collectors.toList());
        return list;
    }

    @Override
    public Optional<Planet> getPlanet(Long uid) {
        Optional<Planet> planet = planetRepository.getPlanetByUid(uid);
        if ( planet.isPresent() ) {
            return planet;
        }
        return Optional.empty();
    }

    @Override
    public List<PlanetRes> getPlanetsByGUid(Long uid) {
        Optional<Galaxy> galaxy = galaxyRepository.findGalaxyByUid(uid);
        List<PlanetRes> list = planetRepository.getAllByGalaxy(galaxy.get())
                .stream().map(m -> PlanetRes.of(m)).collect(Collectors.toList());
        return list;
    }

    @Override
    public List<PioneerPlanetRes> getPlanetListByUser(String userId) {
        // 유저 정보
        Optional<User> user = userRepository.getUsersById(userId);
        System.out.println(missionCompletedRepository.getPlanetList(userId));
        List<PioneerPlanetRes> list = missionCompletedRepository.getPlanetList(userId)
                .stream().map(m ->PioneerPlanetRes
                        .of(planetRepository.getOne(m),
                                (double) missionCompletedRepository.countAllByUserAndMission_PUid(user.get(), m) / (double) missionRepository.countAllByPUid(m) * 100
                        )
                ).collect(Collectors.toList());
        return list;
    }
}
