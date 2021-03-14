import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Oi pessoal eu sou <span className="purple">Renan Meneses </span>
             de  <span className="purple"> Fortaleza, Ce.</span>
            <br />Sou um Desenvolvedor, apaixonado pelo mundo linux, que se aventura na arte dos  desenvolvimeto de game e estudando DevOps.
            <br />
            <br />
            Além de programar, algumas outras atividades que adoro fazer:        
             </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Jogar Games
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Ensinar
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Ler sobre novas tecnoligias
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Cozinhar
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "O conhecimento é nossa maior arma contra a ignorância "{" "}
          </p>
          <footer className="blockquote-footer">Renan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
