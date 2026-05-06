import { useState } from "react";

export default function InlineExample() {
  const [isError, setIsError] = useState(false);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        // State와 결합이 매우 쉬움
        backgroundColor: isError ? "#ffe6e6" : "#e6f7ff",
      }}
    >
      <h2 style={{ color: isError ? "red" : "blue" }}>
        {isError ? "에러 발생!" : "정상 상태"}
      </h2>
      <button onClick={() => setIsError(!isError)}>상태 반전시키기</button>
    </div>
  );
}
