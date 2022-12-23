import '../components/HomePage.css';
import MetaComponent from "../../components/MetaComponent";
import { Container,Row, Col } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import { Card, CardGroup } from 'react-bootstrap';

const HomePageComponent = () => {

  return(
    <>
    <CardGroup>
    <Row  md={3} className="g-4">
    <Card>
        <Card.Img variant="top" src="/images/wedding/w432.jpg" />
        <Card.Body>
          <Card.Title className='text-center'>WEDDING PACKAGES</Card.Title>
          <Card.Text>
            <br></br>
           <p className='text-center'>HALDI</p>
           <p className='text-center'>MEHNDI</p>
           <p className='text-center'>SANGEETH</p>
           <p className='text-center'>RECEPTION</p>
           <p className='text-center'>MUHURTAM</p>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/family/f2.jpg" />
        <Card.Body>
          <Card.Title className='text-center'>FAMILY EVENTS</Card.Title>
          <br></br>
          <Card.Text>
            <p className='text-center'>ANNIVERSARIES</p>
            <p className='text-center'>HOUSE WARMING CEREMONY</p>
            <p className='text-center'>BABY SHOWER</p>
            <p className='text-center'>KIDS EVENTS (NAMING CEREMONY,CRADLE EVENTS etc)</p>
            <p className='text-center'>KITTY PARTY</p>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/cor/ce.jpg" />
        <Card.Body>
          <Card.Title className='text-center'>OFFICIAL EVENTS</Card.Title>
          <br></br>
          <Card.Text>
           <p className='text-center'>PROMOTIONAL EVENTS</p>
           <p className='text-center'>CORPORATE EVENTS</p>
           <p className='text-center'>MARKETING EVENTS</p>
           <p className='text-center'>FLEA MARKETS</p>
           <p className='text-center'>MANPOWER SUPPLY</p>
           <p className='text-center'>GIFTS AND RETURN GIFTS IDEA</p>
          </Card.Text>
        </Card.Body>
    
      </Card>
      
      <Card>
        <Card.Img variant="top" src="/images/bday/14.jpg" />
        <Card.Body>
          <Card.Title className='text-center'>BIRTHDAY EVENTS</Card.Title>
          <br></br>
          <Card.Text>
            <p className='text-center'>KIDS BIRTHDAY</p>
            <p className='text-center'>ADULTS BIRTHDAY</p>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/wedding/w10.jpg" />
        <Card.Body>
        <Card.Title className='text-center'>PHOTOGRAPHY</Card.Title>
        <br></br>
          <Card.Text>
           <p className='text-center'>EVENT PHOHOGRAPHY</p>
           <p className='text-center'>CATERING</p>
           <p className='text-center'>WE OFFER SERVICES AS PER YOUR NEEDS</p>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/ein/e3.jpg" />
        <Card.Body>
          <Card.Title className='text-center'>INVITATIONS</Card.Title>
          <br></br>
          <Card.Text>
           <p className='text-center'>E-INVITATIONS</p>
           <p className='text-center'>GIFTS CARDS</p>
          </Card.Text>
        </Card.Body>
    
      </Card>
     
      </Row>
    </CardGroup>
    
    </>


  )
/* 
  const data = [
    { name: "Haldi", age: "Anniversaries" , gender: "Promotional Events" },
    { name: "Mehndi", age: "Baby Shower", gender: "Corporate Events" },
    { name: "Sangeeth", age: "Kids Events", gender: "Marketing Events"},
    { name: "Reception", age: "Kitty Party", gender: "Flea Markets"},
    { name: "Muhurtam", age: "House Warming Ceremony", gender: "Manpower Supply"},
  ]

    return (
        <> 
        <MetaComponent/>
        <p className="text-center text-dark"><h1>Services we offer</h1></p>
    
    <p className="text-center text-dark">Let's create an experience together.</p>
    <div className="App">
      <table>
        <tr>
          <th>Wedding Package</th>
          <th>Family Events</th>
          <th>Official Events</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>
    </div>

  
        {/* <Figure.Image gap="3"
        width={200}
        height={250}
        
        src="/images/122.jpg"
      />
      <Figure.Image gap="3"
        width={200}
        height={250}
        src="/images/11.jpg"
      />
    
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/port/p2.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/212.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/14.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/mp1.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/about.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/ch.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        src="/images/18.jpg"
      />
      
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/19.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/20.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/21.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/ss.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/b1.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/mm.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        src="/images/16.jpg"
      />
      
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/121.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/ser ex mar1.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/13.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/6.jpg"
      />
      <Figure.Image
        width={200}
        height={250}
        
        src="/images/15.jpg"
      /><Figure.Image
      width={200}
      height={250}
      
      src="/images/33.jpg"
    />
   {/*  <Figure.Image
      width={200}
      height={250}
      src="/images/ex.jpg"
    /> */}
    
    {/* <Figure.Image
      width={150}
      height={200}
      
      src="/images/f.jpg"
    />
    <Figure.Image
      width={200}
      height={250}
      
      src="/images/143.jpg"
    />
    <Figure.Image
      width={200}
      height={250}
      
      src="/images/2.jpg"
    />
    <Figure.Image
      width={200}
      height={250}
      
      src="/images/p.jpg"
    />
    <Figure.Image
      width={200}
      height={250}
      
      src="/images/17.jpg"
    /><Figure.Image
    width={200}
    height={250}
    
    src="/images/78.jpg"
  />
  <Figure.Image
    width={200}
    height={250}
    src="/images/45.jpg"
  />

<Figure.Image
  width={200}
  height={250}
  
  src="/images/ex.jpg"
/> */} 
        
      

export default HomePageComponent;