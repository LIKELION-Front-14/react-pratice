import { Outlet, NavLink } from "react-router-dom";

const navStyle = ({ isActive }) => ({
  color: isActive ? "red" : "black",
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: "none",
});

export default function Layout() {
  return (
    <div>
      {/* 1. 모든 페이지에서 보일 헤더 */}
      <header style={{ padding: "20px", background: "#f0f0f0", display: "flex", gap: "20px" }}>
        <NavLink to="/" end style={navStyle}>홈</NavLink>
        <NavLink to="/about" style={navStyle}>소개</NavLink>
        <NavLink to="/contact" style={navStyle}>연락처</NavLink>
        <NavLink to="/login" style={navStyle}>로그인</NavLink>
      </header>

      {/* 2. ⭐️ 자식 페이지가 들어갈 자리! */}
      <main style={{ padding: "20px", minHeight: "60vh" }}>
        <Outlet />
      </main>

      {/* 3. 모든 페이지에서 보일 푸터 */}
      <footer style={{ padding: "20px", background: "#333", color: "white", textAlign: "center" }}>
        © 2025 My App
      </footer>
    </div>
  );
}