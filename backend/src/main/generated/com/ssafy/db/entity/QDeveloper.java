package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDeveloper is a Querydsl query type for Developer
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDeveloper extends EntityPathBase<Developer> {

    private static final long serialVersionUID = 291309128L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDeveloper developer = new QDeveloper("developer");

    public final QGalaxy galaxy;

    public final StringPath jobName = createString("jobName");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public final ListPath<User, QUser> users = this.<User, QUser>createList("users", User.class, QUser.class, PathInits.DIRECT2);

    public QDeveloper(String variable) {
        this(Developer.class, forVariable(variable), INITS);
    }

    public QDeveloper(Path<? extends Developer> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDeveloper(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDeveloper(PathMetadata metadata, PathInits inits) {
        this(Developer.class, metadata, inits);
    }

    public QDeveloper(Class<? extends Developer> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.galaxy = inits.isInitialized("galaxy") ? new QGalaxy(forProperty("galaxy")) : null;
    }

}

