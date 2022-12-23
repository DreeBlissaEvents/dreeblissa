import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ImageComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/eventive.jpg?text=WE CREATE EXPERIENCES"
          alt="WE CREATE EXPERIENCES"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/">
            <h3 className="text-black"></h3>
          </LinkContainer>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/home1.jpg"
          alt="WE CREATE EXPERIENCES"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/home">
            <h3>WE CREATE EXPERIENCES.</h3>
          </LinkContainer>
          <p>WE CREATE EXPERIENCES.</p>
        </Carousel.Caption>
      </Carousel.Item><Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/ser design+style.jpg"
          alt="DESIGN + STYLE"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/service/design">
            <h3>DESIGN</h3>
          </LinkContainer>
          <p>We create beautiful experiences.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/ser plan+day.jpg"
          alt="PLANNING + DAY-OF COORDINATION"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/service/plan">
            <h3>PLANNING</h3>
          </LinkContainer>
          <p>We create organized experiences.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/about.jpg"
          alt="EXPERIENTIAL MARKETING"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/service/exp">
            <h3>STYLE</h3>
          </LinkContainer>
          <p>
          We create marketable experiences.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/ser out fun.jpg"
          alt="OUTSOURCED FUNCTION COORDINATOR"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/service/out">
            <h3> FUNCTION COORDINATOR</h3>
          </LinkContainer>
          <p>
          We create profitable experiences.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/portfolio.jpg"
          alt="PORTFOLIO"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/prot">
            <h3>PORTFOLIO</h3>
          </LinkContainer>
          <p>
          Take a look at some of our previous experiences.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/ser.jpg"
          alt="HAPPY CLIENTS"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/test">
            <h3>HAPPY CLIENTS</h3>
          </LinkContainer>
          <p>
          We created positive experiences.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/ser ex.jpg"
          alt="THE STORY"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/about">
            <h3>THE STORY</h3>
          </LinkContainer>
          <p>
          Behind the experiences.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/con1.jpg"
          alt="CONTACT US"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/contact">
            <h3>CONTACT US</h3>
          </LinkContainer>
          <p>
          Let's create an experience together.
          </p><p className="text"> <h4><i class="bi bi-telephone-fill"></i>  8088757391</h4></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
};

export default ImageComponent;

