import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import IntroPage from "./pages/main/IntroPage";
import MyProfilePage from "./pages/profile/MyProfilePage";
import QuestionListPage from "./pages/board/QuestionListPage";
import WriteQuestionPage from "./pages/board/WriteQuestionPage";
import QuestionDetail from "./pages/board/QuestionDetail";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import Survey from "./components/survey/Survey";

// tmp
import TmpPage from "./pages/main/TmpPage";

// global css
import GlobalStyle from "./styles/global";
import KakaoRedirectPage from "./pages/auth/KakaoRedirectPage";
import GithubRedirectPage from "./pages/auth/GithubRedirectPage";
import SignupPage from "./pages/auth/SignupPage";
import WriteTilPage from "./pages/til/WriteTilPage";
import Navbar from "./components/navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/login" element={<IntroPage />} />
        <Route path="/github" element={<GithubRedirectPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
        <Route path="/questionlist" element={<QuestionListPage />} />
        <Route path="/writequestion" element={<WriteQuestionPage />} />
        <Route path="/questiondetail" element={<QuestionDetail />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/writetil" element={<WriteTilPage />} />
        <Route path="/tmp" element={<TmpPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
