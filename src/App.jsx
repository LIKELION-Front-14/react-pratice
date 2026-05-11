import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-8 transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      {/*
        bg-white: 배경색 흰색
        p-6: 패딩
        rounded-xl: 테두리 둥글게
        shadow-lg: 그림자 효과
      */}
      <div className={`p-8 rounded-2xl shadow-xl text-center max-w-sm transition-colors duration-300 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        {/* 다크/라이트 토글 버튼 — isDark 상태를 반전시킴 */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${isDark ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300" : "bg-gray-800 text-white hover:bg-gray-700"}`}
          >
            {isDark ? "☀️ 라이트" : "🌙 다크"}
          </button>
        </div>
        <p className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
          CSS-in-JS 실습
        </p>

        <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>버튼을 눌러보세요!</p>

        {/* State에 따른 조건부 스타일링 (템플릿 리터럴 사용) */}
        <button
          onClick={() => setIsActive(!isActive)}
          className={`
            px-6 py-3 rounded-full font-semibold transition-all duration-300
            ${
              isActive
                ? "bg-green-500 text-white scale-110 shadow-green-200"
                : "bg-blue-500 text-white hover:bg-blue-600 shadow-blue-200"
            }
            shadow-lg
          `}
        >
          {isActive ? "작동 중!" : "시작하기"}
        </button>
      </div>
    </div>
  );
}
