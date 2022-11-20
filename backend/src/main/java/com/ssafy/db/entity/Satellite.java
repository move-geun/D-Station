package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 위성 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "satellites")
public class Satellite {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // 위성 명
    @Column(name = "s_name", nullable = false, length = 50)
    private String sName;

    // 위성 설명
    @Column(name = "s_description", length = 1000)
    private String sDescription;
    
    // 은하 uid
    @Column(name = "g_uid")
    private long gUid;
    
    // 은하 이름
    @Column(name = "g_name", length = 50)
    private String gName;
    
    // 위성 명
    @Column(name = "p_name", length = 50)
    private String pName;
    
    
    
    //missions
    @Builder.Default
    @OneToMany(mappedBy = "satellite", cascade = CascadeType.ALL)
    private List<Mission> missions = new ArrayList<>();

    //progresses
    @Builder.Default
    @OneToMany(mappedBy = "satellite", cascade = CascadeType.ALL)
    private List<Progress> progresses = new ArrayList<>();

    // planets
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "p_uid")
    private Planet planet;
}
