import ServicePageComponent from "./components/ServicePageComponent";
import { Figure } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ServicePage = () => {
    return (
        <>
        <Card>
      <Card.Img variant="top" src="/images/home/ds.jpg" gap="3" />
       <Card.ImgOverlay>
        <Card.Title className="text-white text-center textAlign-center"><h1>DESIGN + STYLE</h1></Card.Title>
        </Card.ImgOverlay>
        </Card>
        <ServicePageComponent/>
        <Figure.Image
        width={171}
        height={200}
        
        src="/images/port/p2.jpg"
      />
      <Figure.Image
        width={180}
        height={180}
        src="/images/port/p3.jpg"
      />
      
      <Figure.Image
        width={171}
        height={180}
        
        src="/images/port/p11.jpg"
      />
      <Figure.Image
        width={171}
        height={180}
        
        src="/images/port/p7.jpg"
      />
      <Figure.Image
        width={171}
        height={180}
        
        src="/images/port/p8.jpg"
      />
      <Figure.Image
        width={171}
        height={180}
        
        src="/images/port/p9.jpg"
      />
      <Figure.Image
        width={171}
        height={180}
        
        src="/images/port/p10.jpg"
      />
    </>
    )
}

export default ServicePage;
  
  