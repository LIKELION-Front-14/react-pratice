import React from 'react';
import '../App.css'; 

export default function Menu() {
  
  const chickenMenus = [
    { id: 1, name: '황금 올리브 후라이드', desc: '설명이 필요없는 내 마음 속 1등 히히', price: '18,000원' },
    { id: 2, name: '또래오래 양념치킨', desc: '달콤 매콤한 특제 소스로 버무린 중독성 갑 양념치킨', price: '19,000원' },
    { id: 3, name: 'BHC 뿌링클', desc: '남녀노소 노인 아이 어른까지 모두가 찾는 그 맛...!!', price: '19,500원' },
    { id: 4, name: '지코바 숯불 양념치킨', desc: '치밥의 대명사 최소 공기밥 2개 자극적인 불 맛과 닭다리살의 만남 ', price: '20,000원' },
  ];

  return (
    <div className="menu-container">
      
      <h1 className="menu-title">🍗 최고의 치킨 메뉴</h1>
      
      
      <div className="menu-grid">
      
        {chickenMenus.map((menu) => (
          <div key={menu.id} className="menu-card">
          
            <h3 className="menu-name">{menu.name}</h3>
            <p className="menu-desc">{menu.desc}</p>
            <span className="menu-price">{menu.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}