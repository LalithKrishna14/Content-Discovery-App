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
        <div className="homepage--content-box">
          <section className="content-wrapper">
            <div className="content-wrapper--subSection1">
              <section className="top-categories">
                <h5 className="heading">Top Categories</h5>
                <div to="/in/en/support/solutions/folders/68000000092" className="styled-link-default top-categories--link">
                  <div>Subscription, Plans and Pricing</div>
                  <span className="angle-right">›</span>
                </div>
                <div to="/in/en/support/solutions/folders/YOUR_FOLDER_ID" className="styled-link-default top-categories--link">
                  <div>Your Top Category</div>
                  <span className="angle-right">›</span>
                </div>
                {/* Add more similar lines for other top categories */}
              </section>
              <section className="top-queries">
                <h5 className="heading">Top Queries</h5>
                <div to="/in/en/support/solutions/articles/68000001237-Disney%2B-Hotstar-subscription-plans" className="styled-link-default top-queries--link">
                  <div>Premium subscription plans</div>
                  <span className="angle-right">›</span>
                </div>
                <div to="/in/en/support/solutions/articles/YOUR_ARTICLE_ID" className="styled-link-default top-queries--link">
                  <div>Your Top Query</div>
                  <span className="angle-right">›</span>
                </div>
                {/* Add more similar lines for other top queries */}
              </section>
            </div>
            <h5 className="heading all-categories--header">All Categories</h5>
            <section className="all-categories--content">
              {/* Add similar sections for different category groups */}
            </section>
          </section>
          <div className="homepage--content-box--footer">
            <footer className="footer">
              <h6 className="footer--heading">Need more help?</h6>
              <div className="footer--cta-btns" id="footer--cta-btns">
                <button className="MuiButton-root MuiButton-outlined footer--contact-us MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root button css-pdrvyq" tabIndex="0" type="button" id="contact-us">
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                    <img alt="" src="/_next/image?url=%2Fhelp.svg&amp;w=48&amp;q=75" decoding="async" data-nimg="intrinsic" srcSet="/_next/image?url=%2Fhelp.svg&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fhelp.svg&amp;w=48&amp;q=75 2x" />
                  </span>
                  Contact us
                </button>
                <button className="MuiButton-root MuiButton-outlined footer--whats-app MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root button css-pdrvyq" tabIndex="0" type="button" id="whatsapp">
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                    <img alt="" src="/_next/image?url=%2Fwhatsapp.svg&amp;w=48&amp;q=75" decoding="async" data-nimg="intrinsic" srcSet="/_next/image?url=%2Fwhatsapp.svg&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fwhatsapp.svg&amp;w=48&amp;q=75 2x" />
                  </span>
                  Chat with us
                </button>
                {/* Add more similar lines for other footer buttons */}
              </div>
            </footer>
          </div>
        </div>
        <Link to="/">
          <button className="home-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
