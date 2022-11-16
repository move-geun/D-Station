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
@Table(name="problems")
public class Problem {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid", columnDefinition = "int unsigned")
    private Long uid;

    // 문제 이름
    @Column(name = "name")
    private String name;

    // 문제 내용
    @Column(name = "content")
    private String content;

    // input
    @Column(name = "input")
    private String input;

    // output
    @Column(name = "output")
    private String output;
    
    // 미션 UID
    @Column(name = "m_uid")
    private String mUid;


}
