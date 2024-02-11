import React from "react";
import ScrollSection from "./ScrollSection";
import styled from "styled-components";

const Description = styled.p`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1.2rem;
  color: #888;
  padding: 0 1rem;

  strong {
    float: left;
    margin: 0.2em;
    font-size: 3rem;
    color: rgb(29, 29, 31);
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
    strong {
      font-size: 6rem;
    }
  }
`;

const ScrollSection1 = () => {
  return (
    <ScrollSection>
      <Description>
        <strong>보통 스크롤 영역</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit
        doloremque delectus provident autem laborum voluptatum. Itaque quaerat
        voluptates eaque a qui distinctio amet. Quod ipsam aperiam ut id
        accusantium?
      </Description>
    </ScrollSection>
  );
};

export default ScrollSection1;
