import React from "react";
import ScrollSection from "./ScrollSection";
import styled from "styled-components";
import { MainMessage } from "./MainMessage";

const Message = styled(MainMessage)`
  p {
    font-size: 3.5rem;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 6vw;
    }
    small {
      font-size: 1.5vw;
    }
  }
`;

const DescriptionMessage = styled.div`
  width: 50%;
  font-weight: bold;
  @media (min-width: 1024px) {
    width: 20%;
  }
`;

const Pin = styled.div`
  width: 1px;
  height: 100px;
  background: rgb(29, 29, 31);
`;

const ScrollSection2 = () => {
  return (
    <ScrollSection>
      <Message>
        <p>
          <small>편안한 촉감</small>
          입과 하나가 되다
        </p>
      </Message>

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
  );
};

export default ScrollSection2;
