import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import audit from "../../Assets/Projects/auditerc.png";
import Portfolio from "../../Assets/Projects/portfolio.png";
import First_project from "../../Assets/Projects/first site.jpg";
import soap from "../../Assets/Projects/soap.png";
import weltrio_health from "../../Assets/Projects/weltrio_health.png";
import quranacademy from "../../Assets/Projects/QuranAcademy.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
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
              imgPath={First_project}
              isBlog={false}
              title="ERC Zone"
              description="I developed a professional website for ERC Zone using React.js, aimed at helping small businesses claim the Employee Retention Credit (ERC). The site explains eligibility, offers guidance on documentation, and simplifies the application process. With a clean, responsive design and smooth navigation, it’s built to clearly communicate value and boost client engagement.."
              ghLink=""
              demoLink="https://ccalerc.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weltrio_health}
              isBlog={false}
              title="Weltrio Health"
              description="I built a custom website using React.js for a company focused on reducing employer healthcare costs. The site clearly communicates their non-insurance, HR-partnered approach to cutting health plan expenses by up to 50% while improving benefits. With a clean, informative layout and responsive design, it effectively showcases their services and drives client inquiries."
              ghLink=""
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quranacademy}
              isBlog={false}
              title="Quran Academy"
              description="I developed a responsive Qur'an Academy website using React.js, designed to provide users with access to online Quran learning. The platform includes features like course listings, teacher profiles, student registration, and a clean UI for smooth navigation. Built with reusable React components, it ensures fast loading, mobile-friendly design, and an engaging user experience."
              ghLink=""
              demoLink="https://quranacademy.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soap}
              isBlog={false}
              title="Handwash and Soap"
              description="I developed a modern, responsive website for a soap brand using React.js. The site showcases product collections with rich visuals, ingredient details, and customer reviews. Built with reusable components and smooth navigation, it offers an engaging shopping experience. Local storage and optimized performance ensure fast load times and a seamless user journey across all devices."
              ghLink=""
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audit}
              isBlog={false}
              title="Auditercpros"
              description="I crafted this web-based editor using React.js, blending a clean UI with real-time functionality. It supports writing and previewing HTML, CSS, JavaScript, and Markdown—all in one place. Inspired by VS Code, it auto-saves work locally and delivers a smooth developer experience with a custom-built structure, giving users full control over code and content creation."
              ghLink=""
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio website"
              description="I designed and developed a fully responsive personal portfolio website using custom HTML, CSS, JavaScript, and Bootstrap. The site showcases projects, skills, and experience with a clean UI and smooth navigation. It features interactive elements, a mobile-friendly layout, and optimized performance to provide a professional online presence and attract potential clients or employers."
              ghLink="https://ranaafaqali.com/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
