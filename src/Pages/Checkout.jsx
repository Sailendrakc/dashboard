import ShoppingContext from "../contexts/ShoppingContext";
import { useContext } from "react";
import CartItem from "../components/CartItem";

export default function Checkout() {
  let { cartItems, setCartItems } = useContext(ShoppingContext);

  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += parseFloat(cartItems[i].price.substring(1));
    }

    return total;
  }

  function renderCartItems() {
    if (cartItems.length === 0) {
      return (
        <h3>Your cart is empty. Please add some items from the shop page.</h3>
      );
    }

    let cartItemDivArray = [];
    for (let i = 0; i < cartItems.length; i++) {
      cartItemDivArray.push(
        <CartItem
          key={i}
          imgUrl={cartItems[i].imgUrl}
          title={cartItems[i].title}
          price={cartItems[i].price}
          index={i}
        />
      );
    }

    cartItemDivArray.push(
      <div className="cart-summary" key="cart-summary">
        <button
          key="clear-cart"
          className="clear-cart-button"
          onClick={() => setCartItems([])}
        >
          Clear Cart
        </button>

        <h3>Total price : ${calculateTotal()}</h3>

        <button className="purchase-button">Purchase</button>
      </div>
    );

    return cartItemDivArray;
  }

  return (
    <>
      <div className="header">
        <h3>Checkout</h3>
      </div>
      <div className="checkout-container">{renderCartItems()}</div>
    </>
  );
}
