import React from "react";
import "./CardAStyles";
import {
  Container,
  Wrapper,
  Img,
  TextWrapper,
  TextContent,
  TextTitle,
} from "./CardAStyles";
const url =
  "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const CardA = () => {
  return (
    <Container>
      <Wrapper>
        <Img src={url} />
        <TextWrapper>
          <TextTitle>Card Grid Layout</TextTitle>
          <TextContent>
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </TextContent>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default CardA;
