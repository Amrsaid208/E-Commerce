import react from "react";
import { useState } from "react";
import "./header.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { BsHandbag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(true);
  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <header>
        <div className="desktop-header">
          <div className="header-upper">
            <div className="links">
              <a href="#">help</a>
              <a href="#">returns</a>
              <a href="#">order tracker</a>
              <a href="#">newsletter</a>
              <a href="#">signup</a>
              <a href="#">log in</a>
            </div>
          </div>
          <div className="header-lower">
            <Link to="/">
              <div className="logo"></div>
            </Link>
            <div className="header-lower-links">
              <a href="#">men</a>
              <a href="#">women</a>
              <a href="#">kids</a>
              <a href="#">sports</a>
              <a href="#">brands</a>
              <a href="#">collections</a>
              {/* <AiOutlineMinus /> */}
            </div>
            <div className="desktop-bag">
              <Link to="cart">
                <BsHandbag className="bag" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-header">
          <div className="ham-menu" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <div className="bag-part">
            <Link to="cart">
              <BsHandbag className="bag" />
            </Link>
          </div>
        </div>
        <div className={show ? "sidebar" : "go-right"}>
          <div className="menu-logo">
            <div className="logo"></div>
          </div>
          <div className="close" onClick={toggleMenu}>
            <AiOutlineClose />
          </div>
          <div className="list-st">
            <ul>
              <li>
                <a className="bold" href="#">
                  MEN
                </a>

                <AiOutlineRight />
              </li>
              <li>
                <a className="bold" href="#">
                  outlet
                </a>
                <AiOutlineRight />
              </li>
              <li>
                <a className="bold" href="#">
                  WOMEN
                </a>
                <AiOutlineRight />
              </li>
              <li>
                {" "}
                <a href="#">kids</a>
                <AiOutlineRight />
              </li>
              <li>
                <a href="#">brands</a>
                <AiOutlineRight />
              </li>
              <li>
                {" "}
                <a href="#">collections</a>
                <AiOutlineRight />
              </li>
              <li>
                <a href="#">new arrivals</a>
                <AiOutlineRight />
              </li>
            </ul>
          </div>
          <div className="list-st">
            <ul>
              <li>
                <a href="#">My Profile</a>
              </li>
              <li>
                <a href="#">Store locator</a>
              </li>
              <li>
                <a href="#">Order status</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Order Tracker</a>
              </li>
              <li>
                <a href="#">Return</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
