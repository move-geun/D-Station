package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.Mission;
import com.ssafy.db.entity.Progress;
import com.ssafy.db.entity.Satellite;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QSatellite is a Querydsl query type for Satellite
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSatellite extends EntityPathBase<Satellite> {

    private static final long serialVersionUID = -1207113799L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QSatellite satellite = new QSatellite("satellite");

    public final ListPath<Jisickin, QJisickin> jisickins = this.<Jisickin, QJisickin>createList("jisickins", Jisickin.class, QJisickin.class, PathInits.DIRECT2);

    public final ListPath<Mission, QMission> missions = this.<Mission, QMission>createList("missions", Mission.class, QMission.class, PathInits.DIRECT2);

    public final QPlanet planet;

    public final ListPath<Progress, QProgress> progresses = this.<Progress, QProgress>createList("progresses", Progress.class, QProgress.class, PathInits.DIRECT2);

    public final StringPath sDescription = createString("sDescription");

    public final StringPath sName = createString("sName");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QSatellite(String variable) {
        this(Satellite.class, forVariable(variable), INITS);
    }

    public QSatellite(Path<? extends Satellite> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QSatellite(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QSatellite(PathMetadata metadata, PathInits inits) {
        this(Satellite.class, metadata, inits);
    }

    public QSatellite(Class<? extends Satellite> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.planet = inits.isInitialized("planet") ? new QPlanet(forProperty("planet"), inits.get("planet")) : null;
    }

}

