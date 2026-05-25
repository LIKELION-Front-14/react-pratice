import { Link } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <div className="notfound-coffee">☕</div>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">커피를 흘렸어요...</h2>
        <p className="notfound-desc">
          찾으시는 페이지가 존재하지 않거나,<br />
          이미 사라진 페이지입니다.
        </p>
        <Link to="/" className="notfound-link">
          홈으로 돌아가기 →
        </Link>
      </div>
      <div className="notfound-bg-text">404</div>
    </div>
  );
}
