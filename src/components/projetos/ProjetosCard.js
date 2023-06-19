import { Col } from "react-bootstrap";

export const ProjetosCard = ({ title, description, link, linkURL, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="proj-txtx-description">{description}</span>
          <div className="proj-link">
            <span className="proj-txtx-link">
              <a className="proj-txtx-link-url" href={linkURL}>{link}</a>{" "}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};
