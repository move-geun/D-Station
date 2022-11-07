import React from "react";
import auth_axios from "../../api/user";
import { useLocation, useNavigate } from "react-router-dom";
import {Container, InputNickname} from './SignupPage.style';
import { useEffect } from "react";
import { useState } from "react";
const SignupPage = () => {


    const location = useLocation();
    const navigate = useNavigate();
    const [nicknamedata, setNicknameData] = useState();


    console.log("여기는 회원가입 페이지!!!! ", location);

    const signupHandler = () => {

        const data = {
            id : location.state.id,
            nickname : nicknamedata,
        }

        auth_axios.post(`/signup`, JSON.stringify(data), {
            headers: {
              "Content-Type": `application/json`,
            },
          })
        .then((res) => {
            console.log("회원가입 성공했서?   ", res);
            navigate('/');  

        }).catch(function(err){
            console.log(err);
        });
    }

    const typeInputHandler = (e) => {
        setNicknameData(e.target.value);
    };



    return (
        <Container>
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">닉네임</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">경력</label>
                <div className="login-form">
                <div className="sign-in-htm">
                    <div className="group">
                    <label htmlFor="user" className="label">닉네임</label>
                    <input id="user" type="text" className="input" onChange={typeInputHandler}/>
                    </div>
                    <div className="group">
                    <input type="submit" className="button" value="다음" onClick={signupHandler}/>
                    </div>
                </div>
                <div className="sign-up-htm">
                    <div className="group">
                    <label htmlFor="user" className="label">얼마나 일하셨슴까?</label>
                    <input id="user" type="text" className="input"/>
                    </div>
            
                    <div className="group">
                    <input type="submit" className="button" value="등록하기"/>
                    </div>
                    
                </div>
                </div>
        </div>
    </Container>
    )
}

export default SignupPage;