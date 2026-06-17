import { create } from "zustand";

const useAppStore = create((set) => ({
    darkMode: false,
    language: "ko",

    toggleDarkMode: () =>
        set((state)=> ({
            darkMode: !state.darkMode,
        })),
    changeLanguage: (newLanguage) =>
        set({
            language: newLanguage,
        }),
}));

const text = {
    ko: "안녕하세요",
    en: "Hello",
};

function HomePage() {
    const darkMode = useAppStore((state) => state.darkMode);
    const language = useAppStore((state) => state.language);
    const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);
    const changeLanguage = useAppStore((state) => state.changeLanguage);

    return (
        <div className={`min-h-[650px] rounded-lg p-8 ${darkMode? "bg-[#202020] text-white" : "bg-white text-black"}`}>
            <h1 className="mb-6 text-3xl font-bold">
                {text[language]}
            </h1>
            <button onClick={toggleDarkMode} 
            className="mb-4 block rounded border border-gray-400 bg-gray-100 px-2 py-1 text-sm text-black">
            다크모드 변경
            </button>
            <div>
            <button onClick={() => changeLanguage("ko")}
            className="rounded-l border border-gray-400 bg-gray-100 px-2 py-1 text-sm text-black"
            >
            한국어
            </button>
            
            <button onClick={() => changeLanguage("en")}
            className="rounded-r border border-gray-400 bg-gray-100 px-2 py-1 text-sm text-black"
            >
            English
            </button>
            </div>
        </div>
    );
}

export default HomePage;