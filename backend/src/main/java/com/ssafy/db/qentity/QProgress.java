package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.EntityPathBase;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.PathInits;
import com.querydsl.core.types.dsl.StringPath;
import com.ssafy.db.entity.Progress;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QProgress is a Querydsl query type for Progress
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QProgress extends EntityPathBase<Progress> {

    private static final long serialVersionUID = -989078545L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProgress progress1 = new QProgress("progress1");

    public final QPlanet planet;

    public final NumberPath<Integer> progress = createNumber("progress", Integer.class);

    public final QSatellite satellite;

    public final StringPath type = createString("type");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public final QUser user;

    public QProgress(String variable) {
        this(Progress.class, forVariable(variable), INITS);
    }

    public QProgress(Path<? extends Progress> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProgress(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProgress(PathMetadata metadata, PathInits inits) {
        this(Progress.class, metadata, inits);
    }

    public QProgress(Class<? extends Progress> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.planet = inits.isInitialized("planet") ? new QPlanet(forProperty("planet"), inits.get("planet")) : null;
        this.satellite = inits.isInitialized("satellite") ? new QSatellite(forProperty("satellite"), inits.get("satellite")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

