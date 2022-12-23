import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  
  return (
    
       <Row className="mt-5">
       <Col className="bg-dark text-white py-5">
        {/* <Col><p className="text-center">MAIN MENU</p>
         <p> HOME</p>
         <p>PLANNING + DAY-OF</p>
         <p>DESIGN + STYLE</p>
         <p>OUTSOURCED FUNCTION COORDINATOR</p>
         <p>EXPERIENTIAL MARKETING</p>
         <p>PORTFOLIO</p>
         <p>TESTIMONIALS</p></Col> */}</Col>
        <Col className="bg-dark text-white py-5">
         <Col>

              
                <p className="text-center">ABOUT</p>
                <p><em>Dreeblissa</em> is a creative event agency that is passionate about creating beautiful, unique, and organized experiences for a variety of clients throughout India. By offering design and style, event planning,(as well as everything in-between!), we’re able to work with clients to create the event of their dreams.</p></Col>
          </Col>
          <Col className="bg-dark text-white py-5">
         </Col>
        </Row>
          
       
      
    
  );
};
export default FooterComponent;
