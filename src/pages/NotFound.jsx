import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    
    <div>
      <h1>404 - 페이지를 찾을 수 없습니다 😢</h1>
      <p>주소를 다시 확인해주세요.</p>
      <nav style={{ display: "flex", gap: "20px", padding: "20px", background: "#ffffff" }}>
        <Link to="/">홈으로 돌아가기</Link>
      </nav>
    </div>
  );
}