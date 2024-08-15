import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/about-sec-img.jpeg";
import AboutInfoItem from "../components/AboutInfoItem";
import skills from "../assets/data/skills";

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    gap: 40px;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .aboutImg {
    width: 80%;
  }
  span {
    color: var(--text-3);
    text-decoration: underline;
    font-weight: 700;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle subheading="Who am I?" heading="About Me" />
          <br />
          <PText>
            I am a <span>web developer</span> and <span>photographer</span> from
            Taiwan, with a passion for creating visually appealing and
            functional digital experiences.
            <br />
            <br />
            With a strong foundation in front-end and back-end development, I
            specialize in building responsive websites and web applications that
            meet the unique needs of my clients.
          </PText>
          <AboutInfoItem title="Front-end" items={skills["Front-end"]} />
          <AboutInfoItem
            title="Back-end"
            items={["PHP", "Python", "Flask", "MySQL"]}
          />
          <div className="aboutSection__buttons">
            <Button btnText="More info." btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
