import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import IntroPage from "./pages/main/IntroPage";
import MyProfilePage from "./pages/profile/MyProfilePage";
import QuestionListPage from "./pages/board/QuestionListPage";
import WriteQuestionPage from "./pages/board/WriteQuestionPage";
import QuestionDetail from "./pages/board/QuestionDetail";
import QuestionModify from "./components/board/QuestionModify";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import Survey from "./components/survey/Survey";
import GithubRedirectPage from "./pages/auth/GithubRedirectPage";
import SignupPage from "./pages/auth/SignupPage";
import WriteTilPage from "./pages/til/WriteTilPage";
import Navbar from "./components/navbar/NavBar";
import LoginPage from "./pages/auth/LoginPage";
import PlanetPage from "./pages/roadmap/PlanetPage";
import SatellitePage from "./pages/roadmap/SatellitePage";
import MissionPage from "./pages/roadmap/MissionPage";
import CodeExam from "./components/mission/CodeExam";

// 로그인 확인
import { UserLogin } from "./recoil/atoms";
import { useRecoilValue } from "recoil";

// global css
import GlobalStyle from "./styles/global";
import RefRedirectPage from "./pages/roadmap/RefRedirectPage";
import GalaxyPage from "./pages/roadmap/GalaxyPage";

function App() {
  const isLogin = useRecoilValue(UserLogin);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        {/* 비로그인 접근가능 */}
        <Route path="/" element={<IntroPage />} />
        <Route path="/questionlist" element={<QuestionListPage />} />
        <Route path="/questiondetail" element={<QuestionDetail />} />
        <Route path="/*" element={<NotFoundPage />} />
        {/* 로그인시 접근불가 */}
        <Route
          path="/login"
          element={!isLogin ? <LoginPage /> : <Navigate to="/main" />}
        />
        <Route
          path="/github"
          element={!isLogin ? <GithubRedirectPage /> : <Navigate to="/main" />}
        />
        <Route
          path="/signup"
          element={!isLogin ? <SignupPage /> : <Navigate to="/main" />}
        />
        {/* 로그인 필수 */}
        {/* <Route
          path="/main"
          element={isLogin ? <MainPage /> : <Navigate to="/login" />}
        /> */}
        <Route path="/main" element={<MainPage />} />
        <Route
          path="/myprofile"
          element={isLogin ? <MyProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/writequestion"
          element={isLogin ? <WriteQuestionPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/questionmodify"
          element={isLogin ? <QuestionModify /> : <Navigate to="/login" />}
        />
        <Route
          path="/survey"
          element={isLogin ? <Survey /> : <Navigate to="/login" />}
        />
        <Route
          path="/writetil"
          element={isLogin ? <WriteTilPage /> : <Navigate to="/login" />}
        />
        {/* <Route
          path="/mission"
          element={isLogin ? <MissionPage /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/galaxy/:galaxyNo"
          element={isLogin ? <GalaxyPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/planet/:plantNo"
          element={isLogin ? <PlanetPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/satellite/:sllNo"
          element={isLogin ? <SatellitePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/mission/:missNo"
          element={isLogin ? <MissionPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/refredirect"
          element={isLogin ? <RefRedirectPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/mission/:missNo/codeexam"
          element={isLogin ? <CodeExam /> : <Navigate to="/login" />}
        />

        {/* 테스트용 !!!! */}
        {/* <Route path="/mission/:missNo" element={<MissionPage />} />
        <Route path="/satellite/:sllNo" element={<SatellitePage />} />
        <Route path="/planet/:plantNo" element={<PlanetPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
