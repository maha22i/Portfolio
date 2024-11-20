import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/cv-Mohamed-Chehem.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/1LmOZBmO-Hchh5bUXhr-JEwv_4y5FThtq/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <br />
        <br />
        <br />
        <Row className="resume">
          <h2>Vous pouvez télécharger mon CV</h2>
          <br />
          <br />
          <br />
          <br />

          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Titre pour le portfolio */}
        <Row className="resume" style={{ justifyContent: "center" }}>
          <h2>Accéder au portfolio format cv</h2>
        </Row>

        {/* Bouton vers le portfolio */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://chehemcv.onrender.com"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Portfolio v1
          </Button>
        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}

export default ResumeNew;
