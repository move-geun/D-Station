package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.MissionCompleted;
import com.ssafy.db.entity.TIL;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QMission is a Querydsl query type for Mission
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMission extends EntityPathBase<Mission> {

    private static final long serialVersionUID = 515647370L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMission mission = new QMission("mission");

    public final ListPath<MissionCompleted, QMissionCompleted> missionCompleted = this.<MissionCompleted, QMissionCompleted>createList("missionCompleted", MissionCompleted.class, QMissionCompleted.class, PathInits.DIRECT2);

    public final StringPath quest = createString("quest");

    public final QSatellite satellite;

    public final ListPath<TIL, QTIL> tils = this.<TIL, QTIL>createList("tils", TIL.class, QTIL.class, PathInits.DIRECT2);

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QMission(String variable) {
        this(Mission.class, forVariable(variable), INITS);
    }

    public QMission(Path<? extends Mission> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMission(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMission(PathMetadata metadata, PathInits inits) {
        this(Mission.class, metadata, inits);
    }

    public QMission(Class<? extends Mission> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.satellite = inits.isInitialized("satellite") ? new QSatellite(forProperty("satellite"), inits.get("satellite")) : null;
    }

}

