import { Card } from "react-bootstrap";
import { Figure } from "react-bootstrap";

const TestPageComponent = () => {
    return(
        <>
        <Card className="bg-dark text-black">
      <Card.Img src="/images/test.jpg" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
          <p className="text-center"><h1>HAPPY CLIENTS</h1></p>
        </Card.Text>
        <Card.Text>
            <p className="text-center">We created positive experiences. </p>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <br></br>
    <p><h2 className="text-black mt-2 ml-5">What our clients are saying...</h2></p>
    <br></br>
    <>

    <Figure.Image 
        width={171}
        height={200}
        src="images/port/p5.jpg" 
         />
        <p className=" white-space:pre-wrap;">  I hired Charlotte to plan my daughter's sweet 16 Tiffany themed party and it was the best decision I made! Charlotte is so organized, so creative and made the party and its planning stages a breeze! She thought of everything! She carefully listened to our wants and needs and took it from there! She BEYOND exceeded our expectations and I will have her on speed dial for my next event! I could go on and on about her!&nbsp;Thanks for making my daughters party a memorable event!</p>
        <p className=" white-space:pre-wrap;">- Angela T., Private Event</p>
        <br></br>
        <Figure.Image 
        width={171}
        height={200}
        src="images/port/p2.jpg" 
         />
        <p className="  white-space:pre-wrap; mr-5">     My mom hired Charlotte to design/run my 18th birthday/graduation party. Let me tell you, BEST DECISION EVER! Not only did Charlotte design the COOLEST Choachella-themed party for me, she also was very professional about keeping me and my mother updated on the progress of my event on the days leading up to the party. She was very easy to get hold of her with any questions we had and stayed throughout the whole party to help with any issues, questions, and clean up we had. My guests had a blast and were completely in awe of the decorations. I am enthralled with the outcome of her work and I would 10/10 recommend her to any of my friends for any of their event planning needs!</p>
        <p className=" white-space:pre-wrap;"> -  Alexandra M., Private Event</p>
       </>
        
     </>
    )
} 

export default TestPageComponent;