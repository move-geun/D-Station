import React, { useEffect, useRef, useState } from "react";
import { IntroWrapper } from "./IntroPage.style";

import IntroThree2Page from "./IntroThree2Page";

import { UserIdState, UserLogin } from "../../recoil/atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import isAuthenticated from "../../api/isAuthenticated";

const DIVIDER_HEIGHT = 5;
const IntroPage = () => {
  const wrapperDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  const checkId = useRecoilValue(UserIdState);
  const [userLogIn, setUserLogIn] = useRecoilState(UserLogin);
  const a = () => {
    console.log("인트로페이지 유즈이펙트 체크 아이디", checkId);
    console.log("인트로페이지 유즈이펙트 체크 로그인", userLogIn);
  };

  useEffect(() => {
    setUserLogIn(isAuthenticated());
  }, []);

  const startBtnHandler = () => {
    wrapperDivRef.current.scrollTo({
      top: window.innerHeight + DIVIDER_HEIGHT,
      left: 0,
      behavior: "smooth",
    });
    setScrollIndex(2);
  };

  return (
    <IntroWrapper ref={wrapperDivRef}>
      {/* <Dots scrollIndex={scrollIndex} /> */}
      <div className="inner bg-black">
        <IntroThree2Page />
        {/* <Login /> */}
        {/* <button onClick={()=> startBtnHandler()}> 시작하기 </button> */}
      </div>
    </IntroWrapper>
  );
};

export default IntroPage;
