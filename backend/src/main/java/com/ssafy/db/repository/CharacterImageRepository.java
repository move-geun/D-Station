package com.ssafy.db.repository;

import com.ssafy.db.entity.CharacterImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 유저 프로필 이미지 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface CharacterImageRepository extends JpaRepository<CharacterImage, Long> {

}
