package com.ssafy.db.repository;

import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 지식인 첨부 이미지 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

}
