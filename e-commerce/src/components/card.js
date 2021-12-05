import react from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import "./card.css";

function Card({
  prod,
  addToCart,
  onCart,
  removeFromCart,
  Count,
  handleUpdate,
}) {
  let { id, title, category, description, image, price } = prod;
  price = price.toFixed(2);
  // console.log(prodsCount);
  return (
    <>
      <article className="card">
        <div className="pic">
          <img src={image} alt="sora" />
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
        {/* <div className="desc">
          <p>{description}</p>
        </div> */}

        <div className="price">
          <p>
            <div className="dollar">$</div>
            {price}
          </p>
          {onCart ? (
            <div className="cart-card-counter">
              {Count[id] > 1 ? (
                <span onClick={() => handleUpdate(id, -1)}>
                  <BsDash />
                </span>
              ) : (
                <span onClick={() => handleUpdate(id, 0)}>
                  <BsDash />
                </span>
              )}

              {Count[id] > 1 ? <p>{Count[id]} Pieces</p> : <p>1 Piece</p>}
              <span onClick={() => handleUpdate(id, 1)}>
                <BsPlus />
              </span>
            </div>
          ) : null}
        </div>
        <div className="btns">
          {!onCart ? (
            <button onClick={() => addToCart(prod)}>add to cart</button>
          ) : (
            <button onClick={() => removeFromCart(prod, id)}>
              Remove from cart
            </button>
          )}
        </div>
      </article>
    </>
  );
}
export default Card;
