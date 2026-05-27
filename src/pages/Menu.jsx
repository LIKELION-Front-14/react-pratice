// src/pages/Menu.jsx
import "./Menu.css";
import MenuItem from "../components/MenuItem";
import am from "../assets/am.jpg";
import cc from "../assets/cc.jpg";
import lt from "../assets/lt.jpg";

export default function Menu() {

    const Item = ({ image, text, description }) => {
    return (
      <div className="Item">
        <div className="Image">
          <img src={image} />
        </div>
        <div className="Text">{text}</div>
        <div className="Description">{description}</div>
      </div>
    );
  };

  const menuData = [
  {
    image: am,
    text: "아메리카노",
    description: "아메리카노입니다."
  },
  {
    image: cc,
    text: "카푸치노",
    description: "카푸치노입니다."
  },
  {
    image: lt,
    text: "라떼",
    description: "라떼입니다."
  },
];

  return (
    <div className="Frame">
      <div className="Container">
        {menuData.map((item) => (
          <Item image={item.image} text={item.text} description={item.description} />
        ))}
      </div>
    </div>
  );
}