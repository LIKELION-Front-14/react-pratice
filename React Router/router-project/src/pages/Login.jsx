import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleLogin = () => {
    if (userId === "guest") {
      navigate("/", { replace: true });
    } else {
      setError("아이디가 틀립니다. (힌트: guest)");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="login-circle c1" />
        <div className="login-circle c2" />
        <div className="login-circle c3" />
      </div>

      <div className={`login-card ${isShaking ? "shake" : ""}`}>
        <div className="login-logo">
          <span>☕</span>
          <span className="login-brand">머쨍이사자</span>
        </div>

        <h2 className="login-title">멤버 로그인</h2>
        <p className="login-subtitle">likelion 멤버십 혜택을 누려보세요</p>

        <div className="login-form">
          <div className="input-group">
            <label htmlFor="userId">아이디</label>
            <input
              id="userId"
              type="text"
              placeholder="아이디 뭐에요~"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              className={error ? "input-error" : ""}
            />
            {error && <p className="error-msg">⚠ {error}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호 뭐에요~"
              disabled
            />
          </div>

          <button className="login-btn" onClick={handleLogin}>
            로그인
          </button>

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← 이전 페이지로 돌아가기
          </button>
        </div>

        <p className="login-hint">
          테스트 계정: <code>guest</code>
        </p>
      </div>
    </div>
  );
}
