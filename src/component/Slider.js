import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import img1 from '../assets/Topgun.jpg'
import img2 from '../assets/Transfoemers.jpg'
import img3 from '../assets/After.jpeg'
import './Slider.css'
export default function Slide() { 
return ( 
	<div style={{ display: 'block', width: '100%', }}>  
	<Carousel> 
		<Carousel.Item interval={3000}> 
		<img 
			className="d-block w-100"
   			 src={img1}
			alt="Image One"
		/> 
		
		<Carousel.Caption> 
		<div className="columns">
            <div className="column is-full featured_wrapper p-0">
              <div className="title_wrapper">
                <span className="has-text-white">Trending Today</span>
                <h1 className="title is-1 has-text-white">The Untold Story of the great Lorem Ipsum</h1>
                <button className="button is-medium">Watch It Now</button>
              </div>
            </div>
          </div>
		</Carousel.Caption> 
		</Carousel.Item> 
		<Carousel.Item interval={2000}> 
		<img 
			className="d-block w-100"
    		  src={img2}
			alt="Image Two"
		/> 
		<Carousel.Caption> 
		<div className="columns">
            <div className="column is-full featured_wrapper p-0">
              <div className="title_wrapper">
                <span className="has-text-white">Trending Today</span>
                <h1 className="title is-1 has-text-white">The Untold Story of the great Lorem Ipsum</h1>
                <button className="button is-medium">Watch It Now</button>
              </div>
            </div>
          </div>
		</Carousel.Caption> 
		</Carousel.Item> 
		<Carousel.Item interval={1000}> 
		<img 
			className="d-block w-100"
    	  src={img3}
			alt="Image Two"
		/> 
		<Carousel.Caption> 
		<div className="columns">
            <div className="column is-full featured_wrapper p-0">
              <div className="title_wrapper">
                {/* <span className="has-text-white">Trending Today</span> */}
                <h1 className="title is-1 has-text-white">The Untold Story of the great Lorem Ipsum</h1>
                <button className="button is-medium">Watch It Now</button>
              </div>
            </div>
          </div>
		</Carousel.Caption> 
		</Carousel.Item> 
	</Carousel> 
	</div> 
); 
}