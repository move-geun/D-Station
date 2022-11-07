package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QGalaxy is a Querydsl query type for Galaxy
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QGalaxy extends EntityPathBase<Galaxy> {

    private static final long serialVersionUID = 1361266002L;

    public static final QGalaxy galaxy = new QGalaxy("galaxy");

    public final ListPath<Developer, QDeveloper> developers = this.<Developer, QDeveloper>createList("developers", Developer.class, QDeveloper.class, PathInits.DIRECT2);

    public final StringPath gName = createString("gName");

    public final ListPath<Planet, QPlanet> planets = this.<Planet, QPlanet>createList("planets", Planet.class, QPlanet.class, PathInits.DIRECT2);

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QGalaxy(String variable) {
        super(Galaxy.class, forVariable(variable));
    }

    public QGalaxy(Path<? extends Galaxy> path) {
        super(path.getType(), path.getMetadata());
    }

    public QGalaxy(PathMetadata metadata) {
        super(Galaxy.class, metadata);
    }

}

