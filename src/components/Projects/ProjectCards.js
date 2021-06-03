import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function ProjectCards(props) {
//   const repos = []
//   const options = {
//     method: 'GET',
//     url: 'https://api.github.com/users/renan-meneses/repos',
//     headers: {Accept: 'application/vnd.github.v3+json'}
//   };
// axios.request(options).then(function (response) {
//     repos = response.
//     repos.forEach(function repos(repo , index){

//     return (
//       <Card className="project-card-view">
//         {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
//         <Card.Body>
//           <Card.Title>{repo.title}</Card.Title>
//           <Card.Text style={{ textAlign: "justify" }}>
//             {repo.description}
//           </Card.Text>
//           <Card.Text style={{ textAlign: "justify" }}>
//             {repo.linguagem}
//           </Card.Text>
//           <Button variant="primary" href={repo.link} target="_blank">
//             <i className="cil-external-link">&nbsp;</i>
//             {repo.has_pages ? "View Blog" : "View Project"}
//           </Button>
//         </Card.Body>
//       </Card>
//     );
//   })
// }).catch(function (error) {
//     console.error(error);
// });
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.linguagem}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
