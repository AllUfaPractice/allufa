import styled, { css } from "styled-components";

export const MainInformationStyle = styled.a`
  *{
    margin:0;
    padding:0;
  }
`;
export const  FisrtInformationStyle = styled.a`
*{
    margin:0;
    padding:0;
  }
  .cont{
    margin: 30px 80px;
  }
  .UpDawn {
    background-color: rgb(0, 167, 93);
    text-align: center;
    width: 80px;
    height: 30px;
    border-radius: 15px;
    margin: 0px auto;
  }
  svg {
    height: 30px;
    width: 30px;
  }
  h3{
    text-align:center;
    font-size:25px;
    font-weight: bold;
  }
  .MainTextCont{
    margin: 30px 0;
  }
  .TextCont{
    display:grid;
    grid-template-columns:0.7fr 1fr;
    margin: 30px 0;
    align-items:center;
    justify-items: center;
  }
  .SecondTextCont{
    display:grid;
    grid-template-columns:1fr 0.7fr;
    margin: 60px 0;
    align-items:center;
    justify-items: center;
  }
  .num{
    text-align: center;
    border: solid rgb(0, 167, 93) 2px;
    border-radius: 50%;
    height:20px;
    padding:10px 0;
    width:40px;
    font-size:18px;
    font-weight:600;
  }
  .text{
    font-size:18px;
    font-weight: 600;
  }

`;
export const SecondInformationStyle = styled.a`
*{
  margin: 0;
  padding:0;
}
.cont{

}
h3{
  text-align:center;
    font-size:25px;
    font-weight: bold;
}
.grid{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
}
.SecondInformationCont{
  height: 500px;
  width: 350px;
  margin: 25px;
  background-color:grey;
  border-radius: 30px;
}

`;
