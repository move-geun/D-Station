package com.ssafy.db.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 미션 모델 정의.
 */
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "missions")
public class Mission {

	// pk
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "uid", columnDefinition = "int unsigned")
	private Long uid;

	// 미션 이름
	@Column(name = "m_name", length = 50)
	private String mName;

	// 미션 내용
	@Column(name = "m_description", length = 300)
	private String mDescription;

	// 위성 이름
	@Column(name = "s_name", length = 45)
	private String sName;

	// 행성 uid
	@Column(name = "p_uid")
	private long pUid;

	// 행성 이름
	@Column(name = "p_name", length = 45)
	private String pName;

	// 은하 uid
	@Column(name = "g_uid")
	private long gUid;

	// 은하 이름
	@Column(name = "g_name", length = 45)
	private String gName;

	// satellites
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "s_uid")
	private Satellite satellite;

	// MissionCompleted
	@Builder.Default
	@OneToMany(mappedBy = "mission", cascade = CascadeType.ALL)
	private List<MissionCompleted> missionCompleted = new ArrayList<>();

	// TIL
	@Builder.Default
	@OneToMany(mappedBy = "mission", cascade = CascadeType.ALL)
	private List<TIL> tils = new ArrayList<>();

	// references
	@Builder.Default
	@OneToMany(mappedBy = "mission", cascade = CascadeType.ALL)
	private List<ReferenceData> references = new ArrayList<>();

	// quiz
	@OneToOne(mappedBy = "mission", cascade = CascadeType.ALL)
	private Quiz quiz;
}
