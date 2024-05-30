import React from 'react';
import styled from 'styled-components';
import HeroVideo from "../assets/video/hero-page-video.mp4"
import Button from './Button';
import PText from './PText';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 900px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    opacity: 1;
    z-index: 1;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--text-2);
    }
  }
  .hero__video {
    max-width: 1200px;
    width: 100%;
    height: 600px;
    margin: 0;
    // border: 2px solid var(--text-1);
    opacity: 0.5;
    z-index: -3;
  }
  .video{
    width: 90%;
  }
  .hero__info {
    position: relative;
    margin-top: -18rem;
    opacity: 1;
    z-index: 1;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    width: 50px;
  }
  .hero__social {
    left: 20px;
    bottom: 18%;
  }
  .hero__scrollDown {
    right: 20px;
    bottom: 45%;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          height: 2rem;
          // transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__video {
      height: 200px;
    }
    .video{
      width: 100%
    }
    .hero__info {
      margin-top: 2rem;
    }
    .hero__social {
      left: 0px;
      bottom: 0%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection({
  greeting = 'Hello, This is',
  name = 'Joe Yang',
  description = 'A freelance web developer who loves creating new experience for the users.',
  offsetY
}) {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>{greeting}</span>
            <span className="hero__name">{name}</span>
          </h1>
          <div className="hero__video">
            {/* <img src={HeroImg} alt="" /> */}
            {/* <video className="video" src={HeroVideo} autoPlay muted loop></video> */}
          </div>
          <div className="hero__info">
            <PText>{description}</PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__social" style={{transform: `translateY(${offsetY * 0.5}px)`}}>
            <div className="hero__social__indicator">
              <p>Follow</p>
              <LiaLongArrowAltDownSolid/>
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tzuhungyang/"
                    target="_blank"
                    rel="noreferrer"
                  ><FaLinkedin /></a>
                </li>
                <li>
                  <a
                    href="https://github.com/EchoOuO"
                    target="_blank"
                    rel="noreferrer"
                  ><IoLogoGithub /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <LiaLongArrowAltDownSolid/>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
