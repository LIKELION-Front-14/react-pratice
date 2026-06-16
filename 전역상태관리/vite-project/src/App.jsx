import { useState } from "react";
import { create } from "zustand";

// 1. 저장소(Store) 만들기: 다크모드 상태(isDark)와 언어 상태(lang) 추가
const useUserStore = create((set) => ({
  isDark: true, // 초기값 다크모드 켜짐
  lang: "en",   // 초기값 영어
  
  toggleDarkMode: () => set((state) => ({ isDark: !state.isDark })),
  setLanguage: (newLang) => set({ lang: newLang }),
}));

// 2. 상단 텍스트를 보여주는 컴포넌트 (언어 상태에 따라 인사말 변경)
function Profile() {
  const lang = useUserStore((state) => state.lang);
  return <h1 style={{ fontSize: "2rem", margin: "0 0 20px 0" }}>{lang === "ko" ? "안녕하세요" : "Hello"}</h1>;
}

// 3. 모드 변경 및 언어 변경 버튼 컴포넌트
function EditProfile() {
  const { toggleDarkMode, setLanguage } = useUserStore();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <button 
        onClick={toggleDarkMode} 
        style={{ width: "fit-content", padding: "2px 6px", fontSize: "11px", cursor: "pointer" }}
      >
        다크모드 변경
      </button>
      <div>
        <button onClick={() => setLanguage("ko")} style={{ padding: "2px 6px", fontSize: "11px", cursor: "pointer" }}>한국어</button>
        <button onClick={() => setLanguage("en")} style={{ padding: "2px 6px", fontSize: "11px", cursor: "pointer" }}>English</button>
      </div>
    </div>
  );
}

// 4. 메인 화면 (다크모드 상태에 따라 배경색과 글자색 변경)
export default function App() {
  const isDark = useUserStore((state) => state.isDark);

  return (
    <div style={{ 
      backgroundColor: isDark ? "#222" : "#fff", 
      color: isDark ? "#fff" : "#222", 
      padding: "40px",
      minHeight: "400px",
      borderRadius: "20px",
      fontFamily: "sans-serif"
    }}>
      <Profile />
      <EditProfile />
    </div>
  );
}