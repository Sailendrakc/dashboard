import ShoppingContext from "../contexts/ShoppingContext";
import { useContext } from "react";

export default function CartItem({ imgUrl, title, price, index }) {
  let setCartItems = useContext(ShoppingContext).setCartItems;

  function removeItem() {
    setCartItems((prev) => prev.filter((item, i) => i !== index));
  }

  return (
    <div className="cart-item">
      <img src={imgUrl} alt="Product Image" className="cart-item-image" />
      <h4>{title}</h4>
      <p>{price}</p>
      <button
        className="remove-item-button"
        onClick={() => {
          removeItem();
        }}
      >
        Remove
      </button>
    </div>
  );
}
