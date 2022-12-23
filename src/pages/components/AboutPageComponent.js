import { BrowserRouter } from "react-router-dom";
import CardComponent from "../../components/CardComponent";
import ImageComponent from "../../components/ImageComponent";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Figure } from "react-bootstrap";


const AboutPageComponent = () => {
    return(
        <>
        <Card className="bg-dark text-black">
      <Card.Img src="/images/about.jpg" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
          <p className="text-center"><h1>THE STORY</h1></p>
        </Card.Text>
        <Card.Text>
            <p className="text-center">Behind the experiences.</p>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <br></br>
    <Row className="mt-5">
       <Col className=" text-white py-5">
        <Card.Img src="/images/wedding/ww2.jpg" />
       {/* <Figure.Image
        width={200}
        height={250}
        
        src="/images/212.jpg"
      /> */}
        </Col>
        <Col className=" text-dark py-5">

    <p><span style={{fontWeight: 'bold'}}>A tale of beautification, creativity, and bespoke experiences.<p dir="ltr"> </p><p dir="ltr"> </p></span></p>
    <p>Driven by a passion for creating unique, memorable, and stunning experiences, Eventive was founded in 2014 by Charlotte Bradrick, Chief Eventor. </p>

    <p>After discovering a lack of experiential marketing in Central Massachusetts while working in Marketing and PR, Charlotte was inspired and motivated to develop an event planning, design, and style company just outside Worcester, Massachusetts.</p> 

    <p>harlotte, who used any excuse throughout her youth to plan and design events, knew that Eventive was a perfect opportunity to share her creativity and talents with those around her.</p>

    <p>Now working with a large variety of clientele, her passion has only grown stronger and is what continues to fuel the company and impress the community. </p>

    <p>Dreeblissa is a creative event agency that is determined to create beautiful, unique, and organized experiences throughout New England. By offering design and style, event planning, outsourced function coordination, and experiential marketing (and everything in-between!), we’re able to work with clients to create the event of their dreams. </p>

    <p>But, enough about us, our job is about you- what you desire, what your guests or customers want, and reaching the goals you have set. So please get in touch, so we can work with you on your experience. 

 </p>
 </Col>
 </Row>

        </>
        
      

    )
}

export default AboutPageComponent;