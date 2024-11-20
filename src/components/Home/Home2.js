import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/IMG_9883.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Recherche de <span className="purple"> stage </span> 
            </h1>
            <p className="home-about-body">
              Actuellement étudiant en <b className="purple"> Master 2 Science et Technologie du
              Métavers </b> je suis à la recherche d’un <b className="purple"> stage de 6 mois</b> pour valider
              mon diplôme. Passionné par les technologies émergentes et le
              développement dans l'univers du métavers, je suis très motivé à
              l'idée de mettre en pratique mes compétences acquises durant mes
              études dans un environnement professionnel stimulant. 
              <br />
              <br />Je suis une
              personne pleine d’initiatives, curieuse et prête à m’investir
              pleinement dans toutes les missions qui me seront confiées. Mes
              compétences en<b className="purple"> développement, cloud computing </b> , ainsi que dans les
              domaines de la <b className="purple">réalité virtuelle et augmentée </b> me permettent de
              m’adapter rapidement à des projets variés et ambitieux.
              <br />
              <br />Mon
              objectif est de trouver une entreprise qui pourra m’offrir une
              <b className="purple"> perspective d’embauche </b> à la fin du stage, afin de continuer à
              évoluer et à contribuer à des projets innovants. Je suis enthousiaste à l’idée de relever de nouveaux défis et d’apporter
              ma passion, mes idées et mon énergie à votre équipe. 
              <br />
              <br />N'hésitez pas
              à me contacter pour discuter d’une collaboration future.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MES RESEAUX</h1>
            <p>
              Ne hésitez pas à<span className="purple"> contacter </span>sur
              <p>
            2 rue Chemin Vert,<br />
            59300, Aulnoy-Lez-Valenciennes<br />
            +33 07 75 84 09 62<br />
            <a
              href="mailto:chehem21@gmail.com"
              style={{ color: "white", textDecoration: "none" }}
            >
              chehem21@gmail.com
            </a>
          </p>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/maha22i"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/home?lang=fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohamed-chehem-563057231/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chehemmahami"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
