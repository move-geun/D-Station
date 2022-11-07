package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QCSKnow is a Querydsl query type for CSKnow
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCSKnow extends EntityPathBase<CSKnow> {

    private static final long serialVersionUID = 1232849213L;

    public static final QCSKnow cSKnow = new QCSKnow("cSKnow");

    public final StringPath csContents = createString("csContents");

    public final StringPath csSubject = createString("csSubject");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QCSKnow(String variable) {
        super(CSKnow.class, forVariable(variable));
    }

    public QCSKnow(Path<? extends CSKnow> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCSKnow(PathMetadata metadata) {
        super(CSKnow.class, metadata);
    }

}

