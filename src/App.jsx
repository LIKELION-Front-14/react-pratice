import { useState } from "react";
import { create } from "zustand";


export const useUserStore = create((set) => ({
  isDarkMode: false,
  language: "ko", 

  setDarkMode: () =>
    set((state) => ({ isDarkMode: !state.isDarkMode })),

  setLanguage: (lang) => set({ language: lang }),
}));

// 2. 이름을 화면에 보여주는 컴포넌트
function Profile() {
  // 스토어에서 user 데이터만 가져옴
  const language = useUserStore((state) => state.language);

  return (
    <div>
      <h1>{language === "ko" ? "안녕하세요" : "Hello"}</h1>
    </div>
  );
}

// 3. 이름을 변경하는 입력창과 버튼 컴포넌트
function EditProfile() {

  const setLanguage = useUserStore((state) => state.setLanguage);
  const setDarkMode = useUserStore((state) => state.setDarkMode);

  return (
    <div>
      <button onClick={() => setDarkMode()}>다크모드 변경</button>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setLanguage("ko")}>Korean</button>
        <button onClick={() => setLanguage("en")}>English</button>
      </div>
    </div>
  );
}

// 4. 메인 화면
export default function App() {

  const isDarkMode = useUserStore((state) => state.isDarkMode);
  return (
    <div style={{ 
      padding: "20px",
      backgroundColor: isDarkMode ? "#333" : "#fff",
      color: isDarkMode ? "#fff" : "#333",
      minHeight: "100vh"
    }}>
      <Profile />
      <EditProfile />
    </div>
  );
}

