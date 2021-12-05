import "./App.css";
import Header from "../src/components/header";
import { useState, useEffect } from "react";
import Card from "./components/card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Price from "./components/price";
import Checkout from "./components/checkout";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
</style>;

function App() {
  const [products, setProducts] = useState([]);
  const [cartProd, setCartProd] = useState([]);
  const [price, setPrice] = useState(0);
  const [onCart, setOnCart] = useState(false);
  const [onCheckOut, setCheckOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  let prodsCount = new Array(21).fill(1);
  const [Count, setCount] = useState([]);
  const [num, setNum] = useState(0);
  const [shipSubmit, setShipSubmit] = useState(false);
  useEffect(() => {
    setCount(prodsCount);
  }, []);

  const addToCart = (card) => {
    // console.log(prodsCount);
    const newProds = [...cartProd, card];
    if (!cartProd.includes(card)) {
      setNum(num + 1);
      setCartProd(newProds);
      setPrice(price + card.price);
    }
  };
  const handleUpdate = (index, todo) => {
    const newCount = [...Count];
    newCount[index] += todo;
    setCount(newCount);
    setNum(num + todo);
    setPrice(price + todo * products[index - 1].price);
  };
  const removeFromCart = (card, idx) => {
    let nwprice = 0;
    const nwprods = cartProd.filter((card) => card.id !== idx);
    setCartProd(nwprods);

    setPrice(price - card.price * Count[card.id]);
    setNum(num - Count[card.id]);
    Count[card.id] = 1;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShipSubmit(true);
  };
  const handlePlace = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };
  async function dataFetch() {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    await setProducts(data);
    console.log(data);
  }
  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/cart">
              <div>
                <Header />
                {cartProd.length ? (
                  <main>
                    {cartProd.map((prod) => {
                      return (
                        <>
                          <Card
                            key={prod.id}
                            prod={prod}
                            onCart={true}
                            removeFromCart={removeFromCart}
                            Count={Count}
                            handleUpdate={handleUpdate}
                          />
                        </>
                      );
                    })}
                    <Price
                      price={price}
                      num={num}
                      orderPlaced={orderPlaced}
                      setOrderPlaced={setOrderPlaced}
                    />
                  </main>
                ) : (
                  <div>
                    <div className="no-items">
                      <h2>You have no items yet , Enjoy shopping</h2>
                      <Link to="/">
                        <button>Go Shopping</button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Route>
            <Route path="/checkout">
              <Checkout
                handleSubmit={handleSubmit}
                shipSubmit={shipSubmit}
                price={price}
                num={num}
                onCheckOut={true}
                orderPlaced={orderPlaced}
              />
            </Route>
            <Route path="/">
              <Header />
              <main>
                <div className="products">
                  {products.map((prod) => {
                    return (
                      <Card
                        key={prod.id}
                        prod={prod}
                        addToCart={addToCart}
                        onCart={false}
                      />
                    );
                  })}
                </div>
              </main>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
