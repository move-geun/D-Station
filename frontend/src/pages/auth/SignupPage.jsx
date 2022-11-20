import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, InputNickname } from "./SignupPage.style";
import { useEffect, useState } from "react";
import SignupLevel1 from "../../components/auth/SignupLevel1";
import SignupLevel2 from "../../components/auth/SignupLevel2";
import SignupLevel3 from "../../components/auth/SignupLevel3";
import SignupLevel4 from "../../components/auth/SignupLevel4";

import { UserIdState, UserState, PATState } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";

const SignupPage = () => {
  const location = useLocation();

  const [levelState, setLevelState] = useState(3);

  const levelHandler = (data) => {
    setLevelState(data);
  };

  useEffect(() => {}, [levelState]);

  function SignupContent() {
    if (levelState == 1) {
      return (
        <>
          <SignupLevel1 levelHandler={levelHandler} />
        </>
      );
    } else if (levelState == 2) {
      return (
        <>
          <SignupLevel2 levelHandler={levelHandler} />
        </>
      );
    } else if (levelState == 3) {
      return (
        <>
          <SignupLevel3 levelHandler={levelHandler} />
        </>
      );
    } else {
      return (
        <>
          <SignupLevel4 levelHandler={levelHandler} />
        </>
      );
    }
  }

  return (
    <>
      <SignupContent />
    </>
  );
};

export default SignupPage;
