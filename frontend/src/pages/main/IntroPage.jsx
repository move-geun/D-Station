import React, { useEffect, useRef, useState } from "react";
import Dots from "../../components/dots/Dots";
import Signup from "../../components/auth/Signup";
import { IntroWrapper } from "./IntroPage.style";

import ThreeTestPage from "./ThreeTestPage";
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
  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     e.preventDefault();
  //     const {deltaY} = e;
  //     const {scrollTop} = wrapperDivRef.current;
  //     const pageHeight = window.innerHeight; //화면 세로길이

  //     if (deltaY > 0){
  //       // 스크롤 내릴 때
  //       if(scrollTop >= 0 && scrollTop < pageHeight){
  //         wrapperDivRef.current.scrollTo({
  //           top: pageHeight + DIVIDER_HEIGHT,
  //           left: 0,
  //           behavior: "smooth",
  //         })
  //         setScrollIndex(2);
  //       } else if ( scrollTop >= pageHeight && scrollTop < pageHeight * 2){
  //         wrapperDivRef.current.scrollTo({
  //           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
  //           left: 0,
  //           behavior: "smooth",
  //         })
  //         setScrollIndex(3);
  //       } else {
  //         wrapperDivRef.current.scrollTo({
  //           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
  //           left: 0,
  //           behavior: "smooth",
  //         })
  //         setScrollIndex(3);
  //       }
  //     } else {
  //       // 스크롤 올릴 때
  //       if ( scrollTop >= 0 && scrollTop < pageHeight){
  //         wrapperDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: "smooth",
  //         })
  //         setScrollIndex(1);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2){
  //         wrapperDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(1);
  //       } else {
  //         wrapperDivRef.current.scrollTo({
  //           top: pageHeight + DIVIDER_HEIGHT,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(2);
  //       }
  //     }
  //   };

  //   const wrapperDivRefCurrent = wrapperDivRef.current;
  //     wrapperDivRefCurrent.addEventListener("wheel", wheelHandler);
  //     return ()=> {
  //       wrapperDivRefCurrent.removeEventListener("wheel", wheelHandler);
  //     };

  // }, []);

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
