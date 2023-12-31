import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineLeftSquare } from 'react-icons/ai';
import { Link, RouteComponentProps } from 'react-router-dom';

function AboutPage(props: RouteComponentProps) {
  return (
    <Container className="landing-page-body landing-page-container">
      <Row className="landing-page-container">
        <Col className="d-flex align-items-center">
          <div>
            <h1> Oh, wow hi! </h1>
            <hr />
            <p>  
                Thanks for checking out this section, means a lot. The idea for the site came when I was getting into cooking. Since I didn't really know what I was doing, that
                meant I was looking up <em>plenty</em> of recipes. I grew frustrated when literally recipe website I'd come across had a chapter of a book attached to it, and sometimes
                the recipe wasn't really presented in an easy to read manner. Finally; I got so frustrated and created this website.
            </p>
            <p>
              I'm always looking for ways to improve the site and am welcoming of any feedback. I just hope that if it's critical it's also constructive. If you have any ideas please
              checkout the previous page (you can go back below), theres a place to report bugs & suggest features.
            </p>
            <p> Thanks for swinging by! </p>
            <p> - Christian </p>
            <hr />
            <Link to={"/"}>
              <div className="back-button">
                <AiOutlineLeftSquare
                  className="back-icon"
                  size={32}
                />
                <span>  go back</span>
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage;