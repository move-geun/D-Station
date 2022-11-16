package com.ssafy.db.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Problem;

/**
 * 은하 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {

    Optional<Problem> findProblemByUid(Long uid);

    @Query(value = "select p from Problem p where p.uid=:uid")
    Problem findProblemBymUid(@Param("uid") Long uid);
}
