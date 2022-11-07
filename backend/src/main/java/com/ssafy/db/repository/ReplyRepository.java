package com.ssafy.db.repository;

import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 지식인 답변 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long> {

    // 해당 질문에 속해있는 답변 리스트 조회
    List<Reply> getAllByJisickin(Jisickin jisickin);

    // 하나 가져오기
    Optional<Reply> getReplyByUid(Long uid);

}
