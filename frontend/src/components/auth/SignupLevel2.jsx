import React from "react";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  Button,
  ButtonContainer,
  DesText,
} from "./SignupLevel.style";
import { useEffect, useState } from "react";
import http from "../../api/http";
import { UserIdState } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";

const SignupLevel2 = ({ levelHandler }) => {
  const [repoMessage, setRepoMessage] = useState("");
  const [repoName, setRepoName] = useState();
  const [successRepo, setSuccessRepo] = useState(false);

  const userId = useRecoilValue(UserIdState);
  console.log("Recoil에 있는 아이디 뭐야  ", userId);

  useEffect(() => {
    // setUserId(location.state.id);
    // setUserId(Id);
  }, []);

  useEffect(() => {}, [successRepo]);

  const repoNameHandler = (e) => {
    setRepoName(e.target.value);
  };

  const createRepo = () => {
    const data = {
      id: userId,
      repoName: repoName,
    };
    http.connect_axios
      .post(`/til/create-repo`, JSON.stringify(data), {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log("레포명 생성 완료", res);
        setRepoMessage("Repository가 생성되었습니다.");
        setSuccessRepo(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nextBtnHandler = () => {
    levelHandler(4);
  };

  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <DesText>TIL작성을 위한 Repository명을 입력해주세요.</DesText>
      <InputContainer>
        <Input
          type="text"
          placeholder="Repository Name"
          onChange={repoNameHandler}
        />
      </InputContainer>
      <ButtonContainer>
        <Button content="Repository 등록하기" onClick={createRepo}>
          Repository 등록하기
        </Button>
      </ButtonContainer>
      <DesText>{repoMessage}</DesText>
      <ButtonContainer>
        <Button content="다음" disabled={!successRepo} onClick={nextBtnHandler}>
          다음
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default SignupLevel2;
