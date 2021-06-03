import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Assistente Adminstrativo"
              empresa = "MWV Rigesa"
              date="Fevereiro 2014 - Março 2015"
              content={[
                "Criação de rotinas.", 
                "Recebimento e expedição de materiais.", 
                "Veriﬁcação de equipamentos de informática", 
                "Lançamento de notas no SAP"
              ]}
            />
            <Resumecontent
              title="Desenvolvedor"
              empresa = "Freelancer"
              date="Março 2017 -  2019"
              content={[
                "Criação de api's em Laravel, Django e Springboot.", 
                "Correção de sistemas em python, PHP e Java.", 
                "Criação de aplicativos híbridos com React Native.", 
                "Criação te templates com Bootstrap e ReactJs."
                
              ]}
            />
            <Resumecontent
              title="Analista de desenvolvimento/ desenvolvedor"
              empresa = "SoftMidia"
              date="Maio 2019 - Agosto 2019"
              content={[
                "Criação de api's em python e Laravel",
                "Desenvolvimento de templates em Bootstrap e ReactJs.", 
                "Criação de automações em python e integração.",
                "Manutenção de bancos de dados MySql."
              ]}
            />
            <Resumecontent
              title="Analista de Desenvolvimento / Desenvolvedor"
              empresa = "Softbuilder"
              date="Março 2020 - Novembro 2020"
              content={[
                "Criação de templates usando ReactJs e VueJs.", 
                "Criação de api's com Django e Laravel.", 
                "Desenvolvimento de integrações com Python.",
                "Conﬁguração de servidores Linux.",
                "Manutenção de bancos de dados PostgreSQL."
              ]}
            />
            <Resumecontent
              title="Analista de Desenvolvimento / Desenvolvedor"
              empresa = "Hapvida"
              date="Novembro 2020 - Atualmente"
              content={[
                "Criação de api's com Django, Flask, Node.js", 
                "Criação de micro serviço com Flask e Pyramid.", 
                "Desenvolvimento de templates em Angular, React e Vue.js."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Análise e Desenvolvimento de Sistemas"
              empresa = "UniFanor Wydem"
              // title="12TH BOARD [ODM Public School,Odisha]"
              date="2015 - 2017"
              content={["Precentage: 100%"]}
            />
            <Resumecontent
              title="Ciência da Computação [Trancado]"
              date="2015 - 2017"
              content={["Precentage: 56%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `3º lugar HackFlag (UniFanor)`,
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Gestor da Fabrica de Software"
              content={[
                "Gerencia Equipes de Desenvovolvimento.",
                "Gerir demandas.",
                "Estudar o Uso de Novas Tecnogias"
              ]}
            />
            <Resumecontent
              title="Lider de Turma"
              content={[
                "Organizar Pedidos dos Alunos.",
                "Repesentar o Curso"
              ]}
            />
            <Resumecontent
              title="Monitor de Programação"
              content={[
                "Auxiliar os Professores no pos aula",
                "Ensinar Algoritimos",
                "Programação Orientada a Objeto",
                "Estrutuara de Dados"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
