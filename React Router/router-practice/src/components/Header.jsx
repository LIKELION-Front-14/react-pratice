import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px", background: "#f0f0f0" }}>
      {/* 1. style을 함수로 전달 → isActive를 받아 사용 */}
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
        })}
      >
        홈
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
        })}
      >
        소개
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        연락처
      </NavLink>

      <NavLink
        to="/login"
        style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "normal",
        })}
        >
        로그인
        </NavLink>
    </nav>
  );
}