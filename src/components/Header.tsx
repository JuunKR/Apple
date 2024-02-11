import React from "react";
import styled from "styled-components";

const GlobalNav = styled.nav`
  height: 44px;
  padding: 0 1rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
  }
`;

const LocalNav = styled.nav`
  height: 52px;
  border-bottom: 1px solid #ddd;
  padding: 0 1rem;

  ul {
    display: flex;
    align-items: center;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    a:not(:first-child) {
      margin-left: 2em;
      font-size: 0.8rem;
    }
  }
`;

const ProductName = styled.a`
  margin-right: auto;
  font-size: 1.4rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <header>
      <GlobalNav>
        <ul>
          <a href="#">Rooms</a>
          <a href="#">Ideas</a>
          <a href="#">Stores</a>
          <a href="#">Contact</a>
        </ul>
      </GlobalNav>
      <LocalNav>
        <ul>
          <ProductName href="#">AirMug Pro</ProductName>
          <a href="#">개요</a>
          <a href="#">제품사양</a>
          <a href="#">구입하기</a>
        </ul>
      </LocalNav>
    </header>
  );
};

export default Header;
