import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder } from '../actions/orderActions';
function OrderScreen(props) {

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading , order , error } = orderDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
  }, [error]);

  return loading ? <div>Chargement ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              Expédition
          </h3>
            <div>
              {order.shipping.address}, {order.shipping.city},
          {order.shipping.postalCode}, {order.shipping.country}, +{order.shipping.call},
          </div>
            <div>
              {order.isDelivered ? "Delivered at " + order.deliveredAt : "Not Delivered."}
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Chariot
          </h3>
                <div>
                  Prix
          </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Cariot vide
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>

                        </div>
                        <div>
                          Qty: {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        {item.price}fr
                      </div>
                    </li>
                  )
              }
            </ul>
          </div>


        </div>
        <div className="placeorder-action">
          <ul>
            <li className="placeorder-actions-payment">

            </li>
            <li>
              <h3>Résumé Commande</h3>
            </li>
            <li>
              <div>Articles</div>
              <div>{order.itemsPrice}fr</div>
            </li>
            <li>
              <div>Expédition</div>
              <div>{order.shippingPrice}fr</div>
            </li>
            <li>
              <div>Total Commande</div>
              <div>{order.totalPrice}fr</div>
            </li>
          </ul>



        </div>

      </div>
    </div>

}

export default OrderScreen;
