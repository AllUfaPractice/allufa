import styled, { css } from "styled-components";

export const MainPageStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
    color: white;
    font-weight: 600;
    text-decoration: none;
  }
`;
export const OneInfoStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
  }
  .cont{
    display: grid;
    grid-template-rows:1fr 0.33fr;
    align-items: center;
    justify-items: center; 
    width: 100%;
    height: 750px;
    background-image: url('https://sun9-38.userapi.com/impg/d1FHKKu4wEEEIG0Wq_sOawZC35VKY1yCxdVq1w/xdESDdsy_Ts.jpg?size=1280x720&quality=95&sign=a1d1c4ae6345a93919e8c1b2aeb615a8&type=album' );
    background-repeat: no-repeat;
    background-size: 100%;
  }
  h2{
    text-align: center;
    font-size: 56px;
    padding: 20px;
  }
  .InfoText{
    text-align: center;

  }
  .TV{
    background-color:rgba(0, 30, 13, 0.8);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 35px;

  }
  .TVText{
    text-align: center;
    padding: 15px;
  }
`;
export const TwoInfoStyle = styled.a`
 * {
    margin: 0;
    padding: 0;
    color: white;
    font-weight: 600;
  }
  .cont{
    display:grid;
    grid-template-columns: 0.6fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    background-color: rgb(27,85,52);
    padding: 70px 0;

  }
  .WhyWe{
    font-size: 56px;
    text-align: center;
  }
  .WhyWeCont{
    display: flex;
    background-color: white;
    align-items: center;
    border-radius: 20px 0 0 20px;
  }
  .NumCont{
    background-color: rgb(0,30,13);
    border-radius: 15px;
    width: 50px;
    height: 50px;
  }
  .Num{
    color: white;
    font-size: 20px;
    margin: 18px;
  }
  .Text{
    color: black;

  }

`;
