import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

// ⭐️ 전체 화면을 덮는 최상위 컨테이너
const AppWrapper = styled.div`
  background-color: #FAF3E0; /* 따뜻한 연베이지 배경 */
  color: #4E342E;            /* 진한 갈색 텍스트 */
  min-height: 100vh;         /* 화면 전체 높이 채우기 */
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 20px 40px;
  background: #6F4E37; // 커피 메인 컬러 (진갈색)
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Logo = styled.h1`
  color: #FDF5E6;
  margin: 0;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  color: #FDF5E6; 
  font-weight: 400;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #D2B48C;
  }

  &.active {
    color: #D2B48C;            
    font-weight: 700;          
    border-bottom: 2px solid #D2B48C; 
  }
  
`;

const Footer = styled.footer`
  padding: 30px;
  background: #4E342E;
  color: #D2B48C;
  text-align: center;
  font-size: 0.9rem;
  margin-top: auto; 
`;

const Main = styled.main`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

export default function Layout() {
  return (
    <AppWrapper>
      <Header>
        <Logo>Coffee Brown</Logo>
        <Nav>
          <StyledNavLink to="/" end>홈</StyledNavLink>
          <StyledNavLink to="/menu">메뉴</StyledNavLink>
          <StyledNavLink to="/story">스토리</StyledNavLink>
          <StyledNavLink to="/login">로그인</StyledNavLink>
        </Nav>
      </Header>

      <Main>
        <Outlet />
      </Main>

      <Footer>
        © 2026 Coffee Brown. All rights reserved.
      </Footer>
    </AppWrapper>
  );
}