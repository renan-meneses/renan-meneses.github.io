import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              um pouco<strong className="purple"> de mim</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Skillset </strong> Professionnais
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h1 className="project-heading" style = {{justifyContent: "center"}}>
           <strong className="purple">Linguagens: </strong> 
        </h1>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* linguagem */}
          <Techstack iconName="devicon-java-plain-wordmark"/>
          <Techstack iconName="devicon-haskell-plain " />
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="devicon-css3-plain-wordmark " />
          <Techstack iconName="devicon-html5-plain-wordmark " />
          <Techstack iconName="devicon-php-plain " />
          <Techstack iconName="devicon-dart-plain-wordmark " />
          <Techstack iconName="devicon-objectivec-plain " />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-typescript-plain"/>
          <Techstack iconName="devicon-c-plain-wordmark"/>
          <Techstack iconName="devicon-cplusplus-plain-wordmark"/>
          <Techstack iconName="devicon-csharp-plain-wordmark"/>

          </Row>
          <h1 className="project-heading">
           <strong className="purple">FrameWorks: </strong> 
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* FrameWorks */}
          <Techstack iconName="devicon-spring-plain-wordmark"/>
          
          <Techstack iconName="devicon-django-plain"/>
          <Techstack iconName="devicon-flask-original-wordmark"/>
          <Techstack iconName="devicon-dot-net-plain-wordmark" />
          <Techstack iconName="devicon-laravel-plain-wordmark"/>
          <Techstack iconName="devicon-swift-plain-wordmark"/>
          <Techstack iconName="devicon-flutter-plain"/>
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-vuejs-plain-wordmark"/>
          </Row>
          <h1 className="project-heading">
           <strong className="purple">Database: </strong> 
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* Bancos  */}
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-mysql-plain-wordmark" />
          <Techstack iconName="devicon-postgresql-plain-wordmark" />
          <Techstack iconName="devicon-oracle-original" />
          <Techstack iconName="devicon-firebase-plain-wordmark" />

          
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
        
        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> que eu uso
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="devicon-heroku-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-gitlab-plain-wordmark" />
          <Techstack iconName="devicon-bitbucket-plain-wordmark" />
          <Techstack iconName="devicon-docker-plain-wordmark" />
          <Techstack iconName="devicon-composer-line-wordmark" />
          <Techstack iconName="devicon-apache-plain-wordmark" />
          <Techstack iconName="devicon-bash-plain" />

        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
