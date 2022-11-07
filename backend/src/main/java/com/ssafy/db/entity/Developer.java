package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 목표개발자 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="developer")
public class Developer {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // 개발자 직종
    @Column(name = "job_name", nullable = false, length = 50)
    private String jobName;

    // galaxies
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "g_uid")
    private Galaxy galaxy;

    // users
    @Builder.Default
    @OneToMany(mappedBy = "developer", cascade =  CascadeType.ALL)
    private List<User> users = new ArrayList<>();

}
