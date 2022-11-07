package com.ssafy.db.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.CSKnow;

/**
 * CS지식 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface CSKnowRepository extends JpaRepository<CSKnow, Long> {
	
	ArrayList<CSKnow> findAll();
}
