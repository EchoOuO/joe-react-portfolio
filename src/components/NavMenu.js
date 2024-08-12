import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";
import { TbSunset2 } from "react-icons/tb";
import { SiCoffeescript } from "react-icons/si";
import { GiNightSleep, GiHiking } from "react-icons/gi";
import { ReactComponent as Icon_aroura } from "../assets/images/aroura.svg";
import { LuMousePointerClick } from "react-icons/lu";

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--bg-1);
  ul {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--bg-2);
      }
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--text-1);
      outline: none;
    }
    .active {
      color: var(--text-2);
      font-weight: 600;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  .theme-icon {
    width: auto;
    height: auto;
    display: inline-block;
    position: absolute;
    right: 2%;
    top: 0px;
  }
  .theme-text {
    margin-bottom: 5px;
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--bg-2);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
      .theme-icon {
        display: block;
        position: relative;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
`;

export default function NavMenu({ theme, iconThemeHandler }) {
  const [showNav, setShowNav] = useState(false);

  const changeThemeIcon = () => {
    switch (theme) {
      default:
        return <SiCoffeescript width={"600px"} cursor={"pointer"} />;
      case "day":
        return <SiCoffeescript width="30px" cursor={"pointer"} />;
      case "snow_mountain":
        return <GiHiking width="30px" cursor={"pointer"} />;
      case "aroura":
        return (
          <Icon_aroura width="25px" fill="var(--text-2)" cursor={"pointer"} />
        );
      // set fill to control color of svg
      case "sunset":
        return <TbSunset2 width="30px" cursor={"pointer"} />;
      case "night":
        return <GiNightSleep width="30px" cursor={"pointer"} />;
    }
  };

  return (
    <NavStyles>
      {/* mobile menu icon */}
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      {/* menu items */}
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
        <div className="theme-icon" onClick={iconThemeHandler}>
          <p className="theme-text">Theme: </p>
          {changeThemeIcon()}
        </div>
      </ul>
    </NavStyles>
  );
}
