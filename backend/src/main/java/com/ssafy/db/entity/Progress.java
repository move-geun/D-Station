package com.ssafy.db.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

/**
 * 진행도 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "progresses")
public class Progress {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // 진행도 여부
    @ColumnDefault("0")
    @Column(name = "progress", nullable = false)
    private int progress;

    // users
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_uid", nullable = false)
    private User user;

    // satellites
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "s_uid", nullable = false)
    private Satellite satellite;
}
