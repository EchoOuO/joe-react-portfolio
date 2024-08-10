import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-page-img.jpg";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 15rem 0 10rem 0;
  span {
    color: var(--text-3);
    text-decoration: underline;
    font-weight: 700;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--bg-2);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    color: var(--text-2);
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__buttons__container {
    display: flex;
    gap: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--text-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    color: var(--text-3);
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .right {
      img {
        width: 70%;
      }
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Joe Yang (Tzu-Hung).</span>
              </p>
              <h2 className="about__heading">Web developer,</h2>
              <div className="about__info">
                <PText>
                  who comes from Taiwan, a beautiful island nation.
                  <br />
                  <br />I am a enthusiastic <span>web developer</span> with a
                  passion for creating engaging and functional websites and web
                  application, continuously learning to expand my skills through
                  hands-on experience.
                  <br />
                  <br />
                  With 4.5 years of experience as a senior engineer in
                  semiconductor industry, I am experienced in problem-solving,
                  teamwork, independently managing projects and achieving the
                  goals of team.
                  <br />
                  <br />
                  Also, I'm a <span>photographer</span> who specializes in
                  landscape & travel photography.
                </PText>
              </div>
              <div className="about__buttons__container">
                <Button
                  btnText="My resume"
                  btnLink="https://drive.google.com/file/d/1C1J92KQrIkvU-Eb4c1oQqyFtEaTUkdgY/view?usp=sharing"
                  target="_blank"
                />
                <Button
                  btnText="My photos"
                  btnLink="https://www.flickr.com/photos/echo_/"
                  target="_blank"
                />
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="profile" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>
              <AboutInfoItem
                title="Front-end"
                items={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "jQuery",
                  "React",
                  "Next.js",
                  "Bootstrap",
                  "Tailwind CSS",
                  "REST API",
                ]}
              />
              <AboutInfoItem
                title="Back-end"
                items={["PHP", "Python", "Flask", "MySQL"]}
              />
              <AboutInfoItem
                title="Soft Skills"
                items={[
                  "Attention to detail",
                  "Problem-solving",
                  "Teamwork",
                  "Communication",
                  "Empathy",
                  "Continuous learning",
                  "Self-management",
                  "Adaptability",
                ]}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Working Experiences</h1>
              <AboutInfoItem
                title="2024-Present"
                items={["Front-end engineer at Dougal Technologies Inc."]}
                text="(Canada/USA)"
              />
              <AboutInfoItem
                title="2019-2024"
                items={["Research and Development Engineer at TSMC"]}
                text="(Taiwan)"
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="Collage"
                items={["Tamwood International College (Canada)"]}
                text=" -- Web Development diploma"
              />
              <AboutInfoItem
                title="University"
                items={["National Tsing Hua University (Taiwan)"]}
                text=" -- Chemical Engineering"
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
