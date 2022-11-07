import React from "react";
import { useRecoilState } from "recoil";
import { UserState } from "../../recoil/atoms";
import axios from "axios";

const KakaoRedirectPage = () => {
    const [userLogIn, setUserLogIn] = useRecoilState(UserState);

    // const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");
    getKakaoTokenHandler(code);

    
    async function getKakaoTokenHandler(code){
        try{
            const res = await axios.get("/kakao/login", code);
            // const token = res.data.accessToken;
            sessionStorage.setItem('Token', res.data.token);
            localStorage.setItem('username', res.data.username);

            logInHandler(res.data.token);

            return res;
        }catch(err){
            return err.response;
        }
    }
    

    const logInHandler = (data) => {
        setUserLogIn(data);
    }

   
    return(
        <div>
            카카오리다이렉트페이지

            <div> 잠시 기다려 주세요! 로그인 중입니다</div>

        </div>
    )
}

export default KakaoRedirectPage;