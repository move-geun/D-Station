import React, { useEffect, useState } from "react";
import { AchieveContainer, Board } from "./Achievement.style";
import { useRecoilValue } from "recoil";
import { userStudySelector } from "../../recoil/selector";

const Achievement = () => {
  const userStudy = useRecoilValue(userStudySelector);
  const [studing, setStuding] = useState(null);

  useEffect(() => {
    setStuding(userStudy.data);
    console.log(studing);
  });
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
