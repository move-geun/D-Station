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

    private String rankName;
    private String imageUrl;
    private String userNickname;
    private Long exp;
    private int expNow = userExpNow(exp);
    private Double expPer = userExpPer(expNow);

    public int userExpNow(Long exp) {
        if (0 <= exp && exp <= 30) {
            return Integer.parseInt(exp+"");
        } else if (31 <= exp && exp <= 70) {
            return Integer.parseInt(exp+"")-30;
        } else if (71 <= exp && exp <= 120) {
            return Integer.parseInt(exp+"")-70;
        } else if (121 <= exp && exp <= 200) {
            return Integer.parseInt(exp+"")-120;
        } else if (201 <= exp && exp <= 300) {
            return Integer.parseInt(exp+"")-200;
        } else {
            return Integer.parseInt(exp+"")-300;
        }
    }

    public Double userExpPer(int expNow) {
        if (0 <= exp && exp <= 30) {
            return (double)expNow / 30 * 100;
        } else if (31 <= exp && exp <= 70) {
            return ((double)expNow-30) / 40 * 100;
        } else if (71 <= exp && exp <= 120) {
            return ((double)expNow-70) / 50 * 100;
        } else if (121 <= exp && exp <= 200) {
            return ((double)expNow-120) / 80 * 100;
        } else if (201 <= exp && exp <= 300) {
            return ((double)expNow-200);
        } else {
            return (double)expNow-300;
        }
    }

    public static ProfileDto of(User user, Rank rank, CharacterImage image) {
        return ProfileDto.builder()
                .rankName(rank.getRank())
                .imageUrl(image.getUrl())
                .userNickname(user.getNickname())
                .exp(user.getExp())
                .build();
    }
}
