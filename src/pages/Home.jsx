import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding-top: 100px;
`;

const WelcomeTitle = styled.h2`
  font-size: 3rem;
  color: #3E2723;
`;

const MenuButton = styled.button`
  background-color: #8B4513;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 30px;
  transition: transform 0.2s;

  &:hover {
    background-color: #6F4E37;
    transform: scale(1.05);
  }
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <WelcomeTitle>커피 브라운</WelcomeTitle>
      <p>당신의 일상에 작은 휴식을 선물합니다.</p>
      <MenuButton onClick={() => navigate('/menu')}>메뉴 보러가기</MenuButton>
    </HomeContainer>
  );
}