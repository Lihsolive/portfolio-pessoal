import { Card, Row, Col } from "react-bootstrap";
import "animate.css";

import java from "../../../assets/icons/java-icon.svg";
import javascript from "../../../assets/icons/javascript-icon.svg";
import mysql from "../../../assets/icons/mysql-icon.svg";
import node from "../../../assets/icons/nodejs.svg";
import react from "../../../assets/icons/react.svg";
import spring from "../../../assets/icons/spring-icon.svg";
import typescript from "../../../assets/icons/typescript-icon.svg";

import acoli from "../../../assets/img/acoli.png";
import myBlogLi from "../../../assets/img/myBlogLi.png";

import "./ProjetosFull.css";

function ProjetosFull() {
  return (
    <section className="projetos" id="projetos">
      <Row className="card-container">
        {/* conteudo do primeiro card */}
        <Col xs={12} sm={4}>
          <Card className="custom-card m-3">
            {/* img do projeto */}
            <div className="img-container">
              <Card.Img variant="top" src={acoli} />
            {/* conteúdo overlay*/}
              <div className="overlay">
                <h4 className="overlay-titulo">Tecnologias usadas:</h4>
                <div className="tech-icons">
                  <img className="tech-icons-item" src={java} alt="java icon" />
                  <img className="tech-icons-item" src={spring} alt="spring icon" />
                  <img className="tech-icons-item" src={mysql} alt="mysql icon" />
                  <img className="tech-icons-item" src={javascript} alt="javascript icon" />
                  <img className="tech-icons-item" src={node} alt="javascript icon" />
                  <img className="tech-icons-item" src={react} alt="react icon" />
                  <img className="tech-icons-item" src={typescript} alt="typescript icon" />
                </div>
              </div>
            </div>
            {/* conteúdo do card */}
            <Card.Body>
              <Card.Title className="card-title">Projeto Acoli</Card.Title>
              <Card.Text className="card-description">
              Rede social baseada na ODS (Objetivos de Desenvolvimento Sustentável da ONU) 2 – Fome Zero e Agricultura Sustentável.
              </Card.Text>
              {/* botões */}
              <div className="buttons">
                <button className="btn-card">
                  <a
                    href="https://github.com/Lihsolive/projeto-acoli-react"
                    target="blanck"
                  >
                    github
                  </a>
                </button>
                <button className="btn-card">
                  <a href="https://acoli.vercel.app/" target="blanck">
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
              <Card.Img variant="top" src={myBlogLi} />
              {/* conteúdo overlay */}
              <div className="overlay">
                <h4 className="overlay-titulo">Tecnologias usadas:</h4>
                <div className="tech-icons">
                  <img className="tech-icons-item" src={java} alt="java icon" />
                  <img className="tech-icons-item" src={spring} alt="spring icon" />
                  <img className="tech-icons-item" src={mysql} alt="mysql icon" />
                  <img className="tech-icons-item" src={javascript} alt="javascript icon" />
                  <img className="tech-icons-item" src={node} alt="javascript icon" />
                  <img className="tech-icons-item" src={react} alt="react icon" />
                  <img className="tech-icons-item" src={typescript} alt="typescript icon" />
                </div>
              </div>
            </div>
              {/* conteúdo do card */}
            <Card.Body>
              <Card.Title className="card-title">MyBlogLI</Card.Title>
              <Card.Text className="card-description">
              Blog pessoal desenvolvido durante bootcamp para estudo.<br/><br/>
              </Card.Text>
              {/* botoes */}
              <div className="buttons">
                <button className="btn-card">
                  <a
                    href="https://github.com/Lihsolive/blogPessoal-react"
                    target="blanck"
                  >
                    github
                  </a>
                </button>
                <button className="btn-card">
                  <a href="https://myblogli.vercel.app/" target="blanck">
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
export default ProjetosFull;
