import React, {useEffect} from "react";
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
// import { KakaoBtn } from "./KakaoLogIn.style";

const KakaoLogIn = () => {
    const REST_API_KEY = "01b75fd6b6fd2890a8911ff6562da05f";
    // const REDIRECT_URI = "http://k7e106.p.ssafy.io:8081/api/kakao/login";
    const REDIRECT_URI = "http://localhost:3000/kakao";
    
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleLogIn = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return(
        <div> 카카오 로그인 
         {/* <KakaoBtn onClick={handleLogIn}/>    */}
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>        
        </div>
        
    )

}

export default KakaoLogIn;