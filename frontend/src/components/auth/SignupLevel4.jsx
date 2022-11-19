import React from "react";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  Button,
  ButtonContainer,
  DesText,
  HorizontalRule,
  IconsContainer,
  ForgotPassword,
} from "./SignupLevel.style";
import { PATState } from "../../recoil/atoms";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import connect_axios from "../../api/http";

const SignupLevel4 = () => {
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>

      <DesText>축하합니다! 회원가입이 완료되었습니다.</DesText>
    </MainContainer>
  );
};

export default SignupLevel4;
