package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 유저 모델 정의.
 */
@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="users")
public class User {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="uid", columnDefinition = "int unsigned")
    private Long uid;

    // 닉네임
    @Column(name="nickname", nullable = false, unique = true, length = 50)
    private String nickname;

    // 유저 이름
    @Column(name="name", length = 50)
    private String name;

    // 유저 아이디
    @Column(name="Id", length = 100)
    private String id;
    
    // 유저 이메일
    @Column(name="email", length = 50)
    private String email;

    // 비밀번호
    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    // 인증 방식
    @Column(name="authtype", length = 50)
    private String authType;

    // 인증 코드
    @Column(name="principal")
    private String principal;

    // til용 깃헙 아이디
    @Column(name="github_id", length = 50)
    private String githubId;

    // til용 노션 아이디
    @Column(name="notion_id", length = 50)
    private String notionId;

    // 경험치
    @Builder.Default
    @Column(name="exp")
    private Integer exp = 0;
    
    // Personal Access Token
    @Column(name="pat", length = 50)
    private String pat;
    
    // Repo 이름
    @Column(name="repo", length = 50)
    private String repo;

    // jisikins
    @Builder.Default
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Jisickin> jisickins = new ArrayList<>();

    // missionCompleted
    @Builder.Default
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<MissionCompleted> missionCompleted = new ArrayList<>();

    // progresses
    @Builder.Default
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Progress> progresses = new ArrayList<>();

    // replies
    @Builder.Default
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Reply> replies = new ArrayList<>();

    // TIL
    @Builder.Default
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<TIL> TIL = new ArrayList<>();

    // developers
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dev_uid")
    private Developer developer;

    // characters
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cha_uid")
    private CharacterImage character;

    // ranks
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rank_uid")
    private Rank rank;

    public void addExp(int exp) {
        this.exp += 5;
    }

    public void subtractExp(int exp) {
        this.exp -= 5;
    }
}
