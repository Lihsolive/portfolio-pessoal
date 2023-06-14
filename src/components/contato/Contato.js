import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import emailjs from "emailjs-com";

import contactImg from "../../assets/img/contato.svg";
import "./Contato.css";

export const Contato = () => {
  // função para receber emails com as informações preenchidas no formulário
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "gmailMessage",
        "template_z49ozvj",
        formDetails,
        "_wKuchF557tobvuFG"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          setFormDetails(formInitalDetails); //para limpar os campos após o envio do formulário
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  // função para que os campos iniciem vazios
  const formInitalDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitalDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contato" id="conectar">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contato" />
          </Col>
          <Col md={6}>
            <h2>Entrar em contato</h2>
            <form onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Nome"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Sobrenome"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.phone}
                    placeholder="Telefone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Mensagem"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {" "}
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
