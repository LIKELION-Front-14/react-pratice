import React from 'react';
import '../App.css'; 

export default function Story() {
  return (
    <div className="story-page-container">
      
      <div className="story-header">
        <h1 className="story-main-title">📖 스토리 페이지</h1>
      </div>

      
      <div className="story-card-grid">
        <div className="story-card">
          <div className="story-icon">🍗</div>
          <h3>바삭함의 비밀</h3>
          <p>저희 치킨은 튀김옷의 두께를 황금 비율로 유지하여, 시간이 지나도 처음 튀겼을 때의 바삭함을 그대로 유지합니다.</p>
        </div>

        <div className="story-card">
          <div className="story-icon">🔥</div>
          <h3>화끈한 불맛</h3>
          <p>지코바 스타일의 숯불 양념치킨은 진짜 숯불 향을 입혀 매콤달콤하면서도 중독성 있는 자극적인 맛을 선사합니다.</p>
        </div>

        <div className="story-card">
          <div className="story-icon">🌱</div>
          <h3>신선한 재료</h3>
          <p>매일 아침 배송되는 100% 국내산 냉장 닭고기만을 사용하여 육즙이 살아있고 부드러운 식감을 자랑합니다.</p>
        </div>
      </div>

      
      <div className="story-notice-box">
        <h4>💡 개발자 한마디</h4>
        <p>
          "맛있는 치킨을 더 멋지게 소개해보고자 컴포넌트와 라우터를 나누어 페이지를 구현했습니다. 
          운영진 여러분 오늘 저녁은 치킨 어떠신가요?"
        </p>
      </div>
    </div>
  );
}