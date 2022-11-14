package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;

/**
 * 미션완료 여부 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "mission_completed")
public class MissionCompleted {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // 완료 여부
    @Column(name = "completed", nullable = false)
    private boolean completed;

    // users
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_uid")
    private User user;

    //missions
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "m_uid")
    private Mission mission;

}
