package com.ssafy.db.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 미션 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "quizzes")
public class Quiz {

	// pk
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "uid", columnDefinition = "int unsigned")
	private Long uid;

	// 퀴즈내용
	@Column(name = "content", nullable = false, length = 450)
	private String content;

	// 퀴즈 정답
	@Column(name = "answer")
	private boolean answer;


	// mission
	@OneToOne
	@JoinColumn(name = "m_uid")
	private Mission mission;
	
}
