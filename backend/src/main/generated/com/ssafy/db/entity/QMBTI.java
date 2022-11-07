package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QMBTI is a Querydsl query type for MBTI
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMBTI extends EntityPathBase<MBTI> {

    private static final long serialVersionUID = 846256492L;

    public static final QMBTI mBTI = new QMBTI("mBTI");

    public final StringPath description = createString("description");

    public final StringPath imgsrc = createString("imgsrc");

    public final StringPath title = createString("title");

    public final StringPath type = createString("type");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QMBTI(String variable) {
        super(MBTI.class, forVariable(variable));
    }

    public QMBTI(Path<? extends MBTI> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMBTI(PathMetadata metadata) {
        super(MBTI.class, metadata);
    }

}

