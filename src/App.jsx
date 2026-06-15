import {useState} from 'react';
import { create } from 'zustand';

const useWindowStore = create((set) => ({
    darkMode: true,
    language: 'english',

    setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    setLanguage: (setLang) => set({ language: setLang }),
}));


export default function App() {
    const darkMode = useWindowStore((state) => state.darkMode);
    const language = useWindowStore((state) => state.language);
    const setDarkMode = useWindowStore((state) => state.setDarkMode);
    const setLanguage = useWindowStore((state) => state.setLanguage);

    const windowStyle={
        backgroundColor: darkMode ? '#222222' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
        padding: '50px',
        height: '100vh'
    };

    return (
        <div style={windowStyle}>
            <h1>{language === 'english' ? 'Hello' : '안녕하세요'}</h1>
            <div>
                <button onClick={setDarkMode}>다크모드 변경</button>
            </div>
            <br />
            <div>
                <button onClick={() => setLanguage('korean')}>한국어</button>
                <button onClick={() => setLanguage('english')}>English</button>
            </div>
        </div>
    );
}
