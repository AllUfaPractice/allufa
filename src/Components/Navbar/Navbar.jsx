import React, { Component } from "react";
import { NavbarStyle } from "./Navbar.styled";
import Logo from "../../Images/ALLUFA_logo_5.png";


class Navbar extends React.Component{
  render(){
    return(
      <NavbarStyle>
      <div className="cont">
        <a href="#">
          <img
            className="logo"
            src="https://s3-alpha-sig.figma.com/img/8d81/7b92/11ff1cf6c4eb279de5d70e411fc0a528?Expires=1687737600&Signature=o1WtmdOitjuDHSmF4vo54E7FrzHDFrH9Gr9BSATbraK94CwmCVh-Zp15b0x9dCLAcSMStzshAx8cBy~y5xyH3Vi7dw41Yf2YwEbqVXqQxb~FXMUtvq0fYHaexOUQewCn82rscuZRd75R2g3PHY7CWzK4~XUTlCWIwqJDJuBj4ZEgIKsCqnh~p0tP2WeQRwW7T2CV2dsYsynKugkgd-7GuWrmbE42r5Gb-MqmQfYXRg2ElSJ9ZvqtyLRjTo-GhiYk67CG~9xwer7JmdWx~iXQDlbe0BMAP-LnB5Y2FqimwKnJoDs3u7FrywcFX~6ACR7r4jI6bqHsXvkW-Q9Jt3gEjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </a>
        <div className="InformationLink">
          <a href="https://allufa.ru/">
            <p className="NavbarLink">Наш сайт</p>
          </a>

          <div className="Products">
            <p className="NavbarLink">
              Наши продукты
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 12 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d="M12 11L6 5l-6 6h12z"></path>
              </svg>
            </p>
            <div className="ProductsContDB">
              <div className="ProductsCont">
                <p className="ProductsName">Детки БУМ!</p>
                <p className="ProductsName">Детки БУМ!</p>
                <p className="ProductsName">Детки БУМ!</p>
                <p className="ProductsName">Детки БУМ!</p>
                <p className="ProductsName">Детки БУМ!</p>
                <p className="ProductsName">Детки БУМ!</p>
                <p className="ProductsName">Детки БУМ!</p>
                <p className="ProductsName">Детки БУМ!</p>
                <p className="ProductsName">Детки БУМ!</p>
                <p className="ProductsName">Детки БУМ!</p>
              </div>
            </div>
          </div>

          <p className="NavbarLink">О нас</p>
        </div>
        <div className="ico">
          {/* WhatsUp */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
          {/* Telegram */}
          <a href="https://t.me/vsyaufa">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 496 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
          </svg>
          </a>
          {/* VK */}
          <a href="https://vk.com/allufa_ru">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 576 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"></path>
          </svg>
          </a>
          {/* YT */}
          <a href="https://www.youtube.com/@allufa_ru/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </a>
        </div>
      </div>
    </NavbarStyle>
    )
  }
}
export default Navbar;
