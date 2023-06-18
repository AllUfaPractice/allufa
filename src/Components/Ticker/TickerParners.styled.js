import styled from "styled-components";

export const TickerStyle = styled.div`

  display: flex;
  width: 200%;
  animation: ticker 7s linear infinite;
  justify-content: space-around;

  .ImgCont{
    padding: 0 50px;
  }
  p{

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
  }
  .ArtImg {
    height: 120px;
    width: 120px;
  }
  .BashImg {
    height: 140px;
    width: 140px;

  }
  .RosKIMg {
    height: 80px;
    width: 300px;
  }
`;
