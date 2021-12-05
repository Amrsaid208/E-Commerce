import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { BsTypeH1 } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import "./checkout.css";
import Price from "./price";

function Checkout({
  handleSubmit,
  shipSubmit,
  price,
  num,
  onCheckOut,
  orderPlaced,
  handlePlace,
}) {
  console.log(orderPlaced);
  return (
    <>
      <header>
        <div className="checkout-nav">
          <div className="checkout">
            <div className="logo"></div>
            <h3>CHECKOUT</h3>
          </div>
          <div className="login">
            <p>Have an Account?</p>
            <button className="login-btn">LOGIN</button>
          </div>
        </div>
      </header>
      <section className="shipping">
        <div className="shipping-header">
          <h2>SHIPPING</h2>
        </div>
        <form action="" className="shipping-form" onSubmit={handleSubmit}>
          <div className="name">
            <input type="text" placeHolder="First Name" required />
            <input type="text" placeHolder="Last Name" required />
          </div>
          <div className="address">
            <input type="text" placeHolder="Street Adress" required />
          </div>
          <div className="sub-address">
            <input type="text" placeHolder="Apt/Suite/Unit (Optional)" />
          </div>

          <div className="city">
            <input type="text" placeHolder="City" required />
            <input type="text" placeHolder="Province" required />
          </div>
          <div className="postal">
            <input type="text" required placeHolder="Postal Code" />
          </div>
          <div className="submit-btn">
            <button type="submit">Continue</button>
          </div>
        </form>
      </section>
      <section className="payment">
        <div className="payment-header">
          <h2>PAYMENT</h2>
          {!shipSubmit ? <FaLock /> : null}
        </div>
        {shipSubmit ? (
          <form className="payment-form">
            <div className="card-owner name">
              <input type="text" placeHolder="First Name" required />
              <input type="text" placeHolder="Last Name" required />
            </div>
            <div className="card-num">
              <input type="text" placeHolder="Enter you card number" required />
            </div>
            <div className="card-info">
              <input type="month" placeHolder="Valid Thru MM/YY" required />
              <input type="text" placeHolder="CVV" required />
            </div>
          </form>
        ) : null}
      </section>
      <section className="contact-info">
        <div className="payment-header">
          <h2>Contact info</h2>
          {!shipSubmit ? <FaLock /> : null}
        </div>
        {shipSubmit ? (
          <form onSubmit={handleSubmit}>
            <div className="mail">
              <input type="mail" placeHolder="Example@gmail.com" required />
            </div>

            <div className="phone">
              <input type="phone" placeHolder="20 01066042161" required />
            </div>
            <Price price={price} num={num} onCheckOut />
          </form>
        ) : null}
      </section>
      <section className={orderPlaced ? "order-placed" : "hide"}>
        <div className="placed">
          <h3>Your order have been placed </h3>
          <Link to="/">
            <button>Contiue Shopping</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Checkout;
