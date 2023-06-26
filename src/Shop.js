import React, {useEffect,useRef, useState} from 'react';

import { Button, Container, Col, Row, Toast, ToastContainer} from 'react-bootstrap';
import Car1 from './accessories/car1.avif'
import Car2 from './accessories/car2.avif'
import Car3 from './accessories/car3.avif'
import Car4 from './accessories/car4.avif'
import Solar from './accessories/solar.avif'
import SolarRoof from './accessories/SolarRoof.avif'
import Powerwall from './accessories/Powerwall.avif'
import Accessories from './accessories/Accessories.avif'
import {  BiCart } from 'react-icons/bi';


import ShoppingCartCheckout from './ShoopingCartCheckout';

function Shop() {

const [showCheckout, setShowCheckout] = useState(false);
const [showSuccessMessage, setShowSuccessMessage] = useState(false);

useEffect(() => {
  let timer;

  if (showSuccessMessage) {
    timer = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  }

  return () => clearTimeout(timer);
}, [showSuccessMessage]);

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
const modelNames = ['Model 3', 'Model Y', 'Model S','Model X', 'Solar Panels', 'Solar Roof', 'Powerwall', 'Accessories'];
const modelPrices = [31740, 32000, 40000, 48000, 35000, 15000, 10000, 7500, 1000];  
const modelImages = [Car1, Car2, Car3, Car4, Solar, SolarRoof, Powerwall, Accessories]; 
const [tax, setTax] = useState('After Federal Tax Credit');
const [priceHolder, setPriceHolder] = useState('Starting at $');
const [isScrolling, setIsScrolling] = useState(false);
 
  useEffect(() => {
    const container = containerRef.current;
    let lastScrollTop = 0;
      let timeoutId = null;

      const resetState = () => {
    setTax('');
    setPriceHolder('');
    setModelName('');
    setModelPrice('');
    setModelImage('');
    setIsScrolling(true);
  };
     
    const handleScroll = () => {
      const currentPosition = container.scrollTop;
    

      if (currentPosition > lastScrollTop) {
        // Scrolling down
       
        
        const scrollStep = Math.ceil(currentPosition / window.innerHeight) * window.innerHeight;
        smoothScroll(container, scrollStep, 15); // Decreased duration to 10ms
       const scrollNum = (currentPosition + window.innerHeight) / window.innerHeight * 100 /100 -1
         
            

       clearTimeout(timeoutId);
       resetState();

      // Set a timeout to delay the update of setTax and setPriceHolder
      timeoutId = setTimeout(() => {
         setIsScrolling(false);
        setTax('After Federal Tax Credit');
        setPriceHolder('Starting at $');
        setModelName(modelNames[scrollNum]);
        setModelPrice(modelPrices[scrollNum]);
        setModelImage(modelImages[scrollNum]);
      }, 150); // Adjust the delay time as needed
   
    
    
    } else if (currentPosition < lastScrollTop) {
        // Scrolling up
        
        const scrollStep = Math.floor(currentPosition / window.innerHeight) * window.innerHeight;
        smoothScroll(container, scrollStep, 15); // Decreased duration to 10ms
        const scrollNum = (currentPosition + window.innerHeight) / window.innerHeight * 100 /100 -1
    if (scrollStep >= 0) {
         
           
           
    
       
        clearTimeout(timeoutId);
        resetState();

        // Set a timeout to delay the update of setTax and setPriceHolder
        timeoutId = setTimeout(() => {
           setIsScrolling(false);
          setTax('After Federal Tax Credit');
          setPriceHolder('Starting at $');
          setModelName(modelNames[scrollNum]);
          setModelPrice(modelPrices[scrollNum]);
          setModelImage(modelImages[scrollNum]);
        }, 150); // Adjust the del
     
          
        }
  
    }

      lastScrollTop = currentPosition;
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const smoothScroll = (element, targetPosition, duration = 2000) => {
    const startPosition = element.scrollTop;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animation = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const t = Math.min(elapsedTime / duration, 1); // Ensure t is capped at 1
      const position = easeInOutQuart(t);

      element.scrollTop = startPosition + distance * position;

      if (t < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

 const easeInOutQuart = (t) => {
  t /= 0.5;
  if (t < 1) return 0.5 * Math.pow(t, 2);
  t -= 2;
  return -0.5 * (Math.pow(t, 2) - 2);
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
     // Vibrate the cart icon
   
  }
   setVibrate(true); // Activate the vibration effect
};

const [vibrate, setVibrate] = useState(false);

useEffect(() => {
  if (vibrate) {
    // Apply the vibration effect
    const timeoutId = setInterval(() => {
      setVibrate(false);
    }, 700);

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if component unmounts before the effect ends
    };
  }
}, [vibrate]);



    

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
          <img src={Car4} alt="Car4" />
        </div>
     </div>
     <div  className='content-container'>
          <div className="backgroundImage">
          <img src={Solar} alt="Solar" />
        </div>
     </div>
      <div  className='content-container'>
          <div className="backgroundImage">
          <img src={SolarRoof} alt="SolarRoof" />
        </div>
     </div>
      <div  className='content-container'>
          <div className="backgroundImage">
          <img src={Powerwall} alt="Powerwall" />
        </div>
     </div>
      <div  className='content-container'>
          <div className="backgroundImage">
          <img src={Accessories} alt="Accessories" />
        </div>
     </div>
 
 <Container fluid className="text-center" style={{ position: 'fixed', top: '30px', left: '1%' }}>
  <Row className="justify-content-center">
    <Col xl={1} lg={2} md={1} sm={3} xs={4} className="logo-column">
      <svg
        className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
        viewBox="0 0 342 35"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
      >
      <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="black" ></path>
      </svg>

      </Col>
   <Col xl={10} lg={8} sm={7} md={10} xs={4} className="mt-5">
  <div className="mt-5 model-name" style={{ color: 'black', fontSize: '4rem', fontWeight: '440' }}>
    {modelName}
  </div>
  <p className="model-price">{priceHolder}{modelPrice}</p>
  <p className='tax'>{tax}</p>
  <Row className='mt-5'>
    <Col xs={12} className="text-center mt-5">
      <Button
        className="px-1 py-2 add-to-cart-button d-inline-block mt-5"
        variant="outline-light btn-lg"
        onClick={handleAddClick}
        style={{ fontSize: '2rem', border: '3px solid white', position: 'absolute',left: '42vw', top: '67vh' }}
        disabled={isScrolling}     
     >
        Add to Cart
      </Button>
    </Col>
  </Row>
</Col>

   <Col xl={1} lg={2} md={1} sm={2} xs={4} className="cart-column mt-3">
  <div style={{ position: 'relative', marginTop: '2rem' }} className={` ${vibrate ? 'vibrate' : ''}`}>
    <BiCart
      onClick={handleCartClick}
      size={70}
      style={{ cursor: 'pointer',position: 'absolute', right: '5vw' }}
      className={`bicart ${vibrate ? 'vibrate' : ''}`}
    />
    {items.length > 0 && (
      <span className="cart-item-count" >
        {items.length}
      </span>
    )}
  </div>
</Col>


  </Row>
  
</Container>

   {showCheckout && (
      <div className="shopping-cart-overlay">
        <ShoppingCartCheckout showSuccessMessage={showSuccessMessage} setShowSuccessMessage={setShowSuccessMessage} items={items} setItems={setItems} onClose={handleOverlayClose} />
      </div>
    )}
    <ToastContainer className="success-toast-container">
  <Toast className={`success-toast ${showSuccessMessage ? 'show' : 'hide'}`}>
    <Toast.Header closeButton={false}>
      <strong className="me-auto">Success</strong>
    </Toast.Header>
    <Toast.Body>
      <p>Your checkout was successful!</p>
    </Toast.Body>
  </Toast>
</ToastContainer>

    </div>
      
  );
}

export default Shop;