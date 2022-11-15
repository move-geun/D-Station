import React from "react";
import { Container, Profile, Percent } from "./MyProfilePage.style";
import Achievement from "../../components/profile/Achievement";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserIdState } from "../../recoil/atoms";
import { userInfoSelector } from "../../recoil/selector";

const MyProfilePage = () => {
  const [nik, setNik] = useRecoilState(UserIdState);
  const [lownik, setLowNik] = useState(nik);
  const user = useRecoilValue(userInfoSelector);
  const imgsrc = "../assets/" + user.imageUrl;

  useEffect(() => {
    setLowNik(nik.toLowerCase());
    console.log(user);
  }, []);
  // 유저 픽셀라 이미지 주소
  const pix =
    "https://pixe.la/v1/users/" +
    lownik +
    "/graphs/" +
    lownik +
    "?appearance=dark";

  return (
    <Container>
      <Profile>
        <img className="profile" src={imgsrc} alt="유저 등급사진" />
        <div className="name">{user.userNickname}</div>
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
            {user.rankName}
            <div className="per">{user.exp}%</div>
          </div>
          <div className="status">
            {user.nextRank}
            <div className="per">까지 {100 - user.exp}%</div>
          </div>
        </div>
        <div className="perbox">
          <div className="nowper" style={{ width: `${user.exp}%` }}></div>
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
