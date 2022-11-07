package com.ssafy.db.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * TIL 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tils")
public class TIL {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // 깃헙 주소
    @Column(name = "address", nullable = false, length = 300)
    private String address;
    
    // fileName
    @Column(name = "file_name", nullable = false, length = 300)
    private String fileName;

    // 작성일
    @CreationTimestamp
    @Column(name = "date", nullable = false)
    private LocalDateTime date;

    // users
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_uid")
    private User user;

    // missions
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "m_uid")
    private Mission mission;
}
