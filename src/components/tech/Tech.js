import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import javascript from "../../assets/icons/javascript.svg";
import typescript from "../../assets/icons/typescript.svg";
import java from "../../assets/icons/java.svg";
import mysql from "../../assets/icons/mysql.svg";
import node from "../../assets/icons/nodejs.svg";
import react from "../../assets/icons/react.svg";
import spring from "../../assets/icons/spring.svg";
import html from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css3.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";

import colorSharp from "../../assets/img/color-sharp.png";

import "./Tech.css";

export const Tech = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="tech" id="tech">
      <Container>
        <Row>
          <Col>
            <div className="tech-bx">
              <h2 className="tech-title">Tecnologias</h2>
              <p className="tech-subtitle">
                Ao longo dos meus estudos, adquiri conhecimentos e continuo me
                desenvolvendo nas seguintes tecnologias:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="tech-slider"
              >
                <div className="item">
                  <img src={javascript} alt="tech" />
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <img src={typescript} alt="tech" />
                  <h5>Typescript</h5>
                </div>

                <div className="item">
                  <img src={java} alt="tech" />
                  <h5>Java</h5>
                </div>

                <div className="item">
                  <img src={mysql} alt="tech" />
                  <h5>MySQL</h5>
                </div>

                <div className="item">
                  <img src={node} alt="tech" />
                  <h5>NodeJS</h5>
                </div>

                <div className="item">
                  <img src={react} alt="tech" />
                  <h5>React</h5>
                </div>

                <div className="item">
                  <img src={spring} alt="tech" />
                  <h5>Spring</h5>
                </div>

                <div className="item">
                  <img src={html} alt="tech" />
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <img src={css} alt="tech" />
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <img src={bootstrap} alt="tech" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        alt="background-tech"
        src={colorSharp}
      />
    </section>
  );
};
