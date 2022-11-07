package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.Image;
import com.ssafy.db.entity.Jisickin;
import com.ssafy.db.entity.Reply;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QJisickin is a Querydsl query type for Jisickin
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QJisickin extends EntityPathBase<Jisickin> {

    private static final long serialVersionUID = -2137682268L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QJisickin jisickin = new QJisickin("jisickin");

    public final StringPath content = createString("content");

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final NumberPath<Long> gUid = createNumber("gUid", Long.class);

    public final ListPath<Image, QImage> images = this.<Image, QImage>createList("images", Image.class, QImage.class, PathInits.DIRECT2);

    public final NumberPath<Long> pUid = createNumber("pUid", Long.class);

    public final ListPath<Reply, QReply> replies = this.<Reply, QReply>createList("replies", Reply.class, QReply.class, PathInits.DIRECT2);

    public final QSatellite satellite;

    public final StringPath title = createString("title");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public final DateTimePath<java.time.LocalDateTime> updatedAt = createDateTime("updatedAt", java.time.LocalDateTime.class);

    public final QUser user;

    public QJisickin(String variable) {
        this(Jisickin.class, forVariable(variable), INITS);
    }

    public QJisickin(Path<? extends Jisickin> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QJisickin(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QJisickin(PathMetadata metadata, PathInits inits) {
        this(Jisickin.class, metadata, inits);
    }

    public QJisickin(Class<? extends Jisickin> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.satellite = inits.isInitialized("satellite") ? new QSatellite(forProperty("satellite"), inits.get("satellite")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

