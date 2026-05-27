// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const navigate = useNavigate(); // 1. navigate 함수 받기

  const handleLogin = () => {
    if (id === "guest") {
      alert("로그인 성공!");
      navigate("/"); // 2. 홈으로 이동
    } else {
      alert("아이디가 틀립니다!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>로그인</h2>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="guest 입력"
        style={{ marginRight: "8px", padding: "8px" }}
      />
      <button onClick={handleLogin}>로그인</button>

      {/* 3. 뒤로가기 버튼 */}
      <button onClick={() => navigate(-1)} style={{ marginLeft: "8px" }}>
        ← 뒤로
      </button>
    </div>
  );
}