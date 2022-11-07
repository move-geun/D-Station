import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import auth_axios from "../../api/user";
import { UserIdState, UserState, PATState  } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";

import { MainContainer, WelcomeText, InputContainer, Input, Button, ButtonContainer,DesText} from './SignupLevel.style';

const SignupLevel3 = ({levelHandler}) => {

    const [nicknamedata, setNicknameData] = useState();
    const userId = useRecoilValue(UserIdState);

    const nicknameHandler = (e) => {
        setNicknameData(e.target.value);
    };

    const signupHandler = () => {
        const data = {
            id : userId,
            nickname : nicknamedata,
        }
        auth_axios.post(`/signup`, JSON.stringify(data), {
            headers: {
              "Content-Type": `application/json`,
            },
          })
        .then((res) => {
            console.log("회원가입 성공했서?   ", res);
            levelHandler(4);
            // navigate('/');  

        }).catch(function(err){
            console.log(err);
        });
    }


    return (
        <MainContainer>
            <WelcomeText>Welcome</WelcomeText>
            <DesText>사용할 닉네임을 입력해주세요.</DesText>
            <InputContainer>
                <Input type="text" placeholder="nickname" onChange={nicknameHandler}/>
            </InputContainer>

            <ButtonContainer>
                <Button content="다음" onClick={signupHandler}>회원가입</Button>
            </ButtonContainer>
           
        </MainContainer>
    )
}

export default SignupLevel3;