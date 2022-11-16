package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 행성 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "planet")
public class Planet {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // 행성명
    @Column(name = "p_name", nullable = false, length = 50)
    private String pName;

    // 행성 설명
    @Column(name = "p_description", nullable = false, length = 1000)
    private String pDescription;

    // 행성 이미지
    @Column(name = "p_image", nullable = false, length = 300)
    private String pImage;

    // galaxies
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "g_uid")
    private Galaxy galaxy;

    // satellites
    @Builder.Default
    @OneToMany(mappedBy = "planet", cascade =  CascadeType.ALL)
    private List<Satellite> satellites = new ArrayList<>();

}
