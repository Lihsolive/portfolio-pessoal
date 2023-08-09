import { Card, Col, Row } from "react-bootstrap";
import "animate.css";
// img projetos
import proj1 from "../../../assets/img/proj1.jpg";
import proj2 from "../../../assets/img/proj2.jpg";
// icones overlay
import sequelize from "../../../assets/icons/sequelize.svg";
import javascript from "../../../assets/icons/javascript-icon.svg";
import mysql from "../../../assets/icons/mysql-icon.svg";
import node from "../../../assets/icons/nodejs.svg";
import java from "../../../assets/icons/java-icon.svg";
import express from "../../../assets/icons/express.svg";

import "../projetosFull/ProjetosFull.css";

function ProjetosBack() {
  return (
    <section className="projetos" id="projetos">
    <Row className="card-container">
      {/* conteudo do primeiro card */}
      <Col xs={12} sm={4}>
        <Card className="custom-card m-3">
          {/* img do projeto */}
          <div className="img-container">
            <Card.Img variant="top" src={proj1} alt="imagem projeto crud" />
            {/* conteúdo overlay*/}
            <div className="overlay">
              <h4 className="overlay-titulo">Tecnologias usadas:</h4>
              <div className="tech-icons">
                <img className="tech-icons-item" src={mysql} alt="mysql" />
                <img className="tech-icons-item" src={javascript} alt="javascript"/>
                <img className="tech-icons-item" src={node} alt="node" />
                <img className="tech-icons-item" src={sequelize} alt="sequelize" />
                <img className="tech-icons-item" src={express} alt="express" />
              </div>
            </div>
          </div>
          {/* conteúdo do card */}
          <Card.Body>
            <Card.Title className="card-title">CRUD com Node</Card.Title>
            <Card.Text className="card-description">
             API de gerenciamento de dados de usuários.               <br />              <br />
            </Card.Text>
            {/* botões */}
            <div className="buttons">
              <button className="btn-card">
                <a href="https://github.com/Lihsolive/API-desenvolve" target="blanck">
                  github
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
            <Card.Img variant="top" src={proj2} alt="imagem myBlogLi"/>
            {/* conteúdo overlay */}
            <div className="overlay">
              <h4 className="overlay-titulo">Tecnologias usadas:</h4>
              <div className="tech-icons">
                <img className="tech-icons-item" src={java}alt="java" />
              </div>
            </div>
          </div>
          {/* conteúdo do card */}
          <Card.Body>
            <Card.Title className="card-title">Perfumaria Sensi</Card.Title>
            <Card.Text className="card-description">
              Aplicação para o e-commerce de uma perfumaria fictícia.
            </Card.Text>
            {/* botoes */}
            <div className="buttons">
              <button className="btn-card">
                <a href="https://github.com/Lihsolive/perfumaria-sensi" target="blanck">
                  github
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
export default ProjetosBack;

