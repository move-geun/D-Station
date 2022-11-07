package com.ssafy.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.MBTI;
import com.ssafy.db.entity.Problem;

import java.util.Optional;

/**
 * 은하 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface MBTIRepository extends JpaRepository<MBTI, Long> {

    Optional<MBTI> findMBTIByType(String type);
}
