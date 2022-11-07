package com.ssafy.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 구현 정의.
 */
@Repository
public class UserRepositorySupport {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;
//    QUsers qUser = QUser.user;
//
//    public Optional<Users> findUserByNick(String userId) {
//        Users user = jpaQueryFactory.select(qUser).from(qUser)
//                .where(qUser.userId.eq(userId)).fetchOne();
//        if(user == null) return Optional.empty();
//        return Optional.ofNullable(user);
//    }
}
