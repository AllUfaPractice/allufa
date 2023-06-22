import styled from "styled-components";
import { css } from "styled-components";

export const FooterFirstFloorStyle = styled.div`
  * {
    margin: 0;
  }
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: #001e0d ;
  ${(props) => props.largedesktop && css``}
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) => props.tablet && css``}
  ${(props) => props.mobile && css``}
`;

export const FooterFirstFloorStyleSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ${(props) => props.largedesktop && css``}
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) => props.tablet && css``}
  ${(props) => props.mobile && css``}
`;

export const FooterFirstFloorStyleSocialLogo = styled.p`
  display: flex;
  font-size: 40px;
  ${(props) => props.largedesktop && css``}
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) => props.tablet && css``}
  ${(props) => props.mobile && css``}
`;
export const FooterFirstFloorStyleSocialTitle = styled.p`
  margin-left: 10px;
  ${(props) => props.largedesktop && css``}
  ${(props) => props.desktop && css``}
  ${(props) => props.notebook && css``}
  ${(props) => props.tablet && css``}
  ${(props) => props.mobile && css``}
`;
