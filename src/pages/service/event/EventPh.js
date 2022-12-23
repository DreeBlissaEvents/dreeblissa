import EventTitle from "../title/EventTitle";
import { Figure } from "react-bootstrap";

const EventPh = () => {
    return (
        <>
        <EventTitle/>
        <p className="text-center"><h3>PRE-WEDDING</h3></p>
        <br></br>
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/c2.jpg"
      /> 
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/c1.jpg"
      />
       <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/c11.jpeg"
      />
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/c4.jpg"
      />
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/b4.jpg"
      />
      <br></br>
      <br></br>
      <p className="text-center"><h3>POST-WEDDING</h3></p>
        <br></br>
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/c21.jpg"
      />
       <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/c3.jpg"
      /> 
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/b1.jpg"
      />
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/b3.jpg"
      />
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/event/b5.jpg"
      />
        </>
    )
}


export default EventPh;