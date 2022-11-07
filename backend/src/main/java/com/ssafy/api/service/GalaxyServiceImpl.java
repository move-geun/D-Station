package com.ssafy.api.service;

import com.ssafy.api.response.galaxy.GalaxyRes;
import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.repository.GalaxyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GalaxyServiceImpl implements GalaxyService{

    @Autowired
    GalaxyRepository galaxyRepository;

    @Override
    public List<GalaxyRes> getGalaxyList() {
        List<GalaxyRes> list = galaxyRepository.findAll()
                .stream().map(m -> GalaxyRes.of(m)).collect(Collectors.toList());
        return list;
    }

    @Override
    public Optional<Galaxy> getGalaxy(Long uid) {
        Optional<Galaxy> galaxy = galaxyRepository.findGalaxyByUid(uid);
        if ( galaxy.isPresent() ) {
            return galaxy;
        }
        return Optional.empty();
    }
}
