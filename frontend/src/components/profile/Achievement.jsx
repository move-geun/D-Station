import React from "react";
import { AchieveContainer, Board } from "./Achievement.style";

const Achievement = () => {
  return (
    <AchieveContainer>
      <div>
        <div className="title">업적</div>
        <Board>
          <img src="../assets/profile.png" alt="" />
          <img src="../assets/profile.png" alt="" />
          <img src="../assets/profile.png" alt="" />
          <img src="../assets/profile.png" alt="" />
          <img src="../assets/profile.png" alt="" />
        </Board>
      </div>
      <div>
        <div className="title">진행 중...</div>
        <Board>
          <img src="../assets/profile.png" alt="" />
          <img src="../assets/profile.png" alt="" />
          <img src="../assets/profile.png" alt="" />
          <img src="../assets/profile.png" alt="" />
          <img src="../assets/profile.png" alt="" />
        </Board>
      </div>
    </AchieveContainer>
  );
};

export default Achievement;
