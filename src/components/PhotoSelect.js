import React, { useRef, useState } from "react";
import Img_day from "../assets/images/bg-day.jpg";
import Img_snow_mountain from "../assets/images/bg-snow-mountain.png";
import Img_sunset from "../assets/images/bg-sunset.jpg";
import Img_night from "../assets/images/bg-night.jpg";
import Img_aroura from "../assets/images/bg-aroura.jpg";
import Icon_programming from "../assets/images/icon-programming.png";
import Icon_photographer from "../assets/images/icon-photographer.png";
import Icon_hi from "../assets/images/icon-hi.png";
import { TfiHandPointDown } from "react-icons/tfi";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const PhotoStyles = styled.div`
  // border: solid 1px black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundcolor};

  h1,
  h2 {
    text-align: center;
    margin: 10px 0px;
    color: white;
    // animation: slidein 1s;
  }

  h2 {
    font-size: 2rem;
    color: red;
    // animation: slidein 1s forwards;
    // animation-delay: 1s;
    // opacity: 0;
  }

  @keyframes slidein {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  span {
    font-style: italic;
    font-size: 2.3rem;
    color: yellow;
  }

  .icon {
    margin: 0px 10px;
    width: 30px;
    height: 30px;
  }

  .photos {
    width: 55%;
    height: auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    // opacity: 0;
    // animation: fadein 1s forwards;
    // animation-delay: 2s;
    filter: saturate(${(props) => props.photocolor}%);
    transition: filter 1s;
  }
  .active {
    border: solid 1px white;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
  // .photos:hover {
  //   opacity: 1;
  // }

  .swiper {
    padding-top: 6rem;
    width: 90%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    left: 50%;
    top: 30px;
    transform: translateX(-90%);
    color: white;
    border-radius: 8px;
  }
  .swiper-button-next {
    transform: translateX(-10%);
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

  .likebtn__text {
    color: black;
  }

  .likebtn {
    margin-top: 20px;
    position: relative;
    width: 50%;
    padding: 5px 15px;
    font-size: 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    overflow: hidden;
    background-color: white;
    z-index: 1;
  }

  .likebtn::before {
    content: "";
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: yellow;
    transition: width 0.75s;
    z-index: -1;
  }

  .likebtn:hover::before {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    .icon {
      width: 30px;
      height: 30px;
    }
    .swiper {
      width: 95%;
    }
    .photos {
      width: 95%;
    }
  }
`;

export default function PhotoSelect({
  swiperNextButtonHandler,
  swiperPrevButtonHandler,
  theme_idx,
  setIsPhotoSelected,
}) {
  SwiperCore.use([Navigation]);
  const photos = [
    Img_day,
    Img_snow_mountain,
    Img_sunset,
    Img_night,
    Img_aroura,
  ];

  const [backgroundColor, setBackgroundColor] = useState("#111");
  const [photoColor, setPhotoColor] = useState(100);
  const [btnText, setBtnText] = useState("I like this one!");

  const selectPhoto = () => {
    // console.log(activePhoto)

    setPhotoColor(0);
    setBtnText("Extracting its Color ...");

    setTimeout(() => {
      setIsPhotoSelected(true);
      sessionStorage.setItem("theme index", theme_idx);
    }, 2500);
  };

  return (
    <>
      <PhotoStyles backgroundcolor={backgroundColor} photocolor={photoColor}>
        <h1>
          Hi
          <img className="icon" alt="handshake" src={Icon_hi} />, This is Joe
          Yang. A{" "}
          <span>
            Web Developer
            <img className="icon" alt="computer" src={Icon_programming} />
          </span>{" "}
          and{" "}
          <span>
            Photographer
            <img className="icon" alt="camera" src={Icon_photographer} />
          </span>
          .
        </h1>
        <h2>Choose a photo you like!</h2>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          onNavigationPrev={swiperPrevButtonHandler}
          onNavigationNext={swiperNextButtonHandler}
        >
          {photos.map((photo, index) => {
            return (
              <SwiperSlide key={index}>
                <img alt="" className="photos" name={index} src={photo} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button type="button" onClick={selectPhoto} className="likebtn">
          <p className="likebtn__text">{btnText}</p>
        </button>
      </PhotoStyles>
    </>
  );
}
