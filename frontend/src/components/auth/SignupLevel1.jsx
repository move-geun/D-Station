import React from "react";
import { MainContainer, WelcomeText, InputContainer, Input, Button, ButtonContainer,DesText, 
    HorizontalRule, IconsContainer, ForgotPassword } from './SignupLevel.style';
import { PATState } from "../../recoil/atoms";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import connect_axios from "../../api/connect";

const SignupLevel1 = ({levelHandler}) => {

    const [userId, setUserId] = useState();
    const [githubData, setGithubData] = useState({
        id: '',
        password: '',
    });
    const [successGetPAT, setSuccessGetPAT] = useState(false);
    const [getPAT, setGetPAT] = useRecoilState(PATState);
    const [authMessage, setAuthMessage] = useState('');

    useEffect(()=> {
        if(successGetPAT){
            setAuthMessage('인증이 완료되었습니다.');
        } else {
            setAuthMessage('인증을 완료해주세요');
        }
    }, [successGetPAT]);

    const githubIdHandler = (e) => {
        const {value} = e.target;
        setGithubData({
            ...githubData,
            id: value,
        })
    }

    const githubPwdHandler = (e) => {
        const {value} = e.target;
        setGithubData({
            ...githubData,
            password: value,
        })
    }

    const AuthorizeGithub = () => {
        console.log("아이디 ", githubData.id);
        console.log("비번 ", githubData.password);

        const userId = "minzzz1st7";
        connect_axios.post(`/PAT/create?githubId=${githubData.id}&githubPw=${githubData.password}&userId=${userId}`)
        .then((res) => {
            console.log("인증성공", res);
            setGetPAT(res.accessToken);
            setSuccessGetPAT(true);
        }).catch((err) => {
            console.log(err);
        })
    }


    const nextBtnHandler = ()=> {
        levelHandler(2); 
    }

    return (
        <MainContainer>
            <WelcomeText>Welcome</WelcomeText>
           
            <DesText>Github와 연동하기 위해서는 Github 아이디와 비밀번호가 필요합니다.</DesText>
            <InputContainer>
                <Input type="text" placeholder="아이디" onChange={githubIdHandler} />
                <Input type="password" placeholder="비밀번호" onChange={githubPwdHandler}/>
            </InputContainer>
            <ButtonContainer>
                <Button content="Github 인증하기" onClick={AuthorizeGithub}>Github 인증하기</Button>
            </ButtonContainer>
            <DesText>{authMessage}</DesText>
            <ButtonContainer>
                <Button content="다음" disabled={!successGetPAT} onClick={nextBtnHandler}>다음</Button>
            </ButtonContainer>
            
            
    </MainContainer>
    )
}

export default SignupLevel1;