import React from "react";
//Styles
import {
  MainPageStyle,
  MainPageFirstSlide,
  TwoInfoStyle,
  UTPStyle,
  MainPageTVLiveButtonStyle,
  InfoContFirstStyle,
  InfoContSecondStyle,
  ThreeInfoStyleStyle,
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
        <MainPageTVLiveButtonStyle>
          <TVLiveButton />
        </MainPageTVLiveButtonStyle>
      </MainPageFirstSlide>

      <TwoInfoStyle>
        <p>Почему </p>
        <InfoContFirstStyle>
          <p className="num">1</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </InfoContFirstStyle>

        <InfoContSecondStyle>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="num">2</p>
          
        </InfoContSecondStyle>
        <p>Нас </p>

        <p>Выбирают </p>
        <InfoContFirstStyle>
          <p className="num">3</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </InfoContFirstStyle>
      </TwoInfoStyle>

      <ThreeInfoStyleStyle>
        
      </ThreeInfoStyleStyle>


      <div className="qweewq">sdf</div>
    </MainPageStyle>
  );
};

export default MainPage;
