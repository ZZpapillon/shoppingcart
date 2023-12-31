import React, { useState,useEffect } from 'react';
import { Button, Modal, Card,  } from 'react-bootstrap';


function ShoppingCartCheckout({items, setItems, onClose, showSuccessMessage, setShowSuccessMessage}) {
  const [showModal, setShowModal] = useState(true);
   

  


  

  // Function to remove an item from the shopping cart
  const removeItemFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    // Perform the checkout logic
    // ...

    // Reset the shopping cart
    onClose()
    setItems([]);
    setShowModal(false);
    setShowSuccessMessage(true)
    console.log('yes')
  };
  useEffect(() => {
    calculateTotalPrice();
  }, );

const calculateTotalPrice = () => {
  let totalPrice = 0;

  items.forEach((item) => {
    
    const itemPrice = item.price * item.quantity;
    totalPrice += itemPrice;
  });

  return totalPrice;
};
 const incrementQuantity = (itemIndex) => {
  const updatedItems = [...items];
  updatedItems[itemIndex].quantity += 1;
  setItems(updatedItems);
};

const decrementQuantity = (itemIndex) => {
  const updatedItems = [...items];
  if (updatedItems[itemIndex].quantity > 1) {
    updatedItems[itemIndex].quantity -= 1;
    setItems(updatedItems);
  }
};
   
  return (
  <div>
  <Modal show={showModal} onHide={onClose} centered size="xl" className="custom-modal">
    <Modal.Header closeButton className="custom-header">
      <Modal.Title>Shopping Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body className="custom-body">
      {items.length === 0 ? (
        <p>Your shopping cart is empty.</p>
       
      ) : (
        items.map((item, index) => {
          const itemIndex = items.findIndex((i) => i.name === item.name);
          const fullPrice = item.quantity * item.price
          

          return (
           <Card key={index} className="mb-3 custom-card">
  {index === itemIndex && (
    <Card.Body>
      <div className="d-flex align-items-start justify-items-start">
        <img
          src={item.image}
          alt={item.name}
          className="me-3"
        />
        <div>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Price: ${fullPrice}</Card.Text>
          <div className="d-flex quantity">
            <button className="btn btn-secondary btn-sm" disabled={item.quantity === 1} onClick={() => decrementQuantity(itemIndex)}>
              -
            </button>
            <span className="m-2">{item.quantity}</span>
            <button className="btn btn-secondary btn-sm" onClick={() => incrementQuantity(itemIndex)}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex delete-btn">
         <div className="delete-btn-inner">
        <Button variant="danger" onClick={() => removeItemFromCart(itemIndex)}>
          Delete
        </Button>
      </div>
      </div>
    </Card.Body>
  )}
</Card>

          );
        })
      )}
    </Modal.Body>
    <Modal.Footer className="custom-footer">
      <div className='me-4' >Total Price: ${calculateTotalPrice()}</div>
      <Button variant="primary" onClick={handleCheckout} disabled={items.length === 0}>
        Proceed to Buy
      </Button>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
 

    </div>




  );
};

export default ShoppingCartCheckout;
