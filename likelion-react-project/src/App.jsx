import { useState } from "react";
import styled from "styled-components";

// 1. 스타일이 적용된 컴포넌트 정의 (Backtick ` 사용)
const StyledButton = styled.button`
 /* Props를 읽어와서 동적으로 스타일 적용 */
 background: ${(props) => props.bgColor || "#6a11cb"};
 color: white;
 padding: 15px 30px;
margin: 10px;
border: none;
border-radius: 10px;
font-weight: bold;
cursor: pointer;
transition: all 0.3s ease;

/* 가상 선택자도 컴포넌트 안에서 해결 */
&:hover {
background: ${(props) => props.hoverColor || "#2575fc"};
transform: scale(1.1);
}
`;

const Message = styled.h1`
font-size: 1.5rem;
color: ${(props) => props.textColor || "#333"};
text-align: center;
`;

export default function App() {
 const [color, setColor] = useState("#333");

 return (
<div style={{ textAlign: "center" }}>
  {/* 컴포넌트를 마치 HTML 태그처럼 사용하면서 Props 전달 */}
  <StyledButton
    bgColor="#ff6a00"
    hoverColor="#ee0979"
    onClick={() => setColor("#ff6a00")}
  >
    주황색
  </StyledButton>

  <StyledButton bgColor="#00c6ff" onClick={() => setColor("#00c6ff")}>
    파랑색
  </StyledButton>

  <Message textColor={color}>색깔 바꾸기~~!!!</Message>
</div>
 );
}