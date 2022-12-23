import ProtComponent from "./ProtComponent";
import { Card } from "react-bootstrap";


const ProtPageComponent = () => {
    
    return (
        <>
        <Card className="bg-dark text-black">
      <Card.Img src="/images/portfolio.jpg" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
          <p className="text-center"><h1>PORTFOLIO</h1></p>
        </Card.Text>
        <Card.Text>
            <p className="text-center">Take a look at some of our previous experiences.</p>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <br></br>
      <ProtComponent/>
        </>

    )
}

export default ProtPageComponent;
