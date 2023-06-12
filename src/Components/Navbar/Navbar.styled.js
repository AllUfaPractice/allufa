import styled, { css } from "styled-components";

export const HeaderStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .cont {
    display: grid;
    grid-template-columns: 1fr 0.3fr;
    align-items: center;
  }
  .logo {
    height: 120px;
    width: 360px;
  }
  .ico {
    display: flex;
  }
  .ico svg {
    color: white;
    font-size: 20px;
    margin: 0 10px;
    background-color: rgb(0, 167, 93);
    padding: 5px;
    border-radius: 4px;
  }

  @media screen and (max-width: 620px) {
    .logo{
      width: 240px;
      height:80px;
    }
  }
  @media screen and (max-width: 500px) {
    .logo{
      width: 180px;
      height:60px;
    }
    .ico svg {
    font-size: 15px;
    margin: 0 5px;
    background-color: rgb(0, 167, 93);
    padding: 2px;
    border-radius: 4px;
  }
}
  
`;
export const NavbarStyle = styled.a`
* {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

    display: grid;
    grid-template-columns: 0.1fr 1fr 0.1fr;
    align-items:center;
    background-color:rgb(0,167,93);
    height:80px;
    width: 100%;
    justify-items:center;
    /* position: fixed; */
    
  svg{
    font-size:35px;
  }
  h1{
    text-align:center;
    color:white;
  }
  @media screen and (max-width: 620px) {
  h1{
    font-size: 25px;
  } 
  svg{
    margin: 0 10px;
  }
  }
  @media screen and (max-width: 500px) {
  svg{
    margin: 0 15px;
  }
  }
`;


