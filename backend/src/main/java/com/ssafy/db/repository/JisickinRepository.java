package com.ssafy.db.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Jisickin;

/**
 * 지식인 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface JisickinRepository extends JpaRepository<Jisickin, Long> {

	@Query(value = "select j from Jisickin j order by j.uid desc")
	List<Jisickin> findAll();

	// 태그별 질문 조회
	List<Jisickin> getJisickinsByTag(String tag);

	ArrayList<Jisickin> getByTitleContaining(String keyword);

	ArrayList<Jisickin> getByContentContaining(String keyword);
}
