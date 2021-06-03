import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { render } from "@testing-library/react";


// function CardRepos (repos) {
//   var repositorio = []
//   repos.forEach(function repos(repo , index){
//     console.log("Nome: " + repo.name + " | Descricao: " + repo.description + " | link :" + repo.html_url + " | linguagem: " + repo.language)
//     repositorio = repo   
//   })
//   return repositorio
// }

function Projects() {
  // var repos = [] 
  const options = {
    method: 'GET',
    url: 'https://api.github.com/users/renan-meneses/repos',
    headers: {Accept: 'application/vnd.github.v3+json'}
  };
  var prot = []
  var repos = []
axios.request(options).then(function (response) {
  
  repos.push(response.data)
}).catch(function (error) {
    console.error(error);
});

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Alguns trabalhos e estudos        
</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        {repos.map(repo =>{
    return(
      <Col md={4} className="project-card">
          <ProjectCard
          isBlog={false}
          title= {repo.title}
          description={repo.title}
          link={repo.html_url}
        />
    </Col>)
  })}
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Alguns dos meus post</p>
        <Row style={{ justifyContent: "center" }}>
        
        </Row> 
      </Container>
    </Container>
  );
}

export default Projects;
