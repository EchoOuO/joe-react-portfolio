import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import Button from '../components/Button';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaFlickr } from "react-icons/fa";

const FooterStyle = styled.div`
  background-color: var(--bg-2);
  padding-top: 5rem;
  .footer__col1 {
    flex: 1;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--text-2);
  }
  .copyright {
    background-color: var(--bg-2);
    text-align: center;
    padding: 1rem 0;
    margin-top: 2rem;
    .para {
      margin-left: 0;
    }
  }
  .container {
    display: flex;
    gap: 3rem;
  }
  .copyright-text{
    text-align: center;
    width: 100%;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer({
  name = 'Joe Yang',
  description = 'A freelance web developer who is eager to continuously learn new technologies and ideas.',
  phone = '(+1)236-865-1317',
  email = 'thyang.joe@gmail.com',
  location = 'Richmond / Vancouver, British Columbia, Canada'
}) {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col2">
          <FooterCol
            heading="Nevigation"
            links={[
              {
                type: 'Link',
                title: 'Home',
                path: '/',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>

        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/tzuhungyang/',
                icon: <FaLinkedin/> 
              },
              {
                title: 'GitHub',
                path: 'https://github.com/EchoOuO',
                icon: <IoLogoGithub/>
              },
              {
                title: 'Flickr',
                path: 'https://www.flickr.com/photos/echo_/',
                icon: <FaFlickr />
              }
            ]}
          />
        </div>

        <div className="footer__col1">
          {/* <h1 className="footer__col1__title">{name}</h1> */}
          {/* <PText>{description}</PText> */}
          <Button btnText="My resume" btnLink="https://drive.google.com/file/d/1xOCSWzMDjAkarpnkMb7yD9AckcobwrH_/view?usp=sharing" target="_blank" />
        </div>


        {/* <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: phone,
                path: 'tel:+88012312',
              },
              {
                title: email,
                path: `mailto:${email}`,
              },
              {
                title: location,
                path: 'https://www.google.com/maps/place/Richmond,+BC/@49.1698724,-123.1846441,12z/data=!4m6!3m5!1s0x54867599f4ef4d3d:0x6a5024adba02fab5!8m2!3d49.1665898!4d-123.133569!16zL20vMDE3OXEw?entry=ttu',
              },
            ]}
          />
        </div> */}
        
      </div>
      <div className="copyright">
        <div className="container">
          <p className='copyright-text'>© 2024 - Joe Yang | Web Developer and Photographer</p>
        </div>
      </div>
    </FooterStyle>
  );
}
