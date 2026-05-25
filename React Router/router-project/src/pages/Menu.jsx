import { useState } from "react";
import "../styles/Menu.css";
import auheungBlack from "../assets/americano.png";
import tiramissuLatte from "../assets/tiramisu.png";
import monsterX from "../assets/monster.png";
import bomBomBom from "../assets/spring.png";
import googleCloudCoconutLatte from "../assets/cloud.png";
import darkChocoLatte from "../assets/choco.png";
import dubaiJjonk from "../assets/dubai.png";
import anagButterDduk from "../assets/butter.png";


const menuItems = [
  {
    category: "SIGNATURE",
    image: auheungBlack,
    name: "어흥 롱블랙",
    englishName: "auheung Black",
    price: "5,500",
    desc: "아메리카노 좋아 좋아 좋아",
    tag: "BEST",
    color: "#3b1f0e",
  },
  {
    category: "SIGNATURE",
    image: tiramissuLatte,
    name: "티라미수 라떼",
    englishName: "tiramissu Latte",
    price: "6,000",
    desc: "티라미숙해 티라미수해~",
    tag: "HOT",
    color: "#7b4f2e",
  },
  {
    category: "SIGNATURE",
    image: monsterX,
    name: "Monster 엑스",
    englishName: "monster X",
    price: "6,500",
    desc: "차갑게 즐기는 몬스터 시그니처.",
    tag: "COLD",
    color: "#1a3a5c",
  },
  {
    category: "SEASONAL",
    image: bomBomBom,
    name: "봄봄봄",
    englishName: "bom bom bom",
    price: "7,000",
    desc: "벚꽃 시즌 한정. ",
    tag: "NEW",
    color: "#8b4a6b",
  },
  {
    category: "NON-COFFEE",
    image: googleCloudCoconutLatte,
    name: "구글 클라우드 코코넛 라떼",
    englishName: "Google cloud coconut latte",
    price: "6,500",
    desc: "구름 위를 걷는 듣한 느낌의 행복함",
    tag: "",
    color: "#2d5a27",
  },
  {
    category: "NON-COFFEE",
    image: darkChocoLatte,
    name: "어두운 초콜릿 라떼",
    englishName: "Dark Choco Latte",
    price: "6,500",
    desc: "벨기에산 다크 초콜릿으로 만든 진하고 달콤한 핫초코. 카카오 70% 이상.",
    tag: "",
    color: "#3a1a0a",
  },
  {
    category: "FOOD",
    image: dubaiJjonk,
    name: "두쫀크",
    englishName: "Dubai쫀k",
    price: "4,500",
    desc: "두크크",
    tag: "",
    color: "#c4832a",
  },
  {
    category: "FOOD",
    image: anagButterDduk,
    name: "앙! 버터떡",
    englishName: "Anag! butterDduk",
    price: "7,000",
    desc: "버터와 버터의 조합 !!!!!!!",
    tag: "BEST",
    color: "#d4a853",
  },
];

const categories = ["ALL", "SIGNATURE", "SEASONAL", "NON-COFFEE", "FOOD"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered =
    activeCategory === "ALL"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="menu-header">
        <p className="menu-eyebrow">OUR MENU</p>
        <h1 className="menu-title">likelion의 모든 메뉴</h1>
        <p className="menu-subtitle">엄선된 원두와 신선한 재료로 만든  likelion 커피의 스페셜 메뉴를 만나보세요.</p>
      </div>

      {/* Category Filter */}
      <div className="menu-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {filtered.map((item, idx) => (
          <div className="menu-card" key={idx}>
            <div className="card-top" style={{ background: item.color }}>
            <img src={item.image} alt={item.name} className="card-img" />
              {item.tag && <span className="card-tag">{item.tag}</span>}
              <span className="card-category">{item.category}</span>
            </div>
            <div className="card-body">
              <h3 className="card-name">{item.name}</h3>
              <p className="card-english">{item.englishName}</p>
              <p className="card-desc">{item.desc}</p>
              <div className="card-footer">
                <span className="card-price">₩{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
