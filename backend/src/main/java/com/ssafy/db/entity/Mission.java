package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 미션 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "missions")
public class Mission {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    Long uid;

    // 미션내용
    @Column(name = "quest", nullable = false, length = 50)
    String quest;

    // 미션 태그
    @Column(name = "m_tag", nullable = false, length = 50)
    String mTag;

    // 미션 URL
    @Column(name = "m_url", nullable = false, length = 300)
    String mUrl;

    // MissionCompleted
    @Builder.Default
    @OneToMany(mappedBy = "mission", cascade =  CascadeType.ALL)
    private List<MissionCompleted> missionCompleted = new ArrayList<>();

    // satellites
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "s_uid")
    private Satellite satellite;

    // TIL
    @Builder.Default
    @OneToMany(mappedBy = "mission", cascade =  CascadeType.ALL)
    private List<TIL> tils = new ArrayList<>();

}
