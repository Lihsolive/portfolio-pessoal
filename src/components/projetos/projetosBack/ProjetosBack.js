import { Card, Row, Col } from "react-bootstrap";
import "animate.css";

import githubIcon from "../../../assets/icons/github-icon.svg";
import projImg1 from "../../../assets/img/acoli.png";
import projImg2 from "../../../assets/img/myBlogLi.png";

import "../projetosFull/ProjetosFull.css";

function ProjetosBack() {
  return (
    <section className="projetos" id="projetos">
      <Row className="card-container">
        {/* conteudo do primeiro card */}
        <Col xs={12} sm={4}>
          <Card className="custom-card m-3">
            <div className="img-container">
              <Card.Img variant="top" src={projImg1} />
              <div className="overlay">
                <div className="text">Primeiro card</div>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* conteudo do segundo card */}
        <Col xs={12} sm={4}>
          <Card className="custom-card m-3">
            <div className="img-container">
              <Card.Img variant="top" src={projImg2} />
              <div className="overlay">
                <h4 className="titulo">Tecnologias</h4>
                <div className="tech-icons">
                  <img className="tech-icons-item" src={githubIcon} alt="" />
                  <img className="tech-icons-item" src={githubIcon} alt="" />
                  <img className="tech-icons-item" src={githubIcon} alt="" />
                  <img className="tech-icons-item" src={githubIcon} alt="" />
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* conteudo do terceiro card */}
        <Col xs={12} sm={4}>
          <Card className="custom-card m-3">
            <div className="img-container">
              <Card.Img variant="top" src={projImg2} />
              <div className="overlay">
                <div className="text">Terceiro card</div>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};
export default ProjetosBack;
