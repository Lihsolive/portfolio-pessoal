import { Container, Col, Row } from "react-bootstrap";

import logo from "../../assets/img/logo.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import webIcon from "../../assets/icons/web-icon.svg";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="aligin-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/">
                <img src={linkedinIcon} alt="LinkedIn Icon" />
              </a>
              <a href="/">
                <img src={githubIcon} alt="GitHub Icon" />
              </a>
              <a href="/">
                <img src={webIcon} alt="Web Icon" />
              </a>
            </div>
            <p>Copyright © 2023 Liliam Oliveira. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
