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
import TVLiveButton from "../../Components/Buttons/TVLiveButton/TVLiveButton";

const MainPage = () => {
  return (
    <MainPageStyle>
      <MainPageFirstSlide>
        <UTPStyle>
          <h2>Реклама на ВСЮ УФУ</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </UTPStyle>
        <TVLiveButtonStyle>
          <TVLiveButton />
        </TVLiveButtonStyle>
      </MainPageFirstSlide>
    </MainPageStyle>
  );
};

export default MainPage;
