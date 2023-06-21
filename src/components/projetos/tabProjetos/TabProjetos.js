import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

import ProjetosFull from "../projetosFull/ProjetosFull";
import ProjetosFront from "../projetosFront/ProjetosFront";
import ProjetosBack from "../projetosBack/ProjetosBack";
import colorSharp2 from "../../../assets/img/color-sharp2.png";
import "./TabProjetos.css";

function TabProjetos() {
  return (
    <section className="projects" id="projects">
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
                  <h2 className="proj-title">Projetos</h2>
                  <p className="proj-subtitle">Principais projetos desenvolvidos até o momento.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
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
                          <ProjetosFull />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjetosFront />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                        <ProjetosBack />
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
      <img className="background-img-right" alt="" src={colorSharp2}></img>
    </section>
  );
}

export default TabProjetos;
