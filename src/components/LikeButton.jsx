import { useState } from "react";

function LikeButton() {
  // 1. State 선언: [현재값, 변경함수] = useState(초기값)
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked); // 클릭할 때마다 true/false 반전
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        // 2. State(isLiked)에 따라 스타일이 실시간으로 결정됨
        backgroundColor: isLiked ? "#ff4d4f" : "#f0f0f0",
        color: isLiked ? "white" : "black",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "1px solid #d9d9d9",
        cursor: "pointer",
      }}
    >
      {isLiked ? "❤️ 좋아요 취소" : "🤍 좋아요"}
    </button>
  );
}

export default LikeButton;
