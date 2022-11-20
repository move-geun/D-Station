import React, { useEffect, useState } from "react";
import { AchieveContainer, Board } from "./Achievement.style";
import { useRecoilValue } from "recoil";
import { userStudySelector } from "../../recoil/selector";

const Achievement = () => {
  const userStudy = useRecoilValue(userStudySelector);
  const [studing, setStuding] = useState(null);
  const [finish, setSuccess] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    setStuding(userStudy.data);
  }, []);
  console.log(studing);
  return (
    <AchieveContainer>
      <div>
        <div className="title">업적</div>
        <Board>
          {studing ? (
            studing.map((stu, idx) => {
              if (stu.progress === 100) {
                const imgsrc = "../assets/" + stu.pimage;
                return <img key={idx} src={imgsrc} alt="" />;
              }
            })
          ) : (
            <div>아직 학습 완료된 과정이 없어요</div>
          )}
        </Board>
      </div>
      <div>
        <div className="title">진행 중...</div>
        <Board>
          {studing ? (
            studing.map((stu, idx) => {
              if (stu.progress < 100) {
                const imgsrc = "../assets/" + stu.pimage;
                return (
                  <div className="progressbox">
                    <img
                      key={idx}
                      src={imgsrc}
                      alt="해당 과정 이미지를 준비중입니다"
                      style={{ width: `${stu.progress}%` }}
                    />
                    <div>{Math.ceil(stu.progress)}%</div>
                  </div>
                );
              }
            })
          ) : (
            <div>아직 학습을 시작한 과정이 없어요</div>
          )}
        </Board>
      </div>
    </AchieveContainer>
  );
};

export default Achievement;
