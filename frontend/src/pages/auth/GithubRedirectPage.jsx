import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { UserState, UserIdState } from "../../recoil/atoms";
import http from "../../api/http";
import { useEffect } from "react";

const GithubRedirectPage = () => {
  const navigate = useNavigate();
  // const [userLogIn, setUserLogIn] = useRecoilState(UserState);
  const [userId, setUserId] = useRecoilState(UserIdState);

  // const href = window.location.href;
  useEffect(() => {
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");
    getGithubTokenHandler(code);
  }, []);

  // useEffect(()=>{console.log("유저아이디값 들어옴   ", userId)}, [userId])

  async function getGithubTokenHandler(code) {
    try {
      const res = await http.auth_axios.post(
        `/github/check?githubCode=${code}`
      );
      console.log("가입시작", userId);

      if (res.data.statusCode === 200) {
        const githubId = res.data.githubId;

        // 회원가입 유무
        // 200 : 회원가입
        // 401 : 로그인
        await http.auth_axios
          .get(`/id-info?id=${githubId}`)
          .then((response) => {
            if (response.data.statusCode === 200) {
              setUserId(githubId);
              navigate("/signup", {
                state: {
                  id: githubId,
                },
              });
            } else if (response.data.statusCode === 401) {
              http.auth_axios
                .post(`/login?id=${githubId}`)
                .then((res) => {
                  console.log("로그인 성공   ", res);
                  sessionStorage.setItem("Token", res.data.accessToken);
                  localStorage.setItem("userId", res.data.id);
                  setUserId(res.data.id);
                  console.log("userID는 이거다", userId);
                  logInHandler(res.data.accessToken);
                })
                .catch(() => {});
            }
          });
      }
    } catch (err) {
      return err.response;
    }
  }

  const logInHandler = (data) => {
    // setUserLogIn(data);
    navigate("/");
    console.log(userId);
  };

  return (
    <div>
      깃헙다이렉트페이지
      <div> 잠시 기다려 주세요! 로그인 중입니다</div>
    </div>
  );
};

export default GithubRedirectPage;
