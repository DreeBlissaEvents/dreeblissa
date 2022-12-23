import PartyTitle from "../title/PartyTitle";
import { Figure } from "react-bootstrap";

const PartyPage = () => {
    return (
        <>
        <PartyTitle/>
        <p className="text-center"><h3>GAMES</h3></p>
        <br></br>
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p1.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p2.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p3.jpg"
      />
      
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p4.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p5.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p6.jpg"
      />
      
        
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p7.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p11.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p9.jpg"
      />
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/party/p10.jpg"
      />
        </>
    )
}


export default PartyPage;