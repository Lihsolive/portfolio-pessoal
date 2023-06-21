import { Container, Row, Col } from "react-bootstrap";
import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <Container class="container-timeline">
        <Row class="mb-5">
          <Col sm={12}>
            <h2 class="timeline-title">Minha trajetória</h2>
            <p class="timeline-subtitle">
              Veja um pouco da minha história na tecnologia, com os principais
              passos dados até o momento.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
              {/* Primeiro tópico */}
              <div class="timeline-step">
                <div
                  class="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title
                  data-content="descricao"
                  data-original-title="2018"
                >
                  <div class="inner-circle"></div>
                  <p class="h6 mt-3 mb-1">2018</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">
                    Ingresso na faculdade de Design
                  </p>
                </div>
              </div>
              {/* Segundo tópico */}
              <div class="timeline-step">
                <div
                  class="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title
                  data-content="descricao"
                  data-original-title="2021"
                >
                  <div class="inner-circle"></div>
                  <p class="h6 mt-3 mb-1">2021</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">
                    Início dos estudos em UX/UI e web design
                  </p>
                </div>
              </div>
              {/* Terceiro tópico */}
              <div class="timeline-step">
                <div
                  class="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title
                  data-content="descricao"
                  data-original-title="2022"
                >
                  <div class="inner-circle"></div>
                  <p class="h6 mt-3 mb-1">2022</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">
                    Participação do programa Desenvolve promovido pelo grupo
                    Boticário na trilha Full Stack (NodeJS e React)
                  </p>
                </div>
              </div>
              {/* Quarto tópico */}
              <div class="timeline-step">
                <div
                  class="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title
                  data-content="descricao"
                  data-original-title="2022"
                >
                  <div class="inner-circle"></div>
                  <p class="h6 mt-3 mb-1">2022</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">
                    Participação do programa Desenvolve promovido pelo grupo
                    Boticário na trilha Full Stack (NodeJS e React)
                  </p>
                </div>
              </div>
              {/* Quinto tópico */}
              <div class="timeline-step">
                <div
                  class="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title
                  data-content="descricao"
                  data-original-title="2023"
                >
                  <div class="inner-circle"></div>
                  <p class="h6 mt-3 mb-1">2023</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">
                    Participação do bootcamp da Generation Brasil na trilha Full
                    Stack (Java e React)
                  </p>
                </div>
              </div>
              {/* Sexto tópico */}
              <div class="timeline-step mb-0">
                <div
                  class="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title
                  data-content="descricao"
                  data-original-title="2023"
                >
                  <div class="inner-circle"></div>
                  <p class="h6 mt-3 mb-1">2023</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">
                    Buscando oportunidade para atuar como Desenvolvedora
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Timeline;
