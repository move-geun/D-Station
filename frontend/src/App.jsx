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
import Mission from "./pages/mission/Mission";
import GithubRedirectPage from "./pages/auth/GithubRedirectPage";
import SignupPage from "./pages/auth/SignupPage";
import WriteTilPage from "./pages/til/WriteTilPage";
import Navbar from "./components/navbar/NavBar";
import LoginPage from "./pages/auth/LoginPage";
import RoadmapPage from "./pages/roadmap/RoadmapPage";
import PlanetPage from "./pages/roadmap/PlanetPage";
import SatellitePage from "./pages/roadmap/SatellitePage";
import AlreadyLoginPage from "./pages/auth/AlreadyLoginPage";

// 로그인 확인
import isAuthenticated from "./api/isAuthenticated";

// global css
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        {/* 비로그인 접근가능 */}
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/questionlist" element={<QuestionListPage />} />
        <Route path="/questiondetail" element={<QuestionDetail />} />
        <Route path="/*" element={<NotFoundPage />} />

        {/* 로그인시 접근불가 */}
        <Route
          path="/login"
          element={!isAuthenticated() ? <LoginPage /> : <AlreadyLoginPage />}
        />
        <Route
          path="/github"
          element={
            !isAuthenticated() ? <GithubRedirectPage /> : <AlreadyLoginPage />
          }
        />
        <Route
          path="/signup"
          element={!isAuthenticated() ? <SignupPage /> : <AlreadyLoginPage />}
        />

        {/* 로그인 필수 */}
        <Route
          path="/"
          element={isAuthenticated() ? <MainPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/myprofile"
          element={
            isAuthenticated() ? <MyProfilePage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/writequestion"
          element={
            isAuthenticated() ? <WriteQuestionPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/questionmodify"
          element={
            isAuthenticated() ? <QuestionModify /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/survey"
          element={isAuthenticated() ? <Survey /> : <Navigate to="/login" />}
        />
        <Route
          path="/writetil"
          element={
            isAuthenticated() ? <WriteTilPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/mission"
          element={isAuthenticated() ? <Mission /> : <Navigate to="/login" />}
        />
        <Route
          path="/roadmap"
          element={
            isAuthenticated() ? <RoadmapPage /> : <Navigate to="/login" />
          }
        />
        {/* <Route path="/planet/:id" element={<PlanetPage/>} />  */}
        <Route
          path="/planet"
          element={
            isAuthenticated() ? <PlanetPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/satellite/:sllNo"
          element={
            isAuthenticated() ? <SatellitePage /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
