import React from "react";
import { MdOutlineBed } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";

import "./CardBStyles";
import {
  Container,
  Wrapper,
  ImgContainer,
  Img,
  TextContainer,
  TextWrapper,
  TextTitle,
  TextContent,
  TextAbout,
  Icon,
  TextMiddle,
  Text,
  Span,
  TextAboutMe,
  Photo,
  TextEnd,
  TextInfo,
  TextSecTitle,
} from "./CardBStyles";
const url =
  "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const CardB = () => {
  return (
    <Container>
      <Wrapper>
        <Icon size={30} color="#f8f8f8" />
        <ImgContainer>
          <Img src={url} />
        </ImgContainer>
        <TextContainer>
          <TextInfo>
            <Text style={{ fontWeight: "500" }}>DETACHED HOUSE · 5Y OLD</Text>
            <TextTitle>$750,000</TextTitle>
            <Text>742 Evergreen Terrace</Text>
          </TextInfo>
          <hr style={{ opacity: "0.3" }} />

          <TextMiddle>
            <MdOutlineBed size={30} color="gray" />
            <TextContent>
              <Span>3</Span> Bedrooms
            </TextContent>
            <GiBathtub size={30} color="gray" />
            <TextContent>
              <Span>2</Span> Bathrooms
            </TextContent>
          </TextMiddle>
          <hr style={{ opacity: "0.3" }} />

          <TextAbout>
            <Text
              style={{
                fontWeight: "700",
                color: "gray",
                marginBottom: "15px",
              }}
            >
              REALTOR
            </Text>
            <TextAboutMe>
              <Photo />
              <TextEnd>
                <TextSecTitle>Tiffany Heffner</TextSecTitle>
                <Text style={{ color: "gray" }}>(555) 555-4321</Text>
              </TextEnd>
            </TextAboutMe>
          </TextAbout>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default CardB;
