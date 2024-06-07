import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
  .foot__social_icons {
    display: inline-block;
    width: 40px;
    margin-right: 10px;
  }
  .foot__social_icons:hover {
    transform: translateY(-10%);
  }
`;

export default function FooterCol({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    }],
  icon
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? <Link to={item.path}>{item.title}</Link> : <a className='foot__social_icons' href={item.path} target="_blank" rel="noreferrer" >{item.icon}</a>}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
