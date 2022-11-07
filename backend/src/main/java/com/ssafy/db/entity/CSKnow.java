package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;

/**
 * CS지식 모델 정의.
 */
@Builder
@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="cs_knows")
public class CSKnow {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // cs 지식 본문 내용
    @Column(name = "cs_contents", nullable = false, length = 900)
    private String csContents;
    
    // cs지식 제목
    @Column(name = "cs_subject", length = 900)
    private String csSubject;
}
