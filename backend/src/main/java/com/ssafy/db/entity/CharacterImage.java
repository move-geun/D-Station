package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 유저 프로필 이미지 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="character_images")
public class CharacterImage {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="uid", columnDefinition = "int unsigned")
    private Long uid;

    // 프로필 이미지 url
    @Column(name="url", nullable = false, length = 300)
    private String url;

    // users
    @Builder.Default
    @OneToMany(mappedBy = "character",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<User> users = new ArrayList<>();

}
