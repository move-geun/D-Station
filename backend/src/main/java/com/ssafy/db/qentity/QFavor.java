package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.EntityPathBase;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;
import com.ssafy.db.entity.Favor;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QFavor is a Querydsl query type for Favor
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QFavor extends EntityPathBase<Favor> {

    private static final long serialVersionUID = 458640316L;

    public static final QFavor favor1 = new QFavor("favor1");

    public final StringPath classify = createString("classify");

    public final StringPath favor = createString("favor");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QFavor(String variable) {
        super(Favor.class, forVariable(variable));
    }

    public QFavor(Path<? extends Favor> path) {
        super(path.getType(), path.getMetadata());
    }

    public QFavor(PathMetadata metadata) {
        super(Favor.class, metadata);
    }

}

