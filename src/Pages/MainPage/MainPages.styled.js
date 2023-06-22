import styled from "styled-components";
import { css } from "styled-components";

// /* LDesktop */
// ${(props) => props.LargeDesktop && css`
// `}
// /* Decktop 1920 */
// ${(props) => props.Desktop && css`
// display: ;`}
// /* Notebook 1280*/
// ${(props) => props.Notebook && css``}
// /* Tablet 960*/
// ${(props) => props.Tablet && css`display:none`}
// /* Mobile 600*/
// ${(props) => props.Mobile && css`
// `}

export const MainPageStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    color: white;
    font-weight: 600;
  }
`;
export const TitleStyle = styled.p`
  font-size: 60px;
  text-align: center;

  /* Tablet 960*/
  ${(props) =>
    props.Tablet &&
    css`
      font-size: 48px;
    `}
  /* Mobile 600*/
  ${(props) =>
    props.Mobile &&
    css`
      font-size: 40px;
    `}
`;
export const MainPageFirstSlide = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  display: grid;
  grid-template-rows: 1fr 0.7fr;
  justify-items: center;
  background-image: url("https://sun9-38.userapi.com/impg/d1FHKKu4wEEEIG0Wq_sOawZC35VKY1yCxdVq1w/xdESDdsy_Ts.jpg?size=1280x720&quality=95&sign=a1d1c4ae6345a93919e8c1b2aeb615a8&type=album");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 900px;

  /* LDesktop */
  ${(props) =>
    props.LargeDesktop &&
    css`
      grid-template-rows: 1fr 0.3fr;
      height: 1080px;
    `}

  /* Decktop 1920px */
  ${(props) =>
    props.Desktop &&
    css`
      grid-template-rows: 1fr 1fr;
      align-items: end;
      height: 700px;
    `}

  /* Notebook 1280 */
  ${(props) =>
    props.Notebook &&
    css`
      grid-template-rows: 1fr 0.5fr;
      align-items: end;
      height: 500px;
    `}

  /* Tablet 960*/
  ${(props) =>
    props.Tablet &&
    css`
      grid-template-rows: 1fr 0.8fr;
      align-items: end;
      height: 330px;
    `}

  /* Mobile 600 */
  ${(props) =>
    props.Mobile &&
    css`
      grid-template-rows: 1fr 0.6fr;
      align-items: end;
      height: 180px;
    `}
`;

export const MainPageTVLiveButtonStyle = styled.div`
  display: block;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 200px;

  /* LDesktop */
  ${(props) => props.LargeDesktop && css``}

  /* Decktop 1920 */
${(props) =>
    props.Desktop &&
    css`
      margin-bottom: 30px;
    `}

/* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      margin-bottom: 50px;
    `}

/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      margin-bottom: 50px;
    `}

/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      margin-bottom: 20px;
    `}
`;
export const UTPStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "PT Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 80px;
    letter-spacing: 0.1em;
    text-align: center;
    padding: 20px;
  }
  p {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
  }

  /* LDesktop */
  ${(props) =>
    props.LargeDesktop &&
    css`
      h2 {
        font-size: 120px;
      }
      p {
        font-size: 34px;
      }
    `}

  /* Decktop 1920 */
${(props) =>
    props.Desktop &&
    css`
      h2 {
        font-size: 80px;
      }
      p {
        font-size: 32px;
      }
    `}

/* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
      h2 {
        font-size: 60px;
      }
      p {
        font-size: 28px;
      }
    `}

/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
      h2 {
        font-size: 45px;
      }
      p {
        font-size: 18px;
      }
    `}

/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      h2 {
        font-size: 24px;
        padding: 10px;
      }
      p {
        font-size: 12px;
      }
    `}
