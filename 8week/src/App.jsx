import React from 'react';
import useStore from './store'; // 위에서 만든 스토어 가져오기

function App() {
  // 스토어에서 전역 상태와 함수를 가져옵니다.
  const { isDarkMode, language, toggleDarkMode, setLanguage } = useStore();

  // 스타일에 적용할 다크모드 / 라이트모드 색상 정의
  const themeStyle = {
    backgroundColor: isDarkMode ? '#222222' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    minHeight: '80vh',
    padding: '40px',
    borderRadius: '12px',
    transition: 'all 0.3s ease', // 부드러운 배경 전환 효과
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>8주차 과제 (전역 상태 관리)</h2>

      {/* 테마에 따라 배경색과 글자색이 바뀌는 컨테이너 */}
      <div style={themeStyle}>
        {/* 언어 상태에 따라 다르게 렌더링 */}
        <h1 style={{ fontSize: '2.5rem', marginTop: 0 }}>
          {language === 'ko' ? '안녕하세요' : 'Hello'}
        </h1>

        {/* 다크모드 변경 버튼 */}
        <div style={{ marginBottom: '15px' }}>
          <button 
            onClick={toggleDarkMode}
            style={{ padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}
          >
            {isDarkMode ? '라이트모드 변경' : '다크모드 변경'}
          </button>
        </div>

        {/* 언어 변경 버튼 구역 */}
        <div>
          <button 
            onClick={() => setLanguage('ko')}
            style={{ 
              padding: '6px 12px', 
              cursor: 'pointer', 
              fontSize: '12px',
              fontWeight: language === 'ko' ? 'bold' : 'normal',
              marginRight: '5px'
            }}
          >
            한국어
          </button>
          <button 
            onClick={() => setLanguage('en')}
            style={{ 
              padding: '6px 12px', 
              cursor: 'pointer', 
              fontSize: '12px',
              fontWeight: language === 'en' ? 'bold' : 'normal'
            }}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;