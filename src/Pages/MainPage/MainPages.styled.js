import styled, { css } from "styled-components";

export const MainPageStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
  }
    display:grid;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    min-height: 265px;
    height:100%;
    background-image: url("https://sun9-40.userapi.com/impg/n7Qf_qMtkQHm-oCHlKqKzuj_OY2fmIyzG6UZ5g/WrksLHgQqKY.jpg?size=1280x366&quality=95&sign=3a6aa2543689eb5353a68817a1b79600&type=album");
    background-repeat: no-repeat;
    background-size: 100%;
    align-items:center;
    justify-items:center;

.cont-text{
  margin: 0 30px;
}    
  p{
    color: white;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
  }

  @media screen and (max-width: 945px){
    min-height: 200px;
    p{
      font-size:20px;
    }
  }
  @media screen and (max-width: 700px){
    min-height: 140px;
    p{
      font-size:15px;
    }
  }
  @media screen and (max-width: 500px){
    min-height: 80px;
    p{
      font-size:10px;
    }
  }
`;

