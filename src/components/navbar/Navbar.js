import React, { useState } from "react";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import "./navbar.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link
          className="logoLink"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="desktopMenuListItem"
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Education
          </Link>
        </div>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} alt="" className="desktopMenuImg" />
          Contact Me
        </button>
        {/* ---------------------------------------------------------------------------------------------------------- */}
        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Education
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
