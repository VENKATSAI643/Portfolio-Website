import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import objectdetection from "../../Assets/Projects/object detection.jpg";
import results from "../../Assets/Projects/results.jpg";
import netflix from "../../Assets/Projects/netflix.png";
import cartracking from "../../Assets/Projects/Car tracking.jpg";
import imagesegmentation from "../../Assets/Projects/image segmentation pic.png";
import healthbot from "../../Assets/Projects/healthbot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagesegmentation}
              isBlog={false}
              title="Image Segmentation"
              description=" Developed an image segmentation project utilizing the U-Net architecture, which excels in biomedical image segmentation tasks. The model accurately identifies and delineates objects within images, demonstrating high precision in segmenting complex structures."
              ghLink="https://github.com/VENKATSAI643"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthbot}
              isBlog={false}
              title="Health Advisor A.I"
              description="created a health bot application using Flutter and Gemini, integrating conversational AI capabilities for personalized healthcare assistance. The app leverages Flutter's cross-platform capabilities to deliver a seamless user experience across multiple devices. Gemini's natural language processing engine enhances the bot's ability to understand and respond to user queries, providing valuable health-related information and support on-the-go"
              ghLink="https://github.com/VENKATSAI643"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cartracking}
              isBlog={false}
              title="Tracking Vehicle Count"
              description=" developed a vehicle counting system employing YOLOv8 for vehicle detection and DeepSORT for tracking and counting vehicles in video streams. This project showcases the fusion of cutting-edge object detection and tracking techniques to accurately monitor and quantify vehicle movement in real-time. By combining YOLOv8's high-speed detection capabilities with DeepSORT's robust tracking algorithm, the system provides precise vehicle counting metrics essential for traffic management, congestion analysis, and urban planning."
              ghLink="https://github.com/VENKATSAI643"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="NetFlix Movie Recommendation"
              description="Engineered a personalized movie recommendation system inspired by Netflix's algorithmic approach. Leveraging collaborative filtering techniques and content-based filtering, the system analyzes user preferences and historical viewing patterns to suggest tailored movie recommendations. Through advanced machine learning algorithms, the system continuously refines its suggestions, enhancing user satisfaction and engagement with the platform. This project showcases the power of data-driven approaches in delivering personalized entertainment experiences."
              ghLink="https://github.com/VENKATSAI643"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={objectdetection}
              isBlog={false}
              title="Object Detection"
              description="I conducted object detection tasks on a custom dataset employing YOLOv5, a state-of-the-art deep learning architecture. By fine-tuning the pre-trained YOLOv5 model on our specific dataset, the system achieved accurate and efficient detection of custom objects in images and videos. This project highlights the versatility of YOLOv5 in handling diverse object detection tasks and showcases its potential for real-world applications such as surveillance, inventory management, and industrial automation."
              ghLink="https://github.com/VENKATSAI643"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={results}
              isBlog={false}
              title="Results Website"
              description="I developed a dynamic results website leveraging AWS services including DynamoDB for data storage, Lambda for serverless computing, API Gateway for RESTful APIs, and Amplify for frontend development. This website seamlessly delivers real-time updates and interactive features, providing users with timely access to personalized results. By harnessing the scalability and reliability of AWS infrastructure, the website ensures high performance and availability, making it ideal for various applications such as educational assessments, sports competitions, and online surveys."
              ghLink="https://github.com/VENKATSAI643"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
