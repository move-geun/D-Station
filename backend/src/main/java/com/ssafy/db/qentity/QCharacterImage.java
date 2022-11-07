package com.ssafy.db.qentity;

import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.CharacterImage;
import com.ssafy.db.entity.User;

import javax.annotation.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QCharacterImage is a Querydsl query type for CharacterImage
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCharacterImage extends EntityPathBase<CharacterImage> {

    private static final long serialVersionUID = 29937652L;

    public static final QCharacterImage characterImage = new QCharacterImage("characterImage");

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public final StringPath url = createString("url");

    public final ListPath<User, QUser> users = this.<User, QUser>createList("users", User.class, QUser.class, PathInits.DIRECT2);

    public QCharacterImage(String variable) {
        super(CharacterImage.class, forVariable(variable));
    }

    public QCharacterImage(Path<? extends CharacterImage> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCharacterImage(PathMetadata metadata) {
        super(CharacterImage.class, metadata);
    }

}

