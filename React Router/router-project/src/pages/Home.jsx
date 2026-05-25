import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grain" />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">Since 2012 · Gyeonggi, Kiheung</p>
          <h1 className="hero-title">
            <span className="hero-title-line">Likelion 14th</span>
            <span className="hero-title-line accent">COFFEE</span>
          </h1>
          <p className="hero-desc">
            likelion처럼 강하고 깊은 풍미.<br />
            매일 아침 당신의 하루를 깨우는 특별한 한 code.
          </p>
          <button
            className="hero-btn"
            onClick={() => navigate("/menu")}
          >
            <span>메뉴 보러가기</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        <div className="hero-scroll-hint">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Feature Section */}
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>구글 클라우드 블루 코코넛 라떼</h3>
            <p>Google Cloud Blue Coconut Latte</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>멋사 에이드</h3>
            <p>Likelion Ade</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>밤티</h3>
            <p>Chestnut tea</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2 className="cta-title">오늘의 스페셜 메뉴를 확인하세요</h2>
          <button className="cta-btn" onClick={() => navigate("/menu")}>
            전체 메뉴 보기
          </button>
        </div>
      </section>
    </div>
  );
}
