package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 계급 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ranks")
public class Rank {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    Long uid;

    // 계급
    @Column(name = "now_rank", length = 50, nullable = false)
    String rank;

    // 최소 경험치
    @Column(name = "mi_exp", nullable = false)
    Long minExp;

    // 최대 경험치
    @Column(name = "ma_exp", nullable = false)
    Long maxExp;

    // users
    @Builder.Default
    @OneToMany(mappedBy = "rank", cascade =  CascadeType.ALL)
    private List<User> users = new ArrayList<>();

}
