package com.ssafy.api.service;

import com.ssafy.api.response.profile.ProfileDto;
import com.ssafy.db.entity.CharacterImage;
import com.ssafy.db.entity.Rank;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.CharacterImageRepository;
import com.ssafy.db.repository.RankRepository;
import com.ssafy.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileServiceImpl implements ProfileService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    RankRepository rankRepository;

    @Autowired
    CharacterImageRepository characterImageRepository;

    @Override
    public ProfileDto getProfileImage(User user) {
        Optional<User> userInfo = userRepository.getUsersById(user.getId());
        // 계급 리스트
        List<Rank> ranks = rankRepository.findAll();
        // 프로필 이미지 리스트
        List<CharacterImage> images = characterImageRepository.findAll();
        if ( userInfo.get().getExp() <= 30 ) {
            return ProfileDto.of(user, ranks.get(0), ranks.get(1).getRank(), images.get(0));
        } else if ( userInfo.get().getExp() <= 70 ) {
            return ProfileDto.of(user, ranks.get(1), ranks.get(2).getRank(), images.get(1));
        } else if ( userInfo.get().getExp() <= 120 ) {
            return ProfileDto.of(user, ranks.get(2), ranks.get(3).getRank(), images.get(2));
        } else if ( userInfo.get().getExp() <= 200 ) {
            return ProfileDto.of(user, ranks.get(3), ranks.get(4).getRank(), images.get(3));
        } else {
            return ProfileDto.of(user, ranks.get(4), null, images.get(4));
        }
    }
}
