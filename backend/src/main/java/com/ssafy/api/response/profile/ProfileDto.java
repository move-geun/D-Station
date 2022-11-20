package com.ssafy.api.response.profile;

import com.ssafy.db.entity.CharacterImage;
import com.ssafy.db.entity.Rank;
import com.ssafy.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDto {

    // 유저 현재 계급
    private String rankName;

    // 유저 다음 계급
    private String nextRank;

    // 계급별 이미지
    private String imageUrl;

    // 유저 아이디
    private String userId;

    // 유저 닉네임
    private String userNickname;

    // 유저 총 경험치
    private int exp;

    // 해당 계급의 경험치 총량
    private int maxExp;

    // 해당 계급의 경험치 총량에 해당하는 현재 유저의 경험치
    private int expNow;

    // 해당 계급의 경험치 총량에 해당하는 현재 유저의 경험치 퍼센트
    private Double expPer;

    public static int userExpNow(int exp) {
        if (0 <= exp && exp <= 30) {
            return exp;
        } else if (31 <= exp && exp <= 70) {
            return exp-30;
        } else if (71 <= exp && exp <= 120) {
            return exp-70;
        } else if (121 <= exp && exp <= 200) {
            return exp-120;
        } else if (201 <= exp && exp <= 300) {
            return exp-200;
        } else {
            return exp-300;
        }
    }

    public static Double userExpPer(int expNow) {
        if (0 <= expNow && expNow <= 30) {
            return (double)expNow / 30 * 100;
        } else if (31 <= expNow && expNow <= 70) {
            return ((double)expNow-30) / 40 * 100;
        } else if (71 <= expNow && expNow <= 120) {
            return ((double)expNow-70) / 50 * 100;
        } else if (121 <= expNow && expNow <= 200) {
            return ((double)expNow-120) / 80 * 100;
        } else if (201 <= expNow && expNow <= 300) {
            return ((double)expNow-200);
        } else {
            return (double)expNow-300;
        }
    }

    public static int userMaxExp(int exp) {
        if (0 <= exp && exp <= 30) {
            return 30;
        } else if (31 <= exp && exp <= 70) {
            return 40;
        } else if (71 <= exp && exp <= 120) {
            return 50;
        } else if (121 <= exp && exp <= 200) {
            return 80;
        } else if (201 <= exp && exp <= 300) {
            return 100;
        } else {
            return 10000;
        }
    }

    public static ProfileDto of(User user, Rank rank, String nextRank, CharacterImage image) {
        return ProfileDto.builder()
                .rankName(rank.getRank())
                .nextRank(nextRank)
                .imageUrl(image.getUrl())
                .userId(user.getId())
                .userNickname(user.getNickname())
                .exp(user.getExp())
                .expNow(userExpNow(user.getExp()))
                .expPer(userExpPer(user.getExp()))
                .maxExp(userMaxExp(user.getExp()))
                .build();
    }
}
