import React from 'react';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './navbar.css';


import backgroundImage from './bgdark.jpg';
const logoUrl = 'https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P4V000011msraUAA';

export default function Navbar() {
  return (
    <nav className="navbar"   style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '5px' }}>
      <div className="title-container">
      
        <Link to="/" className="title-link">
          <img src={logoUrl} alt="Logo" className="logo" />
          DiscoverMoviz
        </Link>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Supscription">Subscription</Link>
        </li>
        <li>
          <Link to="/Collections">collections</Link>
        </li>
        <li>
          <Link to="">Top Webseries</Link>
        </li>
        
      <li>
          <Link to="">WatchList</Link>
        </li>
        <li>
          <Link to="/Service">Services</Link>
        </li>
        <li>
        <Button href="./loginform" variant="outlined" sx={{ mx: 1.5, color: 'white', backgroundColor: 'blue' }}>
                Login
              </Button>
        </li>
      </ul>
    </nav>
    
  );
}
