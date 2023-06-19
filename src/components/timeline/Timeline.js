import "./Timeline.css";
export const Timeline = () => {
  return (
    <section className="timeline" id="timeline">
      <div class="container-timeline">
        <div class="row text-center justify-content-center mb-5">
          <div class="col-xl-6 col-lg-8">
            <h2 class="font-weight-bold">Minha trajetória</h2>
            <p class="text-muted">
              Veja um pouquinho da minha história na tecnologia, com os principais paços que dei até o momento..
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
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
                  <p class="h6 text-muted mb-0 mb-lg-0">Ingresso na faculdade de Design</p>
                </div>
              </div>
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
                  <p class="h6 text-muted mb-0 mb-lg-0">Início dos estudos em UX/UI e web design</p>
                </div>
              </div>
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
                  <p class="h6 text-muted mb-0 mb-lg-0">Participação do programa Desenvolve promovido pelo grupo Boticário na trilha Full Stack (NodeJS e React)</p>
                </div>
              </div>
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
                  <p class="h6 text-muted mb-0 mb-lg-0">Participação do bootcamp da Generation Brasil na trilha Full Stack (Java e React)</p>
                </div>
              </div>
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
                  <p class="h6 text-muted mb-0 mb-lg-0">Buscando oportunidade para atuar como Desenvolvedora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
