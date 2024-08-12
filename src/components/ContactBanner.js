import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";

const ContactBannerStyles = styled.div`
  padding-bottom: 5rem;
  .contactBanner__wrapper {
    background-color: var(--bg-2);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
    color: var(--text-2);
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have projects in your mind?</PText>
          <h3 className="contactBanner__heading">We can realize it!</h3>
          <Button btnText="Contact me" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
