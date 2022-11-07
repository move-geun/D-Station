package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMissionCompleted is a Querydsl query type for MissionCompleted
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMissionCompleted extends EntityPathBase<MissionCompleted> {

    private static final long serialVersionUID = -1201026591L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMissionCompleted missionCompleted = new QMissionCompleted("missionCompleted");

    public final BooleanPath completed = createBoolean("completed");

    public final QMission mission;

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public final QUser user;

    public QMissionCompleted(String variable) {
        this(MissionCompleted.class, forVariable(variable), INITS);
    }

    public QMissionCompleted(Path<? extends MissionCompleted> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMissionCompleted(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMissionCompleted(PathMetadata metadata, PathInits inits) {
        this(MissionCompleted.class, metadata, inits);
    }

    public QMissionCompleted(Class<? extends MissionCompleted> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mission = inits.isInitialized("mission") ? new QMission(forProperty("mission"), inits.get("mission")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

