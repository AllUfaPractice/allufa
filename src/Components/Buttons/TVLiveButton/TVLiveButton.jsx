import React from "react";
import { TVLiveButtonStyle } from "./TVLiveButton.styled";
import { Button } from "@mui/material";

const TVLiveButton = () => {
  return (
    <TVLiveButtonStyle>
      <Button
        className="TVButton"
        color="primary"
        disabled={false}
        size="medium"
        variant="contained"
        href="https://allufa.ru/TV-online/"
      >
        Прямой эфир
      </Button>
    </TVLiveButtonStyle>
  );
};

export default TVLiveButton;
