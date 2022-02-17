import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Icon = styled(AiOutlineHeart)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 69;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 40px 0 rgba(0, 0, 0, 0.2),
    0 20px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
`;
export const ImgContainer = styled.div``;
export const Img = styled.img``;

export const TextContainer = styled.div`
  text-align: left;
`;

export const TextInfo = styled.div`
  padding: 15px;
`;
export const TextMiddle = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const TextAbout = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
`;

export const TextEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px 20px 20px;
`;

export const Span = styled.span`
  color: black;
  font-weight: 800;
`;
export const TextContent = styled.p`
  padding: 0 15px;
`;
export const TextAboutMe = styled.div`
  display: flex;
`;
export const TextTitle = styled.h1``;
export const TextSecTitle = styled.h3``;
export const Text = styled.p``;
export const Photo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: gray
    url("https://images.pexels.com/photos/1362480/pexels-photo-1362480.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
    no-repeat center / 100%;
`;
