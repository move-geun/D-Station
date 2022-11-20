import React from "react";
import { Container, Profile, Percent } from "./MyProfilePage.style";
import Achievement from "../../components/profile/Achievement";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { UserIdState } from "../../recoil/atoms";
import { userInfoSelector } from "../../recoil/selector";

const MyProfilePage = () => {
  const nik = useRecoilValue(UserIdState);
  const [lownik, setLowNik] = useState(nik);
  const user = useRecoilValue(userInfoSelector);
  const imgsrc = "../assets/" + user.imageUrl;

  useEffect(() => {
    setLowNik(nik.toLowerCase());
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
            {user.exp >= 300 ? null : (
              <div className="per">{Math.ceil(user.expPer)}%</div>
            )}
          </div>
          {user.exp >= 300 ? (
            <div className="per">100%</div>
          ) : (
            <div className="status">
              {user.nextRank}
              <div className="per">까지 {100 - Math.ceil(user.expPer)}%</div>
            </div>
          )}
        </div>
        <div className="perbox">
          {user.exp >= 300 ? (
            <div className="nowper" style={{ width: "100%" }}></div>
          ) : (
            <div className="nowper" style={{ width: `${user.expPer}%` }}></div>
          )}
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
