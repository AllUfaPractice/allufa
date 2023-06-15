import styled, { css } from "styled-components";

export const NavbarStyle = styled.a`
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-decoration: none;
  }
  .cont {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    background-color: rgba(0,0,0,0.6);
    padding: 20px 0px 0 0px;
    justify-items: center;
    align-items: center;
    position: fixed;
    width: 100%;
  }
  .logo {
    width: 120px;
    height: 80px;
  }
  .InformationLink {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .NavbarLink {
    color: rgb(229, 229, 229);
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    padding: 31px 0;
  }
  .NavbarLink :hover{
    color: White;
  }
  .ProductsContDB{
    display: none;
  }
  .Products:hover .ProductsContDB{
    display: block;
  }
  .ProductsCont {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    color: white;
    font-weight: 600;
    position: fixed;
    height: 280px;
    width: 350px;
    padding-bottom:20px;
    background-color: rgba(0, 30, 13, 0.8);
    border: 1px solid white;
    border-radius: 0 0  30px 30px;
  }

  .NavbarLink svg {
    margin-left: 3px;
  }
  .ico {
    display: grid;
    grid-template-columns: repeat(4,1fr);
  }
  .ico svg {
    color: black;
    background-color: white;
    border: solid gray 0.5px;
    padding: 2px;
    border-radius: 50%;
    font-size: 20px;
    margin: 0 5px;
    cursor: pointer;
  }
`;
