import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAmazonaws,
  SiGooglecloud
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}> 
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="AWS SageMaker" /> {/* AWS SageMaker */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud title="Google Colab" /> {/* Google Colab */}
      </Col>
    </Row>
  );
}

export default Toolstack;
