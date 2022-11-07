package com.ssafy.db.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * 지식인 답변 모델 정의.
 */
@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "replies")
public class Reply {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="uid", columnDefinition = "int unsigned")
    private Long uid;

    // 답변
    @Lob
    @Column(name="content", nullable = false)
    private String content;

    // 등록일
    @CreationTimestamp
    @Column(name="reg_date", nullable = false)
    private LocalDateTime regDate;

    // jisickins
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jisickin_uid")
    private Jisickin jisickin;

    // users
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_uid")
    private User user;
}
