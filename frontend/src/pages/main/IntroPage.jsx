import React, { useEffect, useRef, useState } from "react";
import Dots from "../../components/dots/Dots";
import Signup from "../../components/auth/Signup";
import { IntroWrapper} from "./IntroPage.style";
import Login from "../../components/auth/Login";
import ThreeTestPage from "./ThreeTestPage";


const DIVIDER_HEIGHT = 5;
const IntroPage = () => {
  const wrapperDivRef  = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const {deltaY} = e;
      const {scrollTop} = wrapperDivRef.current;
      const pageHeight = window.innerHeight; //화면 세로길이

      if (deltaY > 0){
        // 스크롤 내릴 때
        if(scrollTop >= 0 && scrollTop < pageHeight){
          wrapperDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          })
          setScrollIndex(2);
        } else if ( scrollTop >= pageHeight && scrollTop < pageHeight * 2){
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          })
          setScrollIndex(3);
        } else {
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          })
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if ( scrollTop >= 0 && scrollTop < pageHeight){
          wrapperDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2){
          wrapperDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          wrapperDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } 
      }
    };



    const wrapperDivRefCurrent = wrapperDivRef.current;
      wrapperDivRefCurrent.addEventListener("wheel", wheelHandler);
      return ()=> {
        wrapperDivRefCurrent.removeEventListener("wheel", wheelHandler);
      };


  }, []);


  const startBtnHandler = () => {
    wrapperDivRef.current.scrollTo({
      top: window.innerHeight + DIVIDER_HEIGHT,
      left: 0,
      behavior: "smooth",
    })
    setScrollIndex(2);
  }

  return (
    <IntroWrapper ref={wrapperDivRef}>
        <Dots scrollIndex={scrollIndex} />
        <ThreeTestPage />
        <div className="inner bg-blue">
          
        <Login />
          <button onClick={()=> startBtnHandler()}> 시작하기 </button>
        </div>
        <div className="divider"></div>
        <div className="inner bg-pink">
          <Signup />
          
          
        </div>
        <div className="divider"></div>
        <div className="inner bg-yellow">
        <Login />
        </div>
    </IntroWrapper>
  );
};

export default IntroPage;

