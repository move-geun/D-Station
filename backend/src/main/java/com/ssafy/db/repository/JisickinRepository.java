package com.ssafy.db.repository;

import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.Satellite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 지식인 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface JisickinRepository extends JpaRepository<Jisickin, Long> {

    // 태그별 질문 조회
    List<Jisickin> getJisickinsByTag(String tag);
}
