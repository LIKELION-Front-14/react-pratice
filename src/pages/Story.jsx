import React from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  text-align: center;
  line-height: 1.8;
  color: #4E342E;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const MainTitle = styled.h2`
  font-size: 1.6rem;
  color: #3E2723;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  color: #6F4E37;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const BeanCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.03);
  margin-bottom: 40px;
`;

const BeanType = styled.div`
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BeanName = styled.h4`
  font-size: 1.2rem;
  color: #8B4513;
  margin: 0 0 10px 0;
`;

const BeanDesc = styled.p`
  color: #795548;
  margin: 0;
  font-size: 0.95rem;
`;

const InfoSection = styled.div`
  margin-top: 50px;
  border-top: 1px solid #D7CCC8;
  padding-top: 40px;
`;

const InfoTitle = styled.h4`
  color: #5D4037;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const InfoText = styled.p`
  color: #666;
  margin: 0 0 25px 0;
`;

export default function Story() {
  return (
    <StoryContainer>
      <MainTitle>
        "커피 브라운의 커피는 엄선된 최상급 스페셜티 블렌드 원두로 만들어집니다"
      </MainTitle>

      <SubTitle>취향에 맞는 원두로 선택할 수 있습니다.</SubTitle>
      
      <BeanCard>
        <BeanType>
          <BeanName>시그니처 로스트</BeanName>
          <BeanDesc>
            산뜻한 미디엄 바디감과 은은한 시트러스의 맛과 향에<br />
            달콤한 베리의 여운이 감도는 원두
          </BeanDesc>
        </BeanType>

        <BeanType>
          <BeanName>다크 로스트</BeanName>
          <BeanDesc>
            입안 가득 묵직한 바디감과 다크초콜릿의 진한 맛과 향에<br />
            깊고 짙은 여운이 감도는 원두
          </BeanDesc>
        </BeanType>
      </BeanCard>

      <InfoSection>
        <InfoTitle>오시는 길</InfoTitle>
        <InfoText>경기도 수원시 권선구 대학로 123, 1층</InfoText>
        
        <InfoTitle>운영 시간</InfoTitle>
        <InfoText>
          평일: 08:00 ~ 22:00<br />
          주말 및 공휴일: 10:00 ~ 21:00
        </InfoText>
      </InfoSection>
    </StoryContainer>
  );
}