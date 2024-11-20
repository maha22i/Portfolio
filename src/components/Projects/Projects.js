import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/ET_DEV_OPENCV-1.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projet  <strong className="purple"> réalisée </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BOOKSITE"
              description="Application web réalisée avec React.js et l'API Google Books pour le back-end. BookApp permet aux utilisateurs de rechercher des livres, de les ajouter à leurs favoris et d'accéder à des informations détaillées comme des résumés et d'autres métadonnées.

            Avec une interface moderne et intuitive, cette application offre une expérience fluide pour découvrir de nouveaux livres, organiser sa collection personnelle et explorer des recommandations littéraires.

              Technologies utilisées : React.js, Google Books API."
              ghLink="https://github.com/maha22i/booksite"
              demoLink="https://booksite-z9ww.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Projet-Idriss"
              description="

Site internet statique réalisé avec HTML, CSS, et un peu de JavaScript, conçu pour répondre aux besoins d’un département de Djibouti Telecom. Ce projet a été développé pour permettre aux employés d’accéder directement en ligne à des documents spécifiques, sans avoir à contacter le service concerné.

Avec une interface claire et intuitive, ce site offre une solution pratique et efficace pour centraliser et partager les ressources internes, tout en simplifiant le flux de communication au sein de l’équipe.
 
Technologies utilisées : HTML, CSS, JavaScript."
              ghLink="https://github.com/maha22i/projet-idriss"
              demoLink="https://projet-idriss.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Snake Game"
              description="Un projet réalisé avec HTML, CSS et JavaScript pour m'entraîner et améliorer mes compétences en développement web. Ce jeu classique met en pratique des concepts clés tels que la manipulation du DOM, les événements utilisateur et la gestion des animations.

Le développement de ce projet m’a permis de renforcer ma maîtrise des bases de JavaScript tout en explorant des aspects comme la logique de jeu et l’interactivité dynamique."
              ghLink="https://github.com/maha22i/snakegame"
              demoLink="https://snakegame-qyi9.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio V1"
              description="La première version de mon portfolio personnel, développée avec React.js. Ce projet a été conçu pour présenter mon parcours, mes compétences et mes projets dans un format professionnel et accessible.

Ce portfolio m’a permis de perfectionner mes compétences en React, notamment dans la création de composants dynamiques, la gestion de l’état, et la mise en œuvre d’une architecture modulaire."
              ghLink="https://github.com/maha22i/chehemcv"
              demoLink="https://chehemcv.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ProjectVélo"
              description="Un projet académique réalisé en JavaScript, conçu pour répertorier toutes les stations de vélos à Toulouse. L’application affiche des informations en temps réel sur la disponibilité des vélos (ou emplacements libres) et permet également de réserver un vélo.

En utilisant OpenStreetMap, ce projet intègre une carte interactive pour localiser facilement les stations et offre une interface intuitive pour naviguer entre les différentes fonctionnalités.

Ce projet m’a permis de travailler sur des intégrations API, la gestion d’événements en JavaScript, et l’affichage dynamique de données géolocalisées."
              ghLink="https://github.com/maha22i/ProjectVelo"
              demoLink="https://projectvelo.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="TP Traitement d'Image et Détection avec OpenCV"
              description="Ce projet a été réalisé en Python avec OpenCV, utilisant des modèles pré-entraînés pour effectuer des tâches de traitement d'images et de détection. Le projet inclut des techniques de détection d'objets telles que les cascades de Haar et les réseaux neuronaux convolutifs (CNN).

L’objectif principal était de traiter et analyser des images à l’aide de méthodes avancées de vision par ordinateur, tout en générant des résultats visuels et en les expliquant dans un rapport détaillé. Ce projet m'a permis de me familiariser avec OpenCV, le traitement d'images et l’utilisation de modèles pour des tâches spécifiques de détection."
              ghLink="https://github.com/maha22i/TP-TRAITEMENT-IMAGE"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
