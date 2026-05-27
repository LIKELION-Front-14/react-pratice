import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'; 

export default function Login() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (id === "이호진") {
      alert("로그인 성공!");
      navigate("/", { replace: true });
    } else {
      alert("아이디가 틀립니다!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">로그인</h2>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="이호진 입력"
              className="login-input"
            />
          </div>
          
          <div className="button-group">
            <button type="submit" className="btn-login">
              로그인
            </button>
            <button 
              type="button" 
              onClick={() => navigate(-1)} 
              className="btn-back"
            >
              ← 뒤로
            </button>
          </div>
        </form>

      
      </div>
    </div>
  );
}