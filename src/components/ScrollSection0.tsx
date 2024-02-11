import React from "react";
import { styled } from "styled-components";
import { MainMessage } from "./MainMessage";

const Section0Container = styled.section`
  padding-top: 50vh;
  font-size: 4rem;
  text-align: center;
  @media (min-width: 1024px) {
    h1 {
      font-size: 9vw;
    }
  }
`;

interface IMessage {
  messages: { message1: string; message2: string }[];
}

const Messages = ({ messages }: IMessage) => {
  return (
    <>
      {messages.map(({ message1, message2 }, index) => (
        <MainMessage key={index}>
          <p>
            {message1}
            <br />
            {message2}
          </p>
        </MainMessage>
      ))}
    </>
  );
};

const ScrollSection0 = () => {
  const messages = [
    { message1: "온전히 빠져들게 하는", message2: "최고급 세라믹" },
    { message1: "주변 맛을 느끼게 해주는", message2: "주변 맛 허용 모드" },
    { message1: "온종일 편안한", message2: "맞춤형 손잡이" },
    { message1: "새롭게 입가를", message2: "찾아온 매혹" },
  ];

  return (
    <Section0Container>
      <h1>AirMug Pro</h1>
      <Messages messages={messages} />
    </Section0Container>
  );
};

export default ScrollSection0;
