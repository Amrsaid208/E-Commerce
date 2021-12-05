import react from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./price.css";

function Price({
  price,
  num,
  onCheckOut,
  handlePlace,
  orderPlaced,
  setOrderPlaced,
}) {
  price = price.toFixed(2);
  return (
    <>
      <div className="price-tot">
        <div className="price-upper">
          {num > 1 ? (
            <h3>You have {num} items in your cart</h3>
          ) : (
            <h3>You have 1 item in your cart</h3>
          )}
        </div>
        <div className="price-tot-lower">
          <h3>total price is :${price}</h3>
          {!onCheckOut ? (
            <Link to="checkout">
              <button>Proced to checkout</button>
            </Link>
          ) : (
            <button>Place Order</button>
          )}
        </div>
      </div>
    </>
  );
}
export default Price;
