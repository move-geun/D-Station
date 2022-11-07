package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 은하 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="mbtis")
public class MBTI {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    //  유형
    @Column(name = "type")
    private String type;

    // 타이틀
    @Column(name = "title")
    private String title;

    // 성격 설명
    @Column(name = "description")
    private String description;

    // 이미지 소스
    @Column(name = "imgsrc")
    private String imgsrc;


}
