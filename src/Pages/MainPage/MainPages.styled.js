import styled from "styled-components";

export const MainPageStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    color: white;
    font-weight: 600;
  }
  .asd{
    height: 400px;
    background-color: blue;
  }
`;
export const TitleStyle = styled.p`
  font-size: 60px;
  text-align: center;
`;
export const MainPageFirstSlide = styled.div`
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

export const MainPageTVLiveButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 200px;
`;

export const UTPStyle = styled.div`
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

export const TwoInfoStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: rgb(27, 85, 52);
  padding: 70px 0;
  align-items: center;
`;
export const InfoContFirstStyle = styled.div`
  display: flex;
  background-color: white;
  border-radius: 30px 0 0 30px;
  height: 150px;
  justify-items: center;
  align-items: center;
  margin: 40px 0;
  font-family: sans-serif;

  .num {
    font-size: 60px;
    text-align: center;
    background-color: rgb(0, 30, 13);
    padding: 5px 15px;
    width: 60px;
    border-radius: 12px;
    margin: 0 30px;
    color: white;
  }
  .text {
    font-size: 24px;
    font-family: Raleway;
    color: black;
    text-align: start;
  }
`;
export const InfoContSecondStyle = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0 30px 30px 0;
  height: 150px;
  justify-items: center;
  align-items: center;
  margin: 40px 0;
  font-family: sans-serif;

  .num {
    font-size: 60px;
    text-align: center;
    background-color: rgb(0, 30, 13);
    padding: 5px 15px;
    width: 60px;
    border-radius: 12px;
    margin: 0 30px;
    color: white;
  }
  .text {
    font-size: 24px;
    font-family: Raleway;
    color: black;
    text-align: end;
  }
`;

export const ThreeInfoStyle = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 1000px;
  background-color: rgb(0, 30, 13);
`;
export const ThreeInfoTextStyle = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  height: 700px;
  justify-items: center;
`;

export const PartnersStyle = styled.div`
  overflow: hidden;
  border: black solid 3px;
  max-width: 60%;
  
  margin: 300px;
  background-color: rgb(27, 85, 52);
`;
