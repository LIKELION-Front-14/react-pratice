import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginBox = styled.div`
  max-width: 400px;
  margin: 100px auto;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #D7CCC8;
  border-radius: 8px;
  box-sizing: border-box;
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 12px;
  background: #6F4E37;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  color: #8B4513;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;
`;

export default function Login() {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === "guest") navigate('/', { replace: true });
    else alert("아이디가 틀립니다.");
  };

  return (
    <LoginBox>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <Input placeholder="아이디" value={id} onChange={e => setId(e.target.value)} />
        <SubmitBtn type="submit">로그인</SubmitBtn>
      </form>
      <BackBtn onClick={() => navigate(-1)}>뒤로 가기</BackBtn>
    </LoginBox>
  );
}