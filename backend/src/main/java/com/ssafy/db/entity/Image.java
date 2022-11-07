package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;

/**
 * 지식인 첨부이미지 모델 정의.
 */
@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="images")
public class Image {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="uid", columnDefinition = "int unsigned")
    private Long uid;

    // 이미지 url
    @Column(name="image_name", nullable = false, length = 50)
    private String imageName;

    // jisickins
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jisickin_uid", nullable = false)
    private Jisickin jisickin;

}
