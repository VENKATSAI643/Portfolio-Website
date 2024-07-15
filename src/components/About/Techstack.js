import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiAmazonaws, SiGooglecloud, SiTensorflow, SiKeras,SiFlutter } from "react-icons/si"; // Import additional icons

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
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
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter /> {/* Keras icon for Deep Learning */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws /> {/* AWS icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud /> {/* Google Cloud icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow /> {/* TensorFlow icon for Machine Learning */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras /> {/* Keras icon for Deep Learning */}
      </Col>
    </Row>
  );
}

export default Techstack;
