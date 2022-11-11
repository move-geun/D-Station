import React from "react";
import { AchieveContainer, Board } from "./Achievement.style";

const Achievement = () => {
  return (
    <AchieveContainer>
      <div>
        <div className="title">업적</div>
        <Board>
          <img src="../assets/html.png" alt="" />
          <img src="../assets/css.png" alt="" />
          <img src="../assets/python.png" alt="" />
          <img src="../assets/spring.png" alt="" />
        </Board>
      </div>
      <div>
        <div className="title">진행 중...</div>
        <Board>
          <img src="../assets/vue.png" alt="" />
          {/* <img src="../assets/react.png" alt="" /> */}
          <img src="../assets/mysql.png" alt="" />
          <img src="../assets/docker.png" alt="" />
        </Board>
      </div>
    </AchieveContainer>
  );
};

export default Achievement;
