import React from "react";
import ScrollSection from "./ScrollSection";
import styled from "styled-components";

const MidMessage = styled.p`
  padding: 0 1rem;
  font-size: 2rem;
  color: #888;
  strong {
    color: rgb(29, 29, 31);
  }
`;

const ConvasCaption = styled.p`
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #888;
`;

const Section3 = () => {
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

export default Section3;
