// src/components/Header.jsx
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px", background: "#FFFFF0" }}>
      {/* 1. style을 함수로 전달 → isActive를 받아 사용 */}
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          color: isActive ? "brown" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/menu"
        style={({ isActive }) => ({
          color: isActive ? "brown" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
        })}
      >
        Menu
      </NavLink>

      <NavLink
        to="/story"
        style={({ isActive }) => ({
          color: isActive ? "brown" : "black",
          fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none",
        })}
      >
        Story
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => ({
            color: isActive ? "brown" : "black",
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none",
        })}
        >
        Login
        </NavLink>
    </nav>
  );
}