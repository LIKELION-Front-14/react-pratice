import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout"; // Header 대신 Layout
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* 부모 Route: Layout이 감싸는 영역 */}
      <Route path="/" element={<Layout />}>
        {/* 자식 Route들 → <Outlet /> 자리에 렌더링됨 */}
        <Route index element={<Home />} /> {/* "/" 경로 */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;