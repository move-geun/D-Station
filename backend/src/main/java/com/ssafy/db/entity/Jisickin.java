package com.ssafy.db.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * 지식인 모델 정의.
 */
@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "jisickins")
public class Jisickin {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="uid", columnDefinition = "int unsigned")
    private Long uid;

    // 태그
    @Column(name="tag", nullable = false, length = 50)
    private String tag;

    // 제목
    @Column(name="title", nullable = false, length = 50)
    private String title;

    // 내용
    @Lob
    @Column(name="content", nullable = false)
    private String content;

    // 작성일
    @CreationTimestamp
    @Column(name="created_at")
    private LocalDateTime createdAt;

    // 수정일
    @CreationTimestamp
    @Column(name="updated_at")
    private LocalDateTime updatedAt;

    // users
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_uid")
    private User user;
    
    // images
    @Builder.Default
    @OneToMany(mappedBy = "jisickin", cascade =  CascadeType.ALL)
    private List<Image> images = new ArrayList<>();

    // replies
    @Builder.Default
    @OneToMany(mappedBy = "jisickin", cascade =  CascadeType.ALL)
    private List<Reply> replies = new ArrayList<>();

}
