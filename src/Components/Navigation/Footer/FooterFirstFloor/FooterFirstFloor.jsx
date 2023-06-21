import React from "react";
import { FooterFirstFloorStyle, FooterFirstFloorStyleSocial, FooterFirstFloorStyleSocialLogo, FooterFirstFloorStyleSocialTitle } from "./FooterFirstFloor.styled";
import { Button, useMediaQuery } from "@mui/material";
import { FaWhatsapp, FaVk, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

const FooterFirstFloor = () => {
    const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));
    const isNotebook = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));
    const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  
    return (
      <FooterFirstFloorStyle largedesktop={isLargeDesktop} desktop={isDesktop} notebook={isNotebook} tablet={isTablet} mobile={isMobile}>
        {/* WhatsApp */}
        <Button>
            <FooterFirstFloorStyleSocial>
                <FooterFirstFloorStyleSocialLogo>
                    <FaWhatsapp/>
                </FooterFirstFloorStyleSocialLogo>
                <FooterFirstFloorStyleSocialTitle>
                    WhatsApp
                </FooterFirstFloorStyleSocialTitle>
            </FooterFirstFloorStyleSocial>
        </Button>
        
        {/* VK */}
        <Button href="https://vk.com/allufa_ru">
            <FooterFirstFloorStyleSocial>
                <FooterFirstFloorStyleSocialLogo>
                    <FaVk/>
                </FooterFirstFloorStyleSocialLogo>
                <FooterFirstFloorStyleSocialTitle>
                    ВКонтакте
                </FooterFirstFloorStyleSocialTitle>
            </FooterFirstFloorStyleSocial>
        </Button>

        {/* Telegram */}
        <Button>
            <FooterFirstFloorStyleSocial>
                <FooterFirstFloorStyleSocialLogo>
                    <FaTelegramPlane/>
                </FooterFirstFloorStyleSocialLogo>
                <FooterFirstFloorStyleSocialTitle>
                    Telegram
                </FooterFirstFloorStyleSocialTitle>
            </FooterFirstFloorStyleSocial>
        </Button>
       
        {/* YouTube  */}
        <Button href="https://www.youtube.com/channel/UCJDJaiMm9F_7wwmUc4JhJUQ">
            <FooterFirstFloorStyleSocial>
                <FooterFirstFloorStyleSocialLogo>
                    <FaYoutube/>
                </FooterFirstFloorStyleSocialLogo>
                <FooterFirstFloorStyleSocialTitle>
                    YouTube
                </FooterFirstFloorStyleSocialTitle>
            </FooterFirstFloorStyleSocial>
        </Button>
        
      </FooterFirstFloorStyle>
    );
  };
  export default FooterFirstFloor;
  