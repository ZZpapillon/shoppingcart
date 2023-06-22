import React, {useEffect,useRef, useState} from 'react';

import { Button, Container, Col, Row} from 'react-bootstrap';
import Car1 from './accessories/car1.avif'
import Car2 from './accessories/car2.avif'
import Car3 from './accessories/car3.avif'
import Solar from './accessories/solar.avif'
import {  BiCart } from 'react-icons/bi';
import ShoppingCartCheckout from './ShoopingCartCheckout';

function Shop() {

const [showCheckout, setShowCheckout] = useState(false);
const [items, setItems] = useState([]);
  const handleCartClick = () => {
    console.log('clicked')
    setShowCheckout(true);
  };
  const handleOverlayClose = () => {
  setShowCheckout(false); // Hide the overlay
};

   // Select the scrollable container
const containerRef = useRef(null);
const [modelName, setModelName] = useState('Model 3');
const [modelPrice, setModelPrice] = useState(31740)
const [modelImage, setModelImage] = useState(Car1)
const modelNames = ['Model 3', 'Model Y', 'Model S', 'Solar Panels'];
const modelPrices = [31740, 32000, 40000, 48000];  
const modelImages = [Car1, Car2, Car3, Solar]; 
let lastScrollTop = 0;


 
  useEffect(() => {
    const container = containerRef.current;
    
    const handleScroll = () => {
      const currentPosition = container.scrollTop;

      if (currentPosition > lastScrollTop) {
        // Scrolling down
        
        const scrollStep = Math.ceil(currentPosition / window.innerHeight) * window.innerHeight;
        smoothScroll(container, scrollStep, 12); // Decreased duration to 10ms
       
                 
          setModelName(modelNames[scrollStep/821]);
          setModelPrice(modelPrices[scrollStep/821]);
           setModelImage(modelImages[scrollStep/821]);
        

    
    } else if (currentPosition < lastScrollTop) {
        // Scrolling up
        
        const scrollStep = Math.floor(currentPosition / window.innerHeight) * window.innerHeight;
        smoothScroll(container, scrollStep, 12); // Decreased duration to 10ms
    if (scrollStep >= 0) {
          setModelName(modelNames[scrollStep / 821]);
           setModelPrice(modelPrices[scrollStep/821])
            setModelImage(modelImages[scrollStep/821]);
        }
  
    }

      lastScrollTop = currentPosition;
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScroll = (element, targetPosition, duration = 12) => {
    const startPosition = element.scrollTop;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animation = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const t = Math.min(elapsedTime / duration, 1); // Ensure t is capped at 1
      const position = easeInOutQuad(t);

      element.scrollTop = startPosition + distance * position;

      if (t < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const easeInOutQuad = (t) => {
    t /= 0.5;
    if (t < 1) return 0.5 * t * t;
    t--;
    return -0.5 * (t * (t - 2) - 1);
  };
 
const handleAddClick = () => {
  const itemIndex = items.findIndex((item) => item.name === modelName);
  if (itemIndex !== -1) {
    const updatedItems = [...items];
    updatedItems[itemIndex].quantity += 1;
    setItems(updatedItems);
  } else {
    const newItem = {
      name: modelName,
      price: modelPrice,
      image: modelImage,
      quantity: 1
    };
    setItems([...items, newItem]);
  }
};


    

 return (
    <div className='allCars' ref={containerRef}>
 <div className="content-container mt-5">
   <div className="backgroundImage">
          <img src={Car1} alt="Car1" />
        </div>
     </div>
     <div className='content-container'>
          <div className="backgroundImage">
          <img src={Car2} alt="Car2" />
        </div>
     </div>
     <div  className='content-container'>
          <div className="backgroundImage">
          <img src={Car3} alt="Car3" />
        </div>
     </div>
     <div  className='content-container'>
          <div className="backgroundImage">
          <img src={Solar} alt="Solar" />
        </div>
     </div>
 
     <Container className='text-center' style={{position: 'fixed', top: '30px', left: '1%'}} >
        <Row className="justify-content-center" >
          <Col sm={3} md={1}>
        <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" width="120" height="120"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="black" ></path></svg>

        </Col>
          <Col sm={6} md={10} className='mt-5'>
           <div className='mt-5' style={{color: 'black', fontSize: '4rem', fontWeight: '440'}}>
            {modelName}
            </div>
            <p>Starting at ${modelPrice}</p>
            <p>After Federal Tax Credit</p>
            
            
                
          </Col>
          <Col className="ps-5 mt-5" sm={3} md={1}>
  <div onClick={handleCartClick}>
    <BiCart size={80} />
  </div>
</Col>

        </Row>
        <Button className="px-1 py-2" variant='outline-black btn-lg'
            onClick={handleAddClick}
            style={{position: 'fixed', top: '78%', left: '41%', fontSize: '2rem', border: '3px solid black'}}>
                Add to Cart
                </Button>
      </Container>
   {showCheckout && (
      <div className="shopping-cart-overlay">
        <ShoppingCartCheckout items={items} setItems={setItems} onClose={handleOverlayClose} />
      </div>
    )}


    </div>
      
  );
}

export default Shop;