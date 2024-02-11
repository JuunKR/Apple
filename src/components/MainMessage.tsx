import styled from "styled-components";

export const MainMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  height: 3em;
  font-size: 2.5rem;
  p {
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
  }
  small {
    display: block;
    margin-bottom: 0.5em;
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 4vw;
  }
`;
