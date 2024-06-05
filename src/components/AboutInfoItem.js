import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
    padding: 1rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
    flex-wrap: wrap;
  }
  .item {
    background-color: var(--bg-2);
    padding: 1rem;
    border-radius: 8px;
    white-space: nowrap;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
  text
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
            { text ? <PText>{text}</PText> : null }
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
