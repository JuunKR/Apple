import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  color: white;
  background: darkorange;
`;

const Footer = () => {
  return <FooterContainer>2020, 1분코딩</FooterContainer>;
};

export default Footer;
