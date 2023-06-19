import React from "react";
//Styles
import {
  TitleStyle,
  MainPageStyle,
  MainPageFirstSlide,
  TwoInfoStyle,
  UTPStyle,
  MainPageTVLiveButtonStyle,
  InfoContFirstStyle,
  InfoContSecondStyle,
  ThreeInfoStyle,
  ThreeInfoTextStyle,
  PartnersStyle,
} from "./MainPages.styled";
//Components
import TVLiveButton from "../../Components/Buttons/TVLiveButton/TVLiveButton";
import MainCarousel from "../../Components/Carousel/MainCarousel";
import Partners from "../../Components/Ticker/TickerParners";
import { Title } from "@mui/icons-material";

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

        <MainPageTVLiveButtonStyle>
          <TVLiveButton />
        </MainPageTVLiveButtonStyle>
      </MainPageFirstSlide>

      <TwoInfoStyle>
        <TitleStyle>Почему</TitleStyle>
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
        <TitleStyle>Нас</TitleStyle>

        <TitleStyle>Нас выбирают</TitleStyle>
        <InfoContFirstStyle>
          <p className="num">3</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </InfoContFirstStyle>
      </TwoInfoStyle>

      <ThreeInfoStyle>
        <ThreeInfoTextStyle>
          <TitleStyle>Кратко о наших предложениях</TitleStyle>
          <MainCarousel></MainCarousel>
        </ThreeInfoTextStyle>
      </ThreeInfoStyle>
      <PartnersStyle>
        <Partners></Partners>
      </PartnersStyle>
      <div className="asd"></div>
      
    </MainPageStyle>
  );
};

export default MainPage;
