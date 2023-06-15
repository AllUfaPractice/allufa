import React from "react";
//Styles
import {
  MainPageStyle,
  MainPageFirstSlide,
  TwoInfoStyle,
  UTPStyle,
  TVLiveButtonStyle,
} from "./MainPages.styled";
//Components
import Navbar from "../../Components/Navigation/Navbar/Navbar";
import TVLiveButton from "../../Components/Buttons/TVLiveButton/TVLiveButton";

const MainPage = () => {
  return (
    <MainPageStyle>
      <Navbar />

      <MainPageFirstSlide>
        <UTPStyle>
          <h2>Реклама на ВСЮ УФУ</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </UTPStyle>
        <TVLiveButtonStyle>
          <TVLiveButton className="a123" />
        </TVLiveButtonStyle>
      </MainPageFirstSlide>

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
