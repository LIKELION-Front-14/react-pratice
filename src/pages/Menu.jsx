import styled from 'styled-components';
import cheeseCake from '../assets/cheesecake.jpg';
import latte from '../assets/cafelatte.jpg';
import americano from '../assets/americano.jpg';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: translateY 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: cover;
  border-top-left-radius: 15px; 
  border-top-right-radius: 15px;
`;

const CardInfo = styled.div`
  padding: 20px;
  h3 { margin: 10px 0; color: #5D4037; }
  .price { color: #8B4513; font-weight: bold; font-size: 1.2rem; }
  .desc { color: #795548; font-size: 0.9rem; line-height: 1.5; }
`;

export default function Menu() {
  const items = [
    { name: "시그니처 아메리카노", price: "3,000원", desc: "깊고 진한 커피 풍미를 느낄 수 있는 아이스 아메리카노 ", type: "Coffee", image: americano },
    { name: "카페 라떼", price: "3,500원", desc: "진한 에스프레소에 부드러운 우유가 어우러진 고소한 카페라떼", type: "Coffee", image: latte },
    { name: "촉촉한 클래식 치즈케이크", price: "5,500원", desc: "진한 크림치즈 풍미를 담아 스팀으로 천천히 구워 더욱 촉촉하고 부드러운 클래식 치즈케이크", type: "Bakery", image: cheeseCake }
  ];
  return (
    <div>
      <h2 style={{fontSize: '2rem'}}>메뉴</h2>
      <CardGrid>
        {items.map((item, i) => (
          <Card key={i}>
            <CardImage src={item.image} alt={item.name} />
            <CardInfo>
              <span>{item.type}</span>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="desc">{item.desc}</p>
            </CardInfo>
          </Card>
        ))}
      </CardGrid>
    </div>
  );
}