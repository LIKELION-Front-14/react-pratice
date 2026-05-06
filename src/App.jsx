import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* 
        bg-white: 배경색 흰색
        p-6: 패딩
        rounded-xl: 테두리 둥글게
        shadow-lg: 그림자 효과  
      */}
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm">
        <p className="text-2xl font-bold text-gray-800 mb-4">
          Tailwind CSS 실습
        </p>

        <p className="text-gray-600 mb-6">버튼을 눌러보세요!</p>

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