`;

export const TwoInfoStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: rgb(27, 85, 52);
  padding: 70px 0;
  align-items: center;

  .Title {
    font-size: 60px;
    text-align: center;
  }
  .TitlePhone {
    display: none;
  }
  /* Tablet 960*/
  ${(props) =>
    props.Tablet &&
    css`
      .Title {
        font-size: 48px;
      }
    `}
  /* Mobile 600*/
  ${(props) =>
    props.Mobile &&
    css`
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
      padding: 0px 0;
      .Title {
        display: none;
      }
      .TitlePhone {
        display: block;
        font-size: 40px;
        text-align: center;
      }
    `}
`;
export const InfoContFirstStyle = styled.div`
  display: flex;
  background-color: white;
  border-radius: 30px 0 0 30px;
  height: 150px;
  justify-items: center;
  align-items: center;
  margin: 40px 0;
  font-family: sans-serif;

  .num {
    font-size: 60px;
    text-align: center;
    background-color: rgb(0, 30, 13);
    padding: 5px 15px;
    width: 60px;
    border-radius: 12px;
    margin: 0 30px;
    color: white;
  }
  .text {
    font-size: 24px;
    font-family: Raleway;
    color: black;
    text-align: start;
  }
  // Notebook 1280
  ${(props) =>
    props.Notebook &&
    css`
      .num {
        font-size: 45px;
        padding: 10px 15px;
      }
      .text {
        font-size: 20px;
      }
    `}
  /* Tablet 960 */
 ${(props) =>
    props.Tablet &&
    css`
      .num {
        font-size: 45px;
        padding: 10px 15px;
      }
      .text {
        font-size: 16px;
      }
    `}
 /* Mobile 600 */
 ${(props) =>
    props.Mobile &&
    css`
      border-radius: 0px;
      height: 120px;
      margin: 0px 0;
      .num {
        font-size: 35px;
        padding: 8px 12px;
      }
      .text {
        font-size: 14px;
      }
    `}
`;
export const InfoContSecondStyle = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0 30px 30px 0;
  height: 150px;
  justify-items: center;
  align-items: center;
  margin: 40px 0;
  font-family: sans-serif;

  .num {
    font-size: 60px;
    text-align: center;
    background-color: rgb(0, 30, 13);
    padding: 5px 15px;
    width: 60px;
    border-radius: 12px;
    margin: 0 30px;
    color: white;
  }
  .text {
    font-size: 24px;
    font-family: Raleway;
    color: black;
    text-align: end;
  }

  // Notebook 1280
  ${(props) =>
    props.Notebook &&
    css`
      .num {
        font-size: 45px;
        padding: 10px 15px;
      }
      .text {
        font-size: 20px;
      }
    `}
  /* Tablet 960 */
 ${(props) =>
    props.Tablet &&
    css`
      .num {
        font-size: 45px;
        padding: 10px 15px;
      }
      .text {
        font-size: 16px;
      }
    `}
 /* Mobile 600 */
 ${(props) =>
    props.Mobile &&
    css`
      border-radius: 0px;
      height: 120px;
      margin: 15px 0;
      .num {
        font-size: 35px;
        padding: 8px 12px;
      }
      .text {
        font-size: 14px;
      }
    `}
`;

export const ThreeInfoStyle = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 1000px;
  background-color: rgb(0, 30, 13);

  /* Decktop 1920 */
  ${(props) => props.Desktop && css``}
  /* Notebook 1280*/
${(props) => props.Notebook && css``}
`;
export const ThreeInfoTextStyle = styled.div`
  /* display: grid; */
  display: none;
  grid-template-rows: 0.3fr 1fr;
  height: 800px;
  align-items: center;
  justify-items: center;

  /* Decktop 1920 */
  ${(props) => props.Desktop && css``}
`;

export const FourInfoTextStyle = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 1fr;
  height: 600px;
  background-color: rgb(27, 85, 52);
  align-items: center;
  justify-content: center;

  p {
    margin-left: 10%;
    text-align: start;
  }
  /* Tablet 960*/
  ${(props) =>
    props.Tablet &&
    css`
      height: 500px;
    `}
  /* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
      height: 400px;
    `}
`;
export const PartnersStyle = styled.div`
  overflow: hidden;
`;
