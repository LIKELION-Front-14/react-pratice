import "../styles/Story.css";

export default function Story() {
  return (
    <div className="story-page">
      {/* Hero */}
      <section className="story-hero">
        <div className="story-hero-content">
          <p className="story-eyebrow">OUR STORY</p>
          <h1 className="story-title">
            강 남 스 타 일
          </h1>
        </div>
      </section>

      {/* Origin */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-text-block">
            <span className="story-year">우리는</span>
            <h2 className="story-heading">강남스타일</h2>
            <p className="story-body">
              에에엥에에에
            </p>
            <p className="story-body">
              옵옵옵
            </p>
          </div>

          <div className="story-divider">
            <span>✦</span>
          </div>

          <div className="story-text-block">
            <span className="story-year">오빤</span>
            <h2 className="story-heading">강남스타일</h2>
            <p className="story-body">
              
            </p>
            <p className="story-body">
              에에에에에ㅔ에ㅔㅔ
            </p>
          </div>

          <div className="story-divider">
            <span>✦</span>
          </div>

          <div className="story-text-block">
            <span className="story-year">옵옵옵 오뻔</span>
            <h2 className="story-heading">강남스타일</h2>
            <p className="story-body">
              에 에 에 에 에 ㅇ ㅔ!
            </p>
            <p className="story-body">
              <em>착</em>
            </p>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="story-info">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>오시는 길</h3>
            <p>경기도 용인시 기흥구 강남로 40</p>
            <p className="info-sub">강남대역</p>
            <p className="info-sub">후생관 근처</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🕐</div>
            <h3>운영시간</h3>
            <div className="hours-table">
              <div className="hours-row">
                <span>월 – 금</span>
                <span>08:00 – 22:00</span>
              </div>
              <div className="hours-row">
                <span>토 – 일</span>
                <span>휴무</span>
              </div>
              <div className="hours-row holiday">
                <span>공휴일</span>
                <span>휴무</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>문의하기</h3>
            <p>02-1234-5678</p>
            <p className="info-sub">gangnam@coffee.kr</p>
            <p className="info-sub">인스타그램 DM도 환영합니다</p>
          </div>
        </div>
      </section>
    </div>
  );
}
