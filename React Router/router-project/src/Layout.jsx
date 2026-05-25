import { NavLink, Outlet } from "react-router-dom";
import "./styles/Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">☕</span>
            <div className="logo-text">
              <span className="logo-main">Likelion</span>
              <span className="logo-sub">COFFEE</span>
            </div>
          </div>

          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              HOME
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              MENU
            </NavLink>
            <NavLink to="/story" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              STORY
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              LOGIN
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">Likelion COFFEE</span>
            <p className="footer-tagline">사자처럼 강해지고 싶은 나</p>
          </div>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-sns">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-sns">Facebook</a>
            <a href="https://blog.naver.com" target="_blank" rel="noreferrer" className="footer-sns">Blog</a>
          </div>
          <p className="footer-copy">© 2026 Likelion COFFEE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
