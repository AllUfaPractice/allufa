import styled from "styled-components";


export const TickerStyle = styled.div`

  display: flex;
  width: 200%;
  animation: ticker 7s linear infinite;
  justify-content: space-around;

  .ImgCont{
    display: flex;
    align-items: center;
    padding: 0 50px;
    white-space: nowrap;
  }
  @keyframes ticker {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-70%);
    }
  }

  img{
    margin: 30px;
    display: block;
    margin: 0;
    padding: 20px 20px;
    margin: 0 40px;
  }
  .ArtImg {
    /* height: 140px;
    width: 140px; */
    width: 15%;
  }
  .BashImg {
    /* height: 180px;
    width: 180px; */
    width: 200%;
  }
  .RosKIMg {
    /* height: 80px;
    width: 300px; */
    width: 50%;
  }
 `;
