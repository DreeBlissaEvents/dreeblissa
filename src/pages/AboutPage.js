import AboutPageComponent from "./components/AboutPageComponent";
import MetaComponent from "../components/MetaComponent";
import { Figure } from "react-bootstrap";

import { Carousel, LinkContainer } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import AboutTitle from "./titles/AboutTitle";

const AboutPage = () => {
    return (
      <>
      <AboutTitle/>
      <AboutPageComponent/>
      </>

    )
      
    

}

  
  export default AboutPage;