package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.EntityPathBase;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;
import com.ssafy.db.entity.CSKnow;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QCSKnow is a Querydsl query type for CSKnow
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCSKnow extends EntityPathBase<CSKnow> {

    private static final long serialVersionUID = 1232849213L;

    public static final QCSKnow cSKnow = new QCSKnow("cSKnow");

    public final StringPath csContents = createString("csContents");

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

