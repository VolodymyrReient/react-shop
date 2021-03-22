import { useContext } from "react";

import { ShopContext } from "../../context";

import "./productItem.css";

function ProductItem(props) {
    const { id, name, description, price, full_background } = props;

    const { addToBasket } = useContext(ShopContext);
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                    <img src={full_background} alt={name} />
                </div>
                <div className="card-content">
                    <span className="card-title center">{name}</span>
                    <p className="center">{description}</p>
                </div>
                <div className="card-action">
                    <button
                        onClick={() =>
                            addToBasket({
                                id,
                                name,
                                price,
                            })
                        }
                        className="btn"
                    >
                        Buy
                    </button>
                    <span className="right" style={{ fontSize: "1.8rem" }}>
                        {price}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
