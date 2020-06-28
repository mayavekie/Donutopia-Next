import React, {useContext} from 'react';
import {CartContext} from "../../contexts/CartContext";

export const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

    return (
        <>
        <section className="cart-section">
            <h2>Producten in winkelmand</h2>
            <span>Aantal producten : {cart.length}</span>
            <br />
            {cart.map(item => (<h6> product: {item.name} - €{item.price} - #{item.quantity}</h6>))}
            <span>Totale prijs : {totalPrice}</span>
            <br/>
        </section>
        </>
    )
}