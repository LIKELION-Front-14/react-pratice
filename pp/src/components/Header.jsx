import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px", background: "#f0f0f0" }}>
      
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
        to="/menu"  
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
        })}
      >
        메뉴
      </NavLink>

        <NavLink
        to="/story"  
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
        })}
      >
        스토리
      </NavLink>


      <NavLink
      to="/login"
      style={({ isActive }) => ({
        color: isActive ? "red" : "black",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: "none",})}
     >
 
        로그인
    </NavLink>
    
    </nav>
  );
}