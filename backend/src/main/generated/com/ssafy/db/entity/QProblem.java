package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QProblem is a Querydsl query type for Problem
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QProblem extends EntityPathBase<Problem> {

    private static final long serialVersionUID = -863344483L;

    public static final QProblem problem = new QProblem("problem");

    public final StringPath content = createString("content");

    public final StringPath input = createString("input");

    public final StringPath name = createString("name");

    public final StringPath output = createString("output");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QProblem(String variable) {
        super(Problem.class, forVariable(variable));
    }

    public QProblem(Path<? extends Problem> path) {
        super(path.getType(), path.getMetadata());
    }

    public QProblem(PathMetadata metadata) {
        super(Problem.class, metadata);
    }

}

