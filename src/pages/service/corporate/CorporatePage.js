import CorpTitle from "../title/CorpTitle";
import { Figure } from "react-bootstrap";

const CorporatePage = () => {
    return (
        <>
        <CorpTitle/>
        <p className="text-center"><h3>CORPORATE PARTY</h3></p>
        <br></br>
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/cor/cb.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/cor/ce.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/cor/cc.jpg"
      />
      <p className="text-center"><h3>CORPORATE FUNS</h3></p>
        <br></br>
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/mix/cp5.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/mix/se.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/mix/ss.jpg"
      />
      <p className="text-center"><h3>BUSINESS EVENTS</h3></p>
        <br></br>
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/mix/cp1.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/mix/cp.jpg"
      /> <Figure.Image
        width={250}
        height={300}
        
        src="/images/mix/cp6.jpg"
      />
      <Figure.Image
        width={250}
        height={300}
        
        src="/images/mix/cp2.jpg"
      />
        </>
    )
}


export default CorporatePage;