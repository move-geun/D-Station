package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPlanet is a Querydsl query type for Planet
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPlanet extends EntityPathBase<Planet> {

    private static final long serialVersionUID = 1628771290L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPlanet planet = new QPlanet("planet");

    public final QGalaxy galaxy;

    public final StringPath pDescription = createString("pDescription");

    public final StringPath pImage = createString("pImage");

    public final StringPath pName = createString("pName");

    public final ListPath<Progress, QProgress> progresses = this.<Progress, QProgress>createList("progresses", Progress.class, QProgress.class, PathInits.DIRECT2);

    public final ListPath<Satellite, QSatellite> satellites = this.<Satellite, QSatellite>createList("satellites", Satellite.class, QSatellite.class, PathInits.DIRECT2);

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QPlanet(String variable) {
        this(Planet.class, forVariable(variable), INITS);
    }

    public QPlanet(Path<? extends Planet> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPlanet(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPlanet(PathMetadata metadata, PathInits inits) {
        this(Planet.class, metadata, inits);
    }

    public QPlanet(Class<? extends Planet> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.galaxy = inits.isInitialized("galaxy") ? new QGalaxy(forProperty("galaxy")) : null;
    }

}

