import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Enregistrement</div>
    <div className={props.step2 ? 'active' : ''} >Expédition</div>
    <div className={props.step4 ? 'active' : ''} >Faire une commande</div>
  </div>
}

export default CheckoutSteps;