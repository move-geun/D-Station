package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 은하 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="galaxies")
public class Galaxy {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // 은하명
    @Column(name = "g_name", nullable = false, length = 50)
    private String gName;

    // planets
    @Builder.Default
    @OneToMany(mappedBy = "galaxy", cascade =  CascadeType.ALL)
    private List<Planet> planets = new ArrayList<>();

    // developers
    @Builder.Default
    @OneToMany(mappedBy = "galaxy", cascade = CascadeType.ALL)
    private List<Developer> developers = new ArrayList<>();
}
