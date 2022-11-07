package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QRank is a Querydsl query type for Rank
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QRank extends EntityPathBase<Rank> {

    private static final long serialVersionUID = 846436078L;

    public static final QRank rank1 = new QRank("rank1");

    public final NumberPath<Long> maxExp = createNumber("maxExp", Long.class);

    public final NumberPath<Long> minExp = createNumber("minExp", Long.class);

    public final StringPath rank = createString("rank");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public final ListPath<User, QUser> users = this.<User, QUser>createList("users", User.class, QUser.class, PathInits.DIRECT2);

    public QRank(String variable) {
        super(Rank.class, forVariable(variable));
    }

    public QRank(Path<? extends Rank> path) {
        super(path.getType(), path.getMetadata());
    }

    public QRank(PathMetadata metadata) {
        super(Rank.class, metadata);
    }

}

