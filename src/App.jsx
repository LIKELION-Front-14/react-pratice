import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Layout을 루트로 설정 */}
      <Route element={<Layout />}>
        {/* 홈페이지: / */}
        <Route path="/" element={<Home />} />

        {/* 소개 페이지: /menu */}
        <Route path="/menu" element={<Menu />} />

        {/* 스토리 페이지: /story */}
        <Route path="/story" element={<Story />} />

        {/* 로그인 페이지: /login */}
        <Route path="/login" element={<Login />} />

        {/* 404 페이지: 위 모든 경로에 매칭되지 않을 때 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
