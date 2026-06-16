import { create } from "zustand";
import "./App.css";

const useSettingStore = create((set) => ({
  language: "en",
  darkMode: true,

  changeLanguage: (newLanguage) => set({ language: newLanguage }),
  changeDarkMode: (newDarkMode) => set({ darkMode: newDarkMode }),
}));

function App() {
  const language = useSettingStore((state) => state.language);
  const darkMode = useSettingStore((state) => state.darkMode);

  const changeLanguage = useSettingStore((state) => state.changeLanguage);
  const changeDarkMode = useSettingStore((state) => state.changeDarkMode);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>{language === "en" ? "Hello" : "안녕하세요"}</h1>

      <button onClick={() => changeDarkMode(!darkMode)}>
        다크모드 변경
      </button>


      <div>
        <button onClick={() => changeLanguage("ko")}>한국어</button>
        <button onClick={() => changeLanguage("en")}>English</button>
      </div>
    </div>
  );
}

export default App;