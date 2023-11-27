import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Homepage";
import LoginForm from "./component/loginform";
import RegisterForm from "./component/Registerform";
import About from "./component/About";
import Supscription from "./component/Supscription";
import Collections from "./component/Collections";
import Slider from "./component/Slider";
import Service from "./component/Service";
import Teamspot from "./component/cards1";
import Teamspot1 from "./component/c1";
import Teamspot2 from "./component/c2";
import Teamspot3 from "./component/c3";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/Register" element={<RegisterForm />} />
      {/* Add the Route for the About component */}

      <Route path="/About" element={<About />} />
      <Route path="/About" element={<About />} />
      <Route path="/Supscription" element={<Supscription />} />
      <Route path="/Collections" element={<Collections />} />
      <Route path="/Slider" element={<Slider />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/card1" element={<Teamspot1/>} />
      <Route path="/card2" element={<Teamspot2/>} />
      <Route path="/card3" element={<Teamspot3/>} />
      
    </Routes>
  );
}
