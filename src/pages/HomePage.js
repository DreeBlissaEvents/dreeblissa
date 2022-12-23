import React, { Component } from 'react'
import { Placeholder } from 'react-bootstrap';


import ImageComponent from "../components/ImageComponent";
import CardComponent from "../components/CardComponent";
import HomePageComponent from "./components/HomePageComponent";
import { Card, Figure } from "react-bootstrap";


import { Container, Row } from "react-bootstrap";
import MovingText from 'react-moving-text';
import MetaComponent from '../components/MetaComponent';
import Moving from './Moving';


const HomePage = () => {
 
  
  return (
    <>
    <MetaComponent/>
    <ImageComponent/>
    <br></br>
    <h3 className="text-center"><em>Dree</em> originates from the English word <em>dream </em> ,   <em>Blissa</em> derives from the Old English word <em>real happiness</em></h3>
    <h2 className="text-center"><em>BRINGING DREAMS TO LIFE</em></h2>
    <br></br>

    <br></br>
   
        <HomePageComponent/>

        <br></br>

        <Moving/>

        
      
       
    

   



        {/* <p className="text-dark"><h4>Birthday Events : Kids , Adults.</h4></p>

        <p className="text-dark"><h4>Event Photography and Catering : We offer Services as per your needs.</h4></p>

        <p className="text-dark"><h4>Invitation Cards : E-invitation Cards, Gifts Cards.</h4></p> */}


      
       
    </>
  )

  
};

export default HomePage;
  
  