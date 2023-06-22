import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";

import logo from "../../assets/img/logo.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import webIcon from "../../assets/icons/web-icon.svg";

import "./NavBar.css";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

/* para travar o scroll quando o menu é aberto */
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

/* para mudar o ícone do navbar quando o menu é aberto */
  return (
    <button
      ref={ref}
      onClick={(e) => {
        setIsOpen(!isOpen);
        onClick(e);
      }}
      className={`navbar-toggler ${isOpen ? "open" : ""}`}
    >
      {children}
    </button>
  );
});


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  //coloca uma cor de background no Navbar quando rolar a página
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle as={CustomToggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#timeline"
              className={
                activeLink === "timeline" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("timeline")}
            >
              Timeline
            </Nav.Link>

            <Nav.Link
              href="#tech"
              className={
                activeLink === "tech" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Tecnologias
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projetos")}
            >
              Projetos
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <Nav.Link
              href="#connect"
              className={
                activeLink === "connect" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("connect")}
            >
              <button className="btn-connect">
                <span>Conectar</span>
              </button>
            </Nav.Link>

            <div className="social-icon">
              <a href="https://www.linkedin.com/in/liliamoliveira/">
                <img src={linkedinIcon} alt="" />
              </a>
              <a href="https://github.com/Lihsolive">
                <img src={githubIcon} alt="" />
              </a>
              <a href="https://liliamoliveira.myportfolio.com/">
                <img src={webIcon} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
