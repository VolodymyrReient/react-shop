import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../../config";

import { ShopContext } from "../../context";

import Preloader from "../Preloader/Preloader";
import ProductCards from "../ProductCards/ProductCard";
import Cart from "../Cart/Cart";
import BasketList from "../Cart/BasketList/BasketList";
import Alert from "../Alert/Alert";
import "./main.css";

function Main() {
    const { loading, isBasketShow, alertName, setGoods, order } = useContext(
        ShopContext
    );

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <ProductCards />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
}

export default Main;
