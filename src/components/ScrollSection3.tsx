import React from "react";
import ScrollSection from "./ScrollSection";
import styled from "styled-components";

const MidMessage = styled.p`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  font-size: 2rem;
  color: #888;
  strong {
    color: rgb(29, 29, 31);
  }
  @media (min-width: 1024px) {
    font-size: 4vw;
  }
`;

const ConvasCaption = styled.p`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #888;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const ScrollSection3 = () => {
  return (
    <ScrollSection>
      <MidMessage>
        <strong>Retina 머그</strong>
        <br></br>
        아이디어를 광활하게 펼칠<br></br>
        아름답고 부드러운 음료 공간.
      </MidMessage>
      <ConvasCaption>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        distinctio ab dignissimos veritatis cumque esse quidem tempore, saepe,
        tenetur reiciendis expedita sunt? Veritatis ipsa delectus iusto
        recusandae totam beatae porro.
      </ConvasCaption>
    </ScrollSection>
  );
};

export default ScrollSection3;
