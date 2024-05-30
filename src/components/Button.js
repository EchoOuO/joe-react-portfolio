import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: var(--btn-bg);
    padding: 0.7em 2em;
    border: 2px solid var(--btn-bg);
    border-radius: 8px;
    display: inline-block;
    color: var(--btn-text);
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  target
}) {
  return (
    <ButtonStyle className="button-wrapper">
      <Link target={target} className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
