import React from "react";
import { GithubBtn, GithubContainer } from "./GithubLogIn.style";

const GithubLogIn = () => {
  const REST_API_KEY = "4c7af76b297d827bf9f0";
  const REDIRECT_URI = "http://k7e106.p.ssafy.io:3000/github";
  // const REDIRECT_URI = "http://localhost:3000/github";

  const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&scope=project,user,repo,delete_repo&allow_signup=true`;

  const handleLogIn = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  return (
    <GithubContainer>
      <div>
        <img
          src="https://velog.velcdn.com/images/cos/post/005939a7-fa48-4370-a986-6648a1939825/github.jpg"
          alt=""
        />
        <GithubBtn onClick={handleLogIn} />
      </div>
      {/* <a href={GITHUB_AUTH_URL}> Github Login</a>         */}
    </GithubContainer>
  );
};

export default GithubLogIn;
