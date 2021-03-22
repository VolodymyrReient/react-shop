import { useContext } from "react";

import { ShopContext } from "../../context";
import ProductItem from "../ProductItem/ProductItem";
import "./productcard.css";

function ProductCards() {
    const { goods = [] } = useContext(ShopContext);
    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <ProductItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export default ProductCards;
