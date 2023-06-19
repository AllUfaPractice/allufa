import styled from "styled-components";
import { css } from "styled-components";

export const FooterStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .grid {
    display: grid;
    grid-template-columns: 0.7fr 1fr 0.7fr;
    justify-content: center;
    background-color: rgb(0, 167, 93);
    padding: 60px 50px;
  }
  .IcoText {
    color: black;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
  }
  .ico {
    display: flex;
    justify-content: center;
  }
  .ico svg {
    color: rgb(0, 167, 93);
    font-size: 20px;
    margin: 0 10px;
    background-color: white;
    padding: 5px;
    border-radius: 4px;
  }
  ul {
    margin: 15px 0;
  }
  .InfoText {
    color: black;
    font-weight: 600;
    font-size: 12px;
  }

  .FooterImgFirst {
    width: 250px;
  }
  .FooterImgSecond {
    width: 100px;
    height: 50px;
    margin: 15px 0;
  }
  .ImgCont {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
  }

  .FooterInformationFird {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .ProducText {
    color: rgb(64, 64, 64);
    font-size: 18px;
    font-weight: 600;
  }
  @media screen and (max-width: 880px) {
    .FooterImgFirst {
      width: 180px;
    }
    .FooterImgSecond {
      width: 60px;
      height: 30px;
      margin: 15px 0;
    }
    .ProducText {
      color: rgb(64, 64, 64);
      font-size: 16px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 700px) {
    .grid {
      padding: 40px 30px;
    }
    .IcoText {
      font-size: 16px;
    }
    .ico svg {
      font-size: 17px;
      margin: 0 5px;
    }
    .InfoText {
      font-size: 10px;
    }
    .ProducText {
      font-size: 14px;
    }
    .FooterImgFirst {
      width: 140px;
    }
    .FooterImgSecond {
      margin: 10px 0;
    }
    .FooterInformationFird {
      justify-items: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 600px) {
    .FooterInformationFird {
      display: none;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0.8fr;
      padding: 30px 50px 0 50px;
    }
    .IcoText {
      text-align: center;
      margin-bottom: 10px;
    }
    ul {
      margin: 15px 0;
    }
    .InfoText {
      color: black;
      font-weight: 600;
      font-size: 12px;
      text-align: center;
    }
  }
  .ImgCont {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    height: 100%;
    margin-top: 15px;
  }
`;
