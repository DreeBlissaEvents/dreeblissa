import { Card } from "react-bootstrap"

const ContactPageComponent = () => {
    return (
        
        <Card className="bg-dark text-black">
      <Card.Img src="/images/cc1.jpg" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
         {/*  <p className="text-white"><h1>SANDHYA</h1></p> */}
          <p className="text-center text-white"><h1>CONTACT US</h1></p>
        </Card.Text>
        <Card.Text>
            <p className="text-center text-white">Let's create an experience together.</p>
        <br></br>
        <p className="text-white"> <i class="bi bi-envelope-at-fill"></i>  dreeblissaevents@gmail.com</p>
        <p className="text-white"><i class="bi bi-whatsapp"></i> 8088757391</p>
        <p className="text-white"><i class="bi bi-buildings-fill"></i>  HCH Convention Hall,Kamakshi Palya</p>
        <p className="text-white"><i class="bi bi-instagram"></i>  dreeblissa__events</p>
        <p className="text-white"><i class="bi bi-facebook"></i> DreeBlissa Events</p>
        
        <br></br>
        
        
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    )
}

export default ContactPageComponent;