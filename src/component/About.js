// import React from 'react';
// import { Link } from 'react-router-dom';
// import './About.css';
// import backgroundImage from './imagered.jpg';

// const About = () => {
//   return (
//     <div className="Home"  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh', 
//     width:"1535px",height:"100%",marginTop:"0%"}}>
//     <div className="about-container">
//       <h1 className="about-title">About DiscoverMoviz</h1>
//       <p className="about-description">
//         Welcome to DiscoverMoviz, your ultimate destination for exploring and discovering
//         the world of movies and web series. We strive to provide you with a curated selection
//         of top-rated movies, web series, and much more.
//       </p>
//       <p className="about-description">
//         Whether you're a fan of Marvel Cinematic Universe (MCU), DC Universe (DCU), or
//         looking for the latest trending web series, DiscoverMoviz has got you covered. Create
//         your personalized WatchList, explore our services, and embark on a cinematic journey
//         like never before.
//       </p>
//       <p className="about-description">
//         Join us in this adventure of cinematic exploration, and let DiscoverMoviz be your
//         go-to platform for all things movies and entertainment.
//       </p>

//       {/* Add a button to navigate to the home page */}
//       <Link to="/">
//         <button className="home-button">Back</button>
//       </Link>
//     </div>
//     </div>
//   );
// };
// export default About;

// document.body.style = `
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-image: url(${backgroundImage});
//   background-size: cover;
//   background-position: center;
// `;
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import backgroundImage from './imagered.jpg';

const About = () => {
  return (
    <div className="Home" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="about-container">
        <h1 className="about-title">About DiscoverMoviz</h1>
        <p className="about-description">
          Welcome to DiscoverMoviz, your ultimate destination for exploring and discovering
          the world of movies and web series. We strive to provide you with a curated selection
          of top-rated movies, web series, and much more.
        </p>
        <p className="about-description">
          Whether you're a fan of Marvel Cinematic Universe (MCU), DC Universe (DCU), or
          looking for the latest trending web series, DiscoverMoviz has got you covered. Create
          your personalized WatchList, explore our services, and embark on a cinematic journey
          like never before.
        </p>
        <p className="about-description">
          Join us in this adventure of cinematic exploration, and let DiscoverMoviz be your
          go-to platform for all things movies and entertainment.
        </p>

        {/* Add a button to navigate to the home page */}
        <Link to="/">
          <button className="home-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
