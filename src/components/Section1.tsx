import React from "react";
import ScrollSection from "./ScrollSection";
import { css, styled } from "styled-components";
import { MessageContainer } from "./MessageContainer";

const StyleSection1 = css`
  font-size: 4rem;
  text-align: center;
`;

const ScrollSection1 = styled(ScrollSection)`
  ${StyleSection1}
`;

interface IMessage {
  messages: { message1: string; message2: string }[];
}

const Messages = ({ messages }: IMessage) => {
  return (
    <>
      {messages.map(({ message1, message2 }, index) => (
        <MessageContainer key={index}>
          <p>
            {message1}
            <br />
            {message2}
          </p>
        </MessageContainer>
      ))}
    </>
  );
};

const Section1 = () => {
  const messages = [
    { message1: "온전히 빠져들게 하는", message2: "최고급 세라믹" },
    { message1: "주변 맛을 느끼게 해주는", message2: "주변 맛 허용 모드" },
    { message1: "온종일 편안한", message2: "맞춤형 손잡이" },
    { message1: "새롭게 입가를", message2: "찾아온 매혹" },
  ];

  return (
    <ScrollSection1>
      <h1>AirMug Pro</h1>
      <Messages messages={messages} />
    </ScrollSection1>
  );
};

export default Section1;
