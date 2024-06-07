import React, { useState } from "react"
import Img_day from "../assets/images/bg-day.jpg"
import Img_snow_mountain from "../assets/images/bg-snow-mountain.png"
import Img_sunset from "../assets/images/bg-sunset.jpg"
import Img_night from "../assets/images/bg-night.jpg"
import Img_aroura from "../assets/images/bg-aroura.jpg"
import Icon_programming from "../assets/images/icon-programming.png"
import Icon_photographer from "../assets/images/icon-photographer.png"
import Icon_hi from "../assets/images/icon-hi.png"
import Icon_click from "../assets/images/icon-click.png"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import { HiOutlineCursorClick } from "react-icons/hi";

const PhotoStyles = styled.div`
    // border: solid 1px black;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundcolor};

    h1, h2 {
        text-align: center;
        margin: 10px 0px;
        color: white;
        animation: slidein 1s;
    }
    
    h2 {
        color: red;
        animation: slidein 1s forwards;
        animation-delay: 1s;
        opacity: 0;
    }

    @keyframes slidein {
        from {
            transform: translateY(-50%);
            opacity: 0;
        }
        to{
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
        cursor: pointer;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        animation: fadein 1s forwards;
        animation-delay: 2s;
        filter: saturate(${(props) => props.photocolor}%);
        transition: filter 1s;
    }
    .active {
        border: solid 1px white;
    }

    @keyframes fadein{
        from {
            opacity: 0;
        }
        to {
            opacity: 0.8;
        }
    }
    .photos:hover{
        opacity: 1;
    }

    .swiper {
        padding-top: 6rem;
        width: 90%
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

    button{
        margin-top: 20px;
        width: 50%;
        font-size: 2rem;
    }

    @media only screen and (max-width: 768px){
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

`

export default function PhotoSelect ( { photoSelected, setphotoSelected } ) {
    SwiperCore.use([Navigation]);
    const photos = [Img_day, Img_snow_mountain, Img_sunset, Img_night, Img_aroura]

    const [activePhoto, setActivePhoto] = useState("")
    const [backgroundColor, setBackgroundColoro] = useState("#111")
    const [photoColor, setPhotoColor] = useState(100)
    const [btnText, setBtnText] = useState("I like it!")

    const selectPhoto = () => {
        // console.log(activePhoto)

        if (activePhoto) {
            setPhotoColor(0)
            setBtnText("Extracting its Color ...")
    
            setTimeout(() => {
                setphotoSelected(activePhoto)
            }, 2500);
        } else {
            setBtnText("Choose a photo by clicking it!")
        }
    }

    const activePhotoHandler = (e) => {
        e.target.name == activePhoto ? setActivePhoto(null) : setActivePhoto(e.target.name)
    }

  return (
    <>
        <PhotoStyles backgroundcolor={backgroundColor} photocolor={photoColor}>
            <h1>Hi<img className="icon" src={Icon_hi}/>, This is Joe Yang, a <span>Web Developer<img className="icon" src={Icon_programming}/></span> and <span>Photographer<img className="icon" src={Icon_photographer}/></span>.</h1>
            <h2>Choose a photo you like with a click!<img className="icon" src={Icon_click}/></h2>
            {/* <img src={Img_day} />
            <img src={Img_snow_mountain} />
            <img src={Img_sunset} />
            <img src={Img_night} />
            <img src={Img_aroura} /> */}

            <Swiper spaceBetween={10} slidesPerView={1} navigation>
                {photos.map((photo, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img className={`photos ${activePhoto ? "active" : ""}`} name={index} src={photo} onClick={activePhotoHandler}/>
                    </SwiperSlide>
                    
                );
            })}
            </Swiper>
          <button type="button" onClick={selectPhoto}>{btnText}</button>
        </PhotoStyles>
    </>
  )
};

