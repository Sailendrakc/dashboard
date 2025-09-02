import { useState, useContext } from "react";
import ShoppingContext from "../contexts/ShoppingContext";

export default function ProductCard({ imgUrl, title, price }) {
  const [optionIndex, setOptionIndex] = useState(0);
  let addItemsToCart = useContext(ShoppingContext).setCartItems;

  function renderOptions() {
    let optionsArray = [];
    if (imgUrl.length > 1) {
      for (let i = 0; i < imgUrl.length; i++) {
        optionsArray.push(
          <div
            key={i}
            className={`product-option${i == optionIndex ? "-active" : ""} `}
            onClick={() => setOptionIndex(i)}
            style={{ backgroundColor: imgUrl[i].color }}
          ></div>
        );
      }
    }

    optionsArray.push(
      <button
        key="add-to-cart"
        className="add-to-cart-button"
        onClick={() =>
          addItemsToCart((prev) => [
            ...prev,
            { title, price, imgUrl: imgUrl[optionIndex].url },
          ])
        }
      >
        Add to Cart
      </button>
    );

    return <div className="product-options">{optionsArray}</div>;
  }

  return (
    <div className="product-card">
      <img
        src={imgUrl[optionIndex].url}
        alt="Product Image"
        className="product-image"
      />
      <div className="product-name">
        <h4>{title}</h4>
      </div>
      <div className="product-price">
        <p>{price}</p>
      </div>
      {renderOptions()}
    </div>
  );
}
