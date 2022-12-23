import { Card,Row,Col,Container, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";



const CardComponent = ({ category, idx }) => {
  const images =[
    "/images/home/ds.jpg",
    "/images/home/pl1.jpeg",
    "/images/home/exx.jpg",
    "/images/home/out.jpg",
  ];
  
  const page =[
    "1",
    "2",
    "3",
    "4",
  ];
  
  return (
      <Card>
      <Card.Img
      crossorigin="anonymous" variant="top" src={images[idx]}/>
       <Card.ImgOverlay>
        <Card.Text className="text-center text-white" dir="ltr" dir="ltr"><h2>{category}</h2></Card.Text>
       
       </Card.ImgOverlay>
       
       
      </Card>
    
    
    
   
   
  );  
}

export default CardComponent;