import React from "react";
import ScrollSection from "./ScrollSection";
import styled from "styled-components";
import { MessageContainer } from "./MessageContainer";

const CustomMessageContainer = styled(MessageContainer)`
  p {
    font-size: 3.5rem;
  }
`;

const DescriptionContainer = styled.p`
  font-size: 1.2rem;
  color: #888;
  padding: 0 1rem;

  strong {
    float: left;
    margin: 0.2em;
    font-size: 3rem;
    color: rgb(29, 29, 31);
  }
`;

const Description = () => {
  return (
    <DescriptionContainer>
      <strong>보통 스크롤 영역</strong>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit
      doloremque delectus provident autem laborum voluptatum. Itaque quaerat
      voluptates eaque a qui distinctio amet. Quod ipsam aperiam ut id
      accusantium?
    </DescriptionContainer>
  );
};

const Message = () => {
  return (
    <CustomMessageContainer>
      <p>
        <small>편안한 촉감</small>
        입과 하나가 되다
      </p>
    </CustomMessageContainer>
  );
};

const DescriptionMessage = styled.div`
  width: 50%;
  font-weight: bold;
`;

const Pin = styled.div`
  width: 1px;
  height: 100px;
  background: rgb(29, 29, 31);
`;

const Section2 = () => {
  return (
    <>
      <ScrollSection>
        <Description />
      </ScrollSection>

      <ScrollSection>
        <Message />
        <DescriptionMessage>
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성 요소를, 우리는 이를
            하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
            AirMug Pro를 만들었습니다. 입에 뭔가 됐다는 감각은 어느새 사라지고
            오롯이 당신과 음료만 남게 되죠.
          </p>
          <Pin></Pin>
        </DescriptionMessage>
        <DescriptionMessage>
          <p>
            디자인 앤 퀄리티 오브 스웨텐,<br></br>메이드 인 차이나
          </p>
          <Pin></Pin>
        </DescriptionMessage>
      </ScrollSection>
    </>
  );
};

export default Section2;
