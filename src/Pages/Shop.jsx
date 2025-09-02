import { ShopData } from "../assets/mockdata";
import ProductCard from "../components/ProductCard";
import { useState, useContext } from "react";
import cart from "../assets/Cart.svg";
import ShoppingContext from "../contexts/ShoppingContext";

export default function Shop() {
  let cartItems = useContext(ShoppingContext).cartItems;

  function renderProducts() {
    let productsArray = [];

    for (let i = 0; i < ShopData.length; i++) {
      productsArray.push(
        <ProductCard
          key={i}
          imgUrl={ShopData[i].imageUrl}
          title={ShopData[i].name}
          price={ShopData[i].price}
        />
      );
    }

    return productsArray;
  }

  return (
    <>
      <div className="header">
        <h3>Shop</h3>
        <div className="cartHolder">
          <object
            data={cart}
            type="image/svg+xml"
            width="35px"
            height="35px"
          ></object>
          <h5 className="cartCount">{cartItems.length}</h5>
        </div>
      </div>

      {renderProducts()}
    </>
  );
}
