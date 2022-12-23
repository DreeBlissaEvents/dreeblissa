import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";


import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ProtPage from "./pages/ProtPage";
import TestPage from "./pages/TestPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import RoutesComponent from "./components/RoutesComponent";


import WeddingPage from "./pages/service/wedding/WeddingPage";

import BirthdayPage from "./pages/service/bday/BirthdayPage";

import CorporatePage from "./pages/service/corporate/CorporatePage";

import EinvitesPage from "./pages/service/einvites/EinvitesPage";

import FamilyPage from "./pages/service/family/FamilyPage";

import PartyPage from "./pages/service/party/PartyPage";

import TipsPage from "./pages/service/tips/TipsPage";

import EventPh from "./pages/service/event/EventPh";

import './App.css';




function App() {
  return (
    <BrowserRouter>
    
    <HeaderComponent />

       
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        
        <Route path="/service" element={<ServicePage />} />
        <Route path="/prot" element={<ProtPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element="Page Not Found" />
        
        <Route element={<RoutesComponent admin={true} />}></Route>

        <Route path="/service/wedding" element={<WeddingPage/>} />

        <Route path="/service/birthday" element={<BirthdayPage/>}/>

        <Route path="/service/corporate" element={<CorporatePage/>}/>

        <Route path="/service/einvites" element={<EinvitesPage/>}/>

        <Route path="/service/family" element={<FamilyPage/>}/>

        <Route path="/service/party" element={<PartyPage/>}/>

        <Route path="/service/tips" element={<TipsPage/>}/>

        <Route path="/service/event" element={<EventPh/>}/>
        

      </Routes>
      <FooterComponent />
    </BrowserRouter>
  
  
  );
}

export default App;




