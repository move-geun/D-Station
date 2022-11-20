import React, { useEffect, useState } from "react";
import { AchieveContainer, Board, Progressbox } from "./Achievement.style";
import { useRecoilValue } from "recoil";
import profile from "../../assets/images/profile.png";
import { userStudySelector } from "../../recoil/selector";
const Achievement = () => {
  const userStudy = useRecoilValue(userStudySelector);
  const [studing, setStuding] = useState(null);

  const onErrorImg = (e) => {
    e.target.src = profile;
  };

  useEffect(() => {
    setStuding(userStudy.data);
  }, []);
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
                const studycontent = stu.pimage.slice(0, stu.pimage.length - 4);
                const imgsrc = "../assets/" + stu.pimage;
                return (
                  <Progressbox>
                    <img
                      key={idx}
                      src={imgsrc}
                      className="proimg"
                      alt=""
                      onError={onErrorImg}
                      style={{ opacity: `${stu.progress}%` }}
                    />
                    <div>{studycontent}</div>
                    <div>{Math.ceil(stu.progress)}%</div>
                  </Progressbox>
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
