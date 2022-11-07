package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.Galaxy;
import com.ssafy.db.entity.Planet;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QGalaxy is a Querydsl query type for Galaxy
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QGalaxy extends EntityPathBase<Galaxy> {

    private static final long serialVersionUID = 1361266002L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QGalaxy galaxy = new QGalaxy("galaxy");

    public final QDeveloper developer;

    public final StringPath gName = createString("gName");

    public final ListPath<Planet, QPlanet> planets = this.<Planet, QPlanet>createList("planets", Planet.class, QPlanet.class, PathInits.DIRECT2);

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QGalaxy(String variable) {
        this(Galaxy.class, forVariable(variable), INITS);
    }

    public QGalaxy(Path<? extends Galaxy> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QGalaxy(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QGalaxy(PathMetadata metadata, PathInits inits) {
        this(Galaxy.class, metadata, inits);
    }

    public QGalaxy(Class<? extends Galaxy> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.developer = inits.isInitialized("developer") ? new QDeveloper(forProperty("developer"), inits.get("developer")) : null;
    }

}

