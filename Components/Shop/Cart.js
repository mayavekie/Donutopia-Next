import React, {useContext} from 'react';
import {CartContext} from "../../contexts/CartContext";
import Axios from 'axios';
import { parseCookies } from 'nookies'
import jwt_decode from 'jwt-decode'


export const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    //berekenen totale prijs winkelmandje
    const totalPrice = cart.reduce((acc, curr) => acc + (curr.priceProduct * curr.quantity), 0)

    const handleOrder = () => {
        addOrder()
    }
    //Bestelling plaatsen
    const addOrder = () => {
        //User id ophalen
        const cookies= parseCookies();    
        const decode = jwt_decode(cookies.jwtToken)
        const id = decode.id
        const userId = `api/user/${id}`

        //Details ophalen
        const orderDetails = cart.map((product) => {
            return {
                quantity: product.quantity,
                priceProduct: product.priceProduct,
                product: product.product,
            }
        })
        //Bestelling posten in de databank
        Axios.post("https://wdev.be/wdev_maya/eindwerk/api/orders", {
            orderDetails,
            user: userId
        })
        .then( response => {
            window.location = "/profile"
        })
        .catch(error => {
            console.log(error.response)
        })
    }


    return (
        <>
        <section className="cart-section">
            <h2>Producten in winkelmand</h2>
            <p className="p-cart">Aantal producten : {cart.length}</p>
            {cart.map(product => (
            <span key={product.name} className="product-basket">  {product.name} - €{product.priceProduct} - {product.quantity}x  </span>
            ))}         
            <p className="p-cart">Totale prijs : {totalPrice}</p>
            <button onClick={handleOrder}>Bestel</button>
        </section>
        </>
    )
}