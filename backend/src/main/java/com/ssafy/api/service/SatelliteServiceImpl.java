package com.ssafy.api.service;

import com.ssafy.api.response.satellite.SatelliteRes;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Satellite;
import com.ssafy.db.repository.PlanetRepository;
import com.ssafy.db.repository.SatelliteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SatelliteServiceImpl implements SatelliteService{

    @Autowired
    SatelliteRepository satelliteRepository;

    @Autowired
    PlanetRepository planetRepository;

    @Override
    public List<SatelliteRes> getSatelliteList() {
        List<SatelliteRes> list = satelliteRepository.findAll()
                .stream().map(m -> SatelliteRes.of(m)).collect(Collectors.toList());
        return list;
    }

    @Override
    public Optional<Satellite> getSatellite(Long uid) {
        Optional<Satellite> satellite = satelliteRepository.getSatelliteByUid(uid);
        if ( satellite.isPresent() ) {
            return satellite;
        }
        return Optional.empty();
    }

    @Override
    public List<SatelliteRes> getSatellitesByGUid(Long uid) {
        Optional<Planet> planet = planetRepository.getPlanetByUid(uid);
        List<SatelliteRes> list = satelliteRepository.getAllByPlanet(planet.get())
                .stream().map(m -> SatelliteRes.of(m)).collect(Collectors.toList());
        return list;
    }
}
