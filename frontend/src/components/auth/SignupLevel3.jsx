import React from "react";
import { useEffect, useState } from "react";

import http from "../../api/http";
import { UserIdState } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";

import {
  MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  Button,
  ButtonContainer,
  DesText,
  TotalContainer,
} from "./SignupLevel.style";

const SignupLevel3 = ({ levelHandler }) => {
  const [nicknamedata, setNicknameData] = useState();
  const userId = useRecoilValue(UserIdState);

  const [nextMessage, setNextMessage] = useState("회원가입을 완료해주세요.");
  const [successSignup, setSuccessSignup] = useState(false);

  useEffect(() => {}, [successSignup]);

  const nicknameHandler = (e) => {
    setNicknameData(e.target.value);
  };

  const signupHandler = () => {
    const data = {
      id: userId,
      nickname: nicknamedata,
    };
    http.auth_axios
      .post(`/signup`, JSON.stringify(data), {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log("회원가입 성공했서?   ", res);
        setNextMessage("회원가입이 완료되었습니다.");
        levelHandler(1);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <TotalContainer>
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <DesText>사용할 닉네임을 입력해주세요.</DesText>
        <InputContainer>
          <Input
            type="text"
            placeholder="nickname"
            onChange={nicknameHandler}
          />
        </InputContainer>

        <ButtonContainer>
          <Button content="회원가입" onClick={signupHandler}>
            회원가입
          </Button>
        </ButtonContainer>
        <DesText>{nextMessage}</DesText>
        <ButtonContainer>
          <Button
            content="다음"
            disabled={!successSignup}
            onClick={signupHandler}
          >
            다음
          </Button>
        </ButtonContainer>
      </MainContainer>
    </TotalContainer>
  );
};

export default SignupLevel3;
