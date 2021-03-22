import { useContext } from "react";
import { ShopContext } from "../../../context";

import "./basketItem.css";

function BasketItem(props) {
    const { id, name, price, quantity } = props;

    const { removeFromBasket, decQuantity, incQuantity } = useContext(
        ShopContext
    );

    return (
        <li className="collection-item">
            <span className="wrapper">
                {name}{" "}
                <i
                    className="material-icons quantity"
                    onClick={() => {
                        decQuantity(id);
                    }}
                >
                    remove
                </i>{" "}
                x{quantity}{" "}
                <i
                    className="material-icons quantity"
                    onClick={() => {
                        incQuantity(id);
                    }}
                >
                    add
                </i>{" "}
                = {price * quantity}
                <div
                    className="secondary-content right-element"
                    onClick={() => removeFromBasket(id)}
                >
                    <i className="material-icons ">close</i>
                </div>
            </span>
        </li>
    );
}
export default BasketItem;
