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
@Table(name = "reference_datas")
public class ReferenceData {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // 제목
    @Column(name = "title", length = 300)
    private String title;
    
    // 제목
    @Column(name = "r_url", length = 450)
    private String rUrl;
    
    
    //missions
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "m_uid")
    private Mission mission;
}
