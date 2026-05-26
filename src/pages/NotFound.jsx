// src/pages/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h2 style={{ fontSize: '3rem', margin: '0' }}>404</h2>
      <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '10px' }}>페이지를 찾을 수 없습니다.</p>
      <button 
        onClick={() => navigate('/')}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        홈으로 이동
      </button>
    </div>
  );
}

export default NotFound;