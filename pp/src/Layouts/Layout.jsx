import { Outlet, NavLink } from "react-router-dom";

const navStyle = ({ isActive }) => ({
  color: isActive ? "red" : "black",
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: "none",
});

export default function Layout() {
  return (
    <div>
      
      <header style={{ padding: "20px", background: "#f0f0f0", display: "flex", gap: "20px" }}>
        <NavLink to="/" end style={navStyle}>홈</NavLink>
        <NavLink to="/menu" style={navStyle}>메뉴</NavLink>
        <NavLink to="/story" style={navStyle}>스토리</NavLink>
        <NavLink to="/login" style={navStyle}>로그인</NavLink>
      </header>

      
      <main style={{ padding: "20px", minHeight: "60vh" }}>
        <Outlet />
      </main>

      
      <footer style={{ padding: "10px", background: "#fdd79e", color: "black", textAlign: "center" }}>
        © 2026 치킨먹자. All rights reserved.
      </footer>
    </div>
  );
}