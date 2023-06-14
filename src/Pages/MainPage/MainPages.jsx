import React from "react";
import { MainPageStyle, OneInfoStyle, TwoInfoStyle } from "./MainPages.styled";

const MainPage = () => {
  return (
    <MainPageStyle>
      <OneInfoStyle>
        <div className="cont">
          <div>
            <h2>Реклама на ВСЮ УФУ</h2>
            <p className="InfoText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <div className="TV">
              <a href="https://allufa.ru/TV-online/">
                <p className="TVText">Прямой эфир</p>
              </a>
            </div>
          </div>
        </div>
      </OneInfoStyle>
      <TwoInfoStyle>
        <div className="cont">
          <p className="WhyWe">Почему </p>
          <div className="WhyWeCont">
            <div className="NumCont">
              <p className="Num">1</p>
            </div>
            <p className="Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
         
        </div>
      </TwoInfoStyle>
    </MainPageStyle>
  );
};

export default MainPage;
