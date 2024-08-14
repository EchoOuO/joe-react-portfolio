import React from "react";
import { MdCode } from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";
import { GrHostMaintenance } from "react-icons/gr";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
      text-align: center;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What I will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="Creating interactive, and user-friendly websites/web applications."
          />
          <ServicesSectionItem
            icon={<SlScreenSmartphone />}
            title="Responsive Design"
            desc="Making websites capable of delivering a consistent user experience across different devices and screen sizes."
          />
          <ServicesSectionItem
            icon={<GrHostMaintenance />}
            title="Support"
            desc="Providing technical support for applications and performing regular maintenance."
          />
          {/* <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          /> */}
          {/* <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui. "
          /> */}
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
