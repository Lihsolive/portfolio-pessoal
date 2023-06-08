import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

import { ProjetosCard } from "../projetos-card/ProjetosCard";
import projImg1 from "../../assets/img/acoli.png";
import projImg2 from "../../assets/img/myBlogLi.png";
import projImg3 from "../../assets/img/project-img3.png";

import projImg4 from "../../assets/img/dulceCafe.png";
import projImg5 from "../../assets/img/instatily.png";
// import projImg6 from "../../assets/img/bookflix.png";

import colorSharp2 from "../../assets/img/color-sharp2.png";

import "./Projetos.css";

export const Projetos = () => {
  const first = [
    {
      title: "Business Startup",
      description: "Design & Development",
      link: "conferir",
      linkURL: "https://myblogli.vercel.app/",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      link: "conferir",
      linkURL: "https://acoli.vercel.app/",
      imgUrl: projImg2,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   link: "conferir",
    //   linkURL: "https://acoli.vercel.app/",
    //   imgUrl: projImg3,
    // },
  ];

  const second = [
    {
      title: "Business Startup",
      description: "Design & Development",
      link: "conferir",
      linkURL: "https://myblogli.vercel.app/",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      link: "conferir",
      linkURL: "https://acoli.vercel.app/",
      imgUrl: projImg5,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   link: "conferir",
    //   linkURL: "https://acoli.vercel.app/",
    //   imgUrl: projImg6,
    // },
  ];

  const third = [];

  return (
    <section className="projeto" id="projeto">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projetos</h2>
                  <p>
                    Principais projetos desenvolvidos até o momento.
                  </p>
                  <Tab.Container id="projetos-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justfy-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Front-end</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Back-end</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {first.map((projeto, index) => {
                            return <ProjetosCard key={index} {...projeto} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {second.map((projeto, index) => {
                            return <ProjetosCard key={index} {...projeto} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Em breve.</p>
                        <Row>
                          {third.map((projeto, index) => {
                            return <ProjetosCard key={index} {...projeto} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  );
};
