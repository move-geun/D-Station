package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.*;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = 846542477L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUser user = new QUser("user");

    public final StringPath authType = createString("authType");

    public final QCharacterImage character;

    public final QDeveloper developer;

    public final StringPath email = createString("email");

    public final NumberPath<Long> exp = createNumber("exp", Long.class);

    public final StringPath githubId = createString("githubId");

    public final ListPath<Jisickin, QJisickin> jisickins = this.<Jisickin, QJisickin>createList("jisickins", Jisickin.class, QJisickin.class, PathInits.DIRECT2);

    public final ListPath<MissionCompleted, QMissionCompleted> missionCompleted = this.<MissionCompleted, QMissionCompleted>createList("missionCompleted", MissionCompleted.class, QMissionCompleted.class, PathInits.DIRECT2);

    public final StringPath name = createString("name");

    public final StringPath nickname = createString("nickname");

    public final StringPath notionId = createString("notionId");

    public final StringPath password = createString("password");

    public final StringPath principal = createString("principal");

    public final ListPath<Progress, QProgress> progresses = this.<Progress, QProgress>createList("progresses", Progress.class, QProgress.class, PathInits.DIRECT2);

    public final QRank rank;

    public final ListPath<Reply, QReply> replies = this.<Reply, QReply>createList("replies", Reply.class, QReply.class, PathInits.DIRECT2);

    public final ListPath<TIL, QTIL> TIL = this.<TIL, QTIL>createList("TIL", TIL.class, QTIL.class, PathInits.DIRECT2);

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public QUser(String variable) {
        this(User.class, forVariable(variable), INITS);
    }

    public QUser(Path<? extends User> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUser(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUser(PathMetadata metadata, PathInits inits) {
        this(User.class, metadata, inits);
    }

    public QUser(Class<? extends User> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.character = inits.isInitialized("character") ? new QCharacterImage(forProperty("character")) : null;
        this.developer = inits.isInitialized("developer") ? new QDeveloper(forProperty("developer"), inits.get("developer")) : null;
        this.rank = inits.isInitialized("rank") ? new QRank(forProperty("rank")) : null;
    }

}

