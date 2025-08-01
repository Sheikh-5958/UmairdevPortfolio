import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi Everyone, I am{" "}
              <span className="purple">Muhammad Umair Farooqi </span>
              from <span className="purple"> Chakwal, Pakistan.</span>
              <br />
              I am recently employed as a Web Developer developer at 92Devs.
              <br />
              I have completed Bachelor's BS in Computer Science at Pmas Arid
              Agriculture Rawalpindi,Pakistan.
              <br />
            </p>
            <p className="home-about-bodyy">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>
            <p className="home-about-bodyy">
              I am fluent in languages like
              <i>
                <b className="purple">
                  {" "}
                  React, API Integrations, HTML5, CSS3, Tailwind CSS, SASS,
                  JavaScript, Bootstrap, Laravel{" "}
                </b>
              </i>
            </p>
            <p className="home-about-body">
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
