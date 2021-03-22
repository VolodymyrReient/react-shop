import { useContext } from "react";

import { ShopContext } from "../../../context";
import BasketItem from "../BasketItem/BasketItem";
import "./basketList.css";

function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } = useContext(
    ShopContext
  );

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active list-header">
        Basket{" "}
        <i className="material-icons" onClick={handleBasketShow}>
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => {
          
          return <BasketItem key={item.id} {...item} />;
        })
      ) : (
        <li className="collection-item">The basket is empty</li>
      )}
      <li className="collection-item active total">
        Total: {totalPrice}
        <button className="btn-small blue darken-4">Draw up</button>
      </li>
    </ul>
  );
}
export default BasketList;
