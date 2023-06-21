import styled from "styled-components";
import { css } from "styled-components";

export const FooterSecondFloorStyle = styled.div`
  /* display: flex;
  justify-content: space-around; */
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: rgb(31, 57, 42);
  background: linear-gradient(
    90deg,
    rgba(31, 57, 42, 1) 0%,
    rgba(27, 85, 52, 1) 50%,
    rgba(31, 57, 42, 1) 100%
  );
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) => props.tablet && css``}
  ${(props) => props.mobile && css``}
`;

export const FooterSecondFloorMenu = styled.div``;
export const FooterSecondFloorMenuLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  a{
    text-decoration: none;
    color: white;
    font-size: 24px;
    padding: 10px;
  }
`;

export const FooterSecondFloorLogo = styled.div`
  img {
    margin: 0;
    text-align: center;
    width: 300px;
  }
  p {
    font-size: 20px;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;
    color: white;
  }
`;

export const FooterSecondFloorTitle = styled.h1`
  color: white;
  text-decoration: underline;
`;

export const FooterSecondFloorText = styled.p`
  color: white;
`;

export const FooterSecondFloorContacts = styled.div`
  padding-left: 100px;
`;
