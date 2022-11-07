package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;

/**
 * 유저 성향 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="favors")
public class Favor {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="uid", columnDefinition = "int unsigned")
    private Long uid;

    // 개발성향 16
    @Column(name="favor", nullable = false, length = 50)
    private String favor;

    // 대분류 3
    @Column(name="classify", length = 50)
    private String classify;
}
