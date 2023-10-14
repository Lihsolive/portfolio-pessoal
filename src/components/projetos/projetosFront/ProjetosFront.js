import { Card, Row, Col } from "react-bootstrap";
import "animate.css";
// img projetos
import dulceCafe from "../../../assets/img/dulceCafe.png";
import instatily from "../../../assets/img/instatily.png";
import bookflix from "../../../assets/img/bookflix.png";
// icones overlay
import html from "../../../assets/icons/html5.svg";
import css from "../../../assets/icons/css3.svg";
import javascript from "../../../assets/icons/javascript.svg";

import "../projetosFull/ProjetosFull.css";

function ProjetosFront() {
  return (
    <section className="projetos" id="projetos">
      <Row className="card-container">
        {/* conteudo do primeiro card */}
        <Col xs={12} sm={4}>
          <Card className="custom-card m-3">
            {/* img do projeto */}
            <div className="img-container">
              <Card.Img variant="top" src={dulceCafe} alt="imagem Dulce Café" />
              {/* conteúdo overlay */}
              <div className="overlay">
                <h4 className="overlay-titulo">Tecnologias usadas:</h4>
                <div className="tech-icons">
                  <img className="tech-icons-item" src={html} alt="html" />
                  <img className="tech-icons-item" src={css} alt="css" />
                  <img className="tech-icons-item" src={javascript} alt="javascript" />
                </div>
              </div>
            </div>
            {/* conteudo do card */}
            <Card.Body>
              <Card.Title className="card-title">Dulce Café</Card.Title>
              <Card.Text className="card-description">
                Landing page para uma cafeteria fictícia.
              </Card.Text>
              {/* botoes do card */}
              <div className="buttons">
                <button className="btn-card">
                  <a href="https://github.com/Lihsolive/dulceCafe" target="blanck">
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
            {/* img do projeto */}
            <div className="img-container">
              <Card.Img variant="top" src={instatily}  alt="imagem Instatily" />
              {/* conteúdo overlay */}
              <div className="overlay">
                <h4 className="overlay-titulo">Tecnologias usadas:</h4>
                <div className="tech-icons">
                  <img className="tech-icons-item" src={html} alt="html" />
                  <img className="tech-icons-item" src={css} alt="css" />
                  <img className="tech-icons-item" src={javascript} alt="javascript" />
                </div>
              </div>
            </div>
            {/* conteudo card */}
            <Card.Body>
              <Card.Title className="card-title">Instatily</Card.Title>
              <Card.Text className="card-description">
                Página de login para uma rede social fictícia.
              </Card.Text>
              {/* botoes */}
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
            {/* img do projeto */}
            <div className="img-container">
              <Card.Img variant="top" src={bookflix}  alt="imagem Bookflix" />
              {/* conteúdo overlay */}
              <div className="overlay">
                <h4 className="overlay-titulo">Tecnologias usadas:</h4>
                <div className="tech-icons">
                  <img className="tech-icons-item" src={html} alt="html" />
                  <img className="tech-icons-item" src={css} alt="css" />
                </div>
              </div>
            </div>
            {/* conteudo card */}
            <Card.Body>
              <Card.Title className="card-title">Bookflix</Card.Title>
              <Card.Text className="card-description">
                Página para um site de livros.
              </Card.Text>
              {/* botoes */}
              <div className="buttons">
                <button className="btn-card">
                  <a href="https://github.com/Lihsolive/Bookflix"
                    target="blanck" >
                    github
                  </a>
                </button>
                <button className="btn-card">
                  <a href="https://bookflix-project.vercel.app/" target="blanck" >
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
