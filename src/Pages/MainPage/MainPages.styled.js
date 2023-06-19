import styled from "styled-components";

export const MainPageStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    color: white;
  }
`;

export const MainPageFirstSlide = styled.a`
  * {
    margin: 0;
    padding: 0;
  }

  display: grid;
  grid-template-rows: 1fr 0.33fr;
  background-image: url("https://sun9-38.userapi.com/impg/d1FHKKu4wEEEIG0Wq_sOawZC35VKY1yCxdVq1w/xdESDdsy_Ts.jpg?size=1280x720&quality=95&sign=a1d1c4ae6345a93919e8c1b2aeb615a8&type=album");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 1080px;
  
`;

export const TVLiveButtonStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 200px;
`;

export const UTPStyle = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "PT Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    letter-spacing: 0.1em;
    text-align: center;
    padding: 20px;
  }
  p {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }
`;

export const TwoInfoStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
    color: white;
    font-weight: 600;
  }
  .cont {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    background-color: rgb(27, 85, 52);
    padding: 70px 0;
  }
  .WhyWe {
    font-size: 56px;
    text-align: center;
  }
  .WhyWeCont {
    display: flex;
    background-color: white;
    align-items: center;
    border-radius: 20px 0 0 20px;
  }
  .NumCont {
    background-color: rgb(0, 30, 13);
    border-radius: 15px;
    width: 50px;
    height: 50px;
  }
  .Num {
    color: white;
    font-size: 20px;
    margin: 18px;
  }
  .Text {
    color: black;
  }
`;
