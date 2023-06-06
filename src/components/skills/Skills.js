import { Container, Row, Col } from "react-bootstrap";
// import { Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import javascript from "../../assets/img/javascript.svg";
import typescript from "../../assets/img/typescript.svg";
import java from "../../assets/img/java.svg";
import mysql from "../../assets/img/mysql.svg";
import node from "../../assets/img/nodejs.svg";
import react from "../../assets/img/react.svg";
import spring from "../../assets/img/spring.svg";
import html from "../../assets/img/html5.svg";
import css from "../../assets/img/css3.svg";
import bootstrap from "../../assets/img/bootstrap.svg";

import colorSharp from "../../assets/img/color-sharp.png";

import "./Skills.css";

export const Skills = () => {
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
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Tecnologias</h2>
              <p>
                Ao longo dos meus estudos, adquiri conhecimentos e continuo me
                desenvolvendo nas seguintes tecnologias:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
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

              {/* <div className="stats-github">
                <Image
                  src="https://camo.githubusercontent.com/7698af53daeddb9b663204e491c74c8ea52bcd632a9569aae639765fa7918821/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d4c6968736f6c697665266c61796f75743d636f6d70616374266c616e67735f636f756e743d37267468656d653d6d69646e696768742d707572706c65"
                  className="img-responsive"
                />
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        alt="background-skills"
        src={colorSharp}
      />
    </section>
  );
};
