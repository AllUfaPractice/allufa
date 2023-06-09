import React from "react";
import { MainPageStyle} from "./MainPages.styled";

const MainPage = () => {
  return (
    <MainPageStyle>
      <div className="cont-text">
        <p>«Вся Уфа» — многопрофильная организация подведомственная Администрации города Уфы — столицы Республики Башкортостан</p>
      </div>
      <div className="cont-text">
        <p>Это информационный центр в который ежедневно поступают собщение от всей Уфы</p>
      </div>  
    </MainPageStyle>
  );
};

export default MainPage;
