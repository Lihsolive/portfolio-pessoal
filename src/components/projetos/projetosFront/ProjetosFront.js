import { Card, Row, Col } from "react-bootstrap";
import "animate.css";

import html from "../../../assets/icons/html5-icon.svg";
import css from "../../../assets/icons/css3-icon.svg";
import javascript from "../../../assets/icons/javascript-icon.svg";

import dulceCafe from "../../../assets/img/dulceCafe.png";
import instatily from "../../../assets/img/instatily.png";
import bookflix from "../../../assets/img/bookflix.png";

import "../projetosFull/ProjetosFull.css";

function ProjetosFront() {
  return (
    <section className="projetos" id="projetos">
      <Row className="card-container">
        {/* conteudo do primeiro card */}
        <Col xs={12} sm={4}>
          <Card className="custom-card m-3">
            <div className="img-container">
              <Card.Img variant="top" src={dulceCafe} />
              <div className="overlay">
                <h4 className="overlay-titulo">Tecnologias usadas:</h4>
                <div className="tech-icons">
                  <img className="tech-icons-item" src={html} alt="" />
                  <img className="tech-icons-item" src={css} alt="" />
                  <img className="tech-icons-item" src={javascript} alt="" />
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="card-title">Dulce Café</Card.Title>
              <Card.Text className="card-description">
              Landing page para uma cafeteria fictícia.
              </Card.Text>
              <div className="buttons">
                <button className="btn-card">
                  <a
                    href="https://github.com/Lihsolive/dulceCafe"
                    target="blanck"
                  >
                    github
                  </a>
                </button>
                <button className="btn-card">
                  <a href="https://dulcecafe.vercel.app/" target="blanck">
                    demo
                  </a>
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* conteudo do segundo card */}
        <Col xs={12} sm={4}>
          <Card className="custom-card m-3">
            <div className="img-container">
              <Card.Img variant="top" src={instatily} />
              <div className="overlay">
                <h4 className="overlay-titulo">Tecnologias usadas:</h4>
                <div className="tech-icons">
                  <img className="tech-icons-item" src={html} alt="" />
                  <img className="tech-icons-item" src={css} alt="" />
                  <img className="tech-icons-item" src={javascript} alt="" />
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="card-title">Instatily</Card.Title>
              <Card.Text className="card-description">
              Página de login para uma rede social fictícia.
              </Card.Text>
              <div className="buttons">
                <button className="btn-card">
                  <a
                    href="https://github.com/Lihsolive/login-Instatily"
                    target="blanck"
                  >
                    github
                  </a>
                </button>
                <button className="btn-card">
                  <a href="https://login-instatily.vercel.app/" target="blanck">
                    demo
                  </a>
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* conteudo do terceiro card */}
        <Col xs={12} sm={4}>
          <Card className="custom-card m-3">
            <div className="img-container">
              <Card.Img variant="top" src={bookflix} />
              <div className="overlay">
                <h4 className="overlay-titulo">Tecnologias usadas:</h4>
                <div className="tech-icons">
                  <img className="tech-icons-item" src={html} alt="" />
                  <img className="tech-icons-item" src={css} alt="" />
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="card-title">bookflix</Card.Title>
              <Card.Text className="card-description">
              Página para um site de livros.
              </Card.Text>
              <div className="buttons">
                <button className="btn-card">
                  <a
                    href="https://github.com/Lihsolive/Bookflix"
                    target="blanck"
                  >
                    github
                  </a>
                </button>
                <button className="btn-card">
                  <a href="https://bookflix-project.vercel.app/" target="blanck">
                    demo
                  </a>
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}
export default ProjetosFront;
