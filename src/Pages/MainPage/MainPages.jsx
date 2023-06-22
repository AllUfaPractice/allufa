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
  FourInfoTextStyle,
  PartnersStyle,
} from "./MainPages.styled";
//Components
import TVLiveButton from "../../Components/Buttons/TVLiveButton/TVLiveButton";
import MainCarousel from "../../Components/Carousel/MainCarousel";
import Partners from "../../Components/Ticker/TickerPartners";
//NPM
import { useMediaQuery } from "@mui/material";

const MainPage = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isNotebook = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    // LargeDesktop={isLargeDesktop} Desktop={isDesktop} Notebook={isNotebook} Tablet={isTablet} Mobile={isMobile}
    <MainPageStyle>
      <MainPageFirstSlide
        LargeDesktop={isLargeDesktop}
        Desktop={isDesktop}
        Notebook={isNotebook}
        Tablet={isTablet}
        Mobile={isMobile}
      >
        <UTPStyle
          LargeDesktop={isLargeDesktop}
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <h2>Реклама на ВСЮ УФУ</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </UTPStyle>
        <MainPageTVLiveButtonStyle
          LargeDesktop={isLargeDesktop}
          Desktop={isDesktop}
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <TVLiveButton />
        </MainPageTVLiveButtonStyle>
      </MainPageFirstSlide>

      <TwoInfoStyle Mobile={isMobile}>
      <p
          className="TitlePhone"
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          Почему нас выбирают
        </p>
        <p
          className="Title"
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          Почему
        </p>
        <InfoContFirstStyle
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <p className="num">1</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </InfoContFirstStyle>

        <InfoContSecondStyle
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="num">2</p>
        </InfoContSecondStyle>
        <p
          className="Title"
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          Нас
        </p>
        <p
          className="Title"
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          Выбирают
        </p>
        <InfoContFirstStyle
          Notebook={isNotebook}
          Tablet={isTablet}
          Mobile={isMobile}
        >
          <p className="num">3</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </InfoContFirstStyle>
      </TwoInfoStyle>

      <ThreeInfoStyle Desktop={isDesktop} Notebook={isNotebook} Tablet={isTablet} Mobile={isMobile}>
        <ThreeInfoTextStyle Desktop={isDesktop} Notebook={isNotebook} Tablet={isTablet} Mobile={isMobile}>
          <TitleStyle Tablet={isTablet} Mobile={isMobile}>Кратко о наших предложениях</TitleStyle>
          <MainCarousel></MainCarousel>
        </ThreeInfoTextStyle>
      </ThreeInfoStyle>

      <FourInfoTextStyle Tablet={isTablet} Mobile={isMobile}>
        <TitleStyle Tablet={isTablet} Mobile={isMobile}>Наши партнеры</TitleStyle>
        <PartnersStyle>
          <Partners></Partners>
        </PartnersStyle>
      </FourInfoTextStyle>
    </MainPageStyle>
  );
};

export default MainPage;
