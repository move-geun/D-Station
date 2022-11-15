import React from "react";
import { Container, Profile, Percent } from "./MyProfilePage.style";
import Achievement from "../../components/profile/Achievement";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useRecoilState } from "recoil";
import { UserIdState } from "../../recoil/atoms";

const MyProfilePage = () => {
  const a = "76";
  const [nik, setNik] = useRecoilState(UserIdState);

  useEffect(() => {
    setNik(nik.toLowerCase());
    console.log(nik, "이게 아톰");
  }, []);
  // 유저 픽셀라 이미지 주소
  const pix =
    "https://pixe.la/v1/users/" + nik + "/graphs/" + nik + "?appearance=dark";

  return (
    <Container>
      <Profile>
        <img className="profile" src="../assets/profile.png" alt="" />
        <div className="name">개린이</div>
        <div className="user">님의 행성</div>
      </Profile>
      <Percent>
        <Link to={"/survey"} className="title">
          내 개발 성향 알아보러 가기
        </Link>
      </Percent>
      <Percent>
        <div className="title">
          <div className="status">
            설거지 당번
            <div className="per">76%</div>
          </div>
          <div className="status">
            우주선 청소부
            <div className="per">까지 24%</div>
          </div>
        </div>
        <div className="perbox">
          <div className="nowper" style={{ width: `${a}%` }}></div>
        </div>
      </Percent>
      <Achievement></Achievement>
      <div className="hide">
        <img src={pix} alt="잔디" className="graph"></img>
        <div className="hideblack"></div>
      </div>
    </Container>
  );
};

export default MyProfilePage;
