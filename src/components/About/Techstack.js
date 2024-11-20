import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiUnity,
  SiCsharp,
  SiHtml5, SiCss3, SiJavascript
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 color="#E34F26" size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 color="#1572B6" size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript color="#F7DF1E" size={40} />
      </Col>
    </Row>
  );
}

export default Techstack;
