import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Je m’appelle <span className="purple">  Mohamed Chehem Mohamed </span>
          étudiant en Master en Sciences et Technologie du Métaverse. Mon parcours académique et mes passions m’ont permis de développer des compétences variées, à la croisée de l’informatique, des nouvelles technologies et de la créativité numérique.
          <br/>
          <br/>
Ma passion pour l’informatique a émergé dès mes années de lycée, et elle n’a cessé de grandir au fil de mes études universitaires. J’ai acquis une solide expérience en programmation, notamment avec des langages comme HTML, CSS et JavaScript. J’ai également eu l’opportunité de travailler avec des frameworks modernes tels qu’Angular et React, dans le cadre de projets académiques et professionnels.
<br/>
<br/>
Au cours de mon Master, j’ai approfondi mes compétences en développement mobile grâce à Flutter et exploré la création 3D avec Unity, tout en découvrant les bases de la réalité augmentée et virtuelle. Mon expertise inclut aussi des connaissances en cloud computing, ayant travaillé avec Microsoft Azure pour concevoir et déployer des solutions innovantes.
<br/>
<br/>
Au-delà de l’univers technologique, je suis également passionné par la politique et les relations internationales. J’apprécie particulièrement suivre des documentaires sur des personnalités influentes et des événements historiques, qui nourrissent ma curiosité pour le monde et ses dynamiques.
<br/>
<br/>
Ce mélange de compétences techniques et d’intérêts culturels m’amène à envisager chaque projet avec une perspective à la fois analytique et créative. Mon objectif est de contribuer à façonner des expériences technologiques immersives et innovantes, en mettant ma polyvalence et ma passion au service de projets ambitieux.
<br/>
<br/>
Je vous invite à explorer mon portfolio et à me contacter pour discuter de potentielles collaborations. Ensemble, donnons vie à des idées audacieuses !
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
          " S'efforcer de créer des choses qui font une différence !" {" "}
          </p>
          <footer className="blockquote-footer">Mohamed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
