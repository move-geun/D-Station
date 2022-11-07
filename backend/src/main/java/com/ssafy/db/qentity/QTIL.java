package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.TIL;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QTIL is a Querydsl query type for TIL
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTIL extends EntityPathBase<TIL> {

    private static final long serialVersionUID = -1219620459L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTIL tIL = new QTIL("tIL");

    public final StringPath address = createString("address");

    public final DateTimePath<java.time.LocalDateTime> date = createDateTime("date", java.time.LocalDateTime.class);

    public final QMission mission;

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public final QUser user;

    public QTIL(String variable) {
        this(TIL.class, forVariable(variable), INITS);
    }

    public QTIL(Path<? extends TIL> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTIL(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTIL(PathMetadata metadata, PathInits inits) {
        this(TIL.class, metadata, inits);
    }

    public QTIL(Class<? extends TIL> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mission = inits.isInitialized("mission") ? new QMission(forProperty("mission"), inits.get("mission")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

