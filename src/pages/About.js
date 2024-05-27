import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 15rem 0 10rem 0;

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
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
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
                Hi, I am <span>Joe Yang</span>
              </p>
              <h2 className="about__heading">A freelance web developer</h2>
              <div className="about__info">
                <PText>                
                  I am from Taiwan, a beautiful island nation. 
                  <br /><br />
                  I am a enthusiastic web developer with a passion for creating engaging and functional websites, continuously learning to expand my skills through hands-on experience. 
                  <br /><br />
                  With 4.5 years of experience as an engineer in semiconductor industry, I am experienced in problem-solving, teamwork, independently managing projects and achieving the goals of team.
                </PText>
              </div>
              <Button btnText="My resume" btnLink="https://drive.google.com/file/d/1xOCSWzMDjAkarpnkMb7yD9AckcobwrH_/view?usp=sharing" target="_blank" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="profile" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>
              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'React.js', 'jQuery' ,'Bootstrap']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['PHP', 'MySQL']}
              />
              <AboutInfoItem
                title="Soft Skills"
                items={['Attention to detail', 'Problem-solving', 'Teamwork', 'Communication', 'Empathy', 'Continuous learning', 'Self-management', 'Adaptability']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              <AboutInfoItem
                title="2019-2023"
                items={['Research and Development Engineer at TSMC']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="Collage"
                items={['Tamwood International College (Canada)']}
                text=" -- Web Development Co-op program"
              />
              <AboutInfoItem
                title="University"
                items={['National Tsing Hua University (Taiwan)']}
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
