package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QITNews is a Querydsl query type for ITNews
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QITNews extends EntityPathBase<ITNews> {

    private static final long serialVersionUID = 1405628608L;

    public static final QITNews iTNews = new QITNews("iTNews");

    public final StringPath newsName = createString("newsName");

    public final StringPath newsUrl = createString("newsUrl");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QITNews(String variable) {
        super(ITNews.class, forVariable(variable));
    }

    public QITNews(Path<? extends ITNews> path) {
        super(path.getType(), path.getMetadata());
    }

    public QITNews(PathMetadata metadata) {
        super(ITNews.class, metadata);
    }

}

