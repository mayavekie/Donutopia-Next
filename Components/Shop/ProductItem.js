import React, { useContext, useState } from 'react';
import Link from 'next/link'
import { CartContext } from '../../contexts/CartContext'
import { parseCookies } from 'nookies'


export const ProductItem = ({product}) => {
    //Kwantiteit per product
    const [count, setCount] = useState(0)
    const handleClickAdd = () => {
      setCount(count +1)
    }
    const handleClickMin = () => {
        count > 0 && setCount(count-1)
    }    

    //Bestelling afhandelen
    const handleLogIn = () => {
        const cookies = parseCookies()
        if (typeof cookies.jwtToken === 'undefined') {
            window.location = "/login"
        } 
        addToCart()
        setCount(0)
    }
    //producten in winkelmand plaatsen
    const [cart, setCart] = useContext(CartContext)
    const addToCart = () => {
        if (count > 0 ){
            const productInCart = { 
                product : `api/product/${product.id}`, 
                name: product.name, 
                priceProduct: product.price[0].price, 
                quantity: count, 
            }
      setCart(currentState => [...currentState, productInCart])}
    }

    return(
        <>
        <li key={product.id}>
            { product.images.length >= 0  &&
                <div className="image-product">
                    <Link href={`/product/${product.id}`}><a>
                        <img src={`https://wdev.be/wdev_maya/eindwerk/image.php?${product.images[0].image}&width=400&height=400&cropratio=2:1&image=/wdev_maya/eindwerk/images/products/${product.images[0].image}`} >
                        </img></a>
                    </Link>
                </div>
            }

            <Link href={`/product/${product.id}`}><a><h2>{product.name}</h2></a></Link>

            { product.price.length > 0 && 
                <p className="product-price">€{product.price[0].price}</p>
            }            
    <div className="product-counter">
            <button className="counter" onClick={handleClickMin} >-</button>
            <p>{count}</p>
            <button className="counter" onClick={handleClickAdd}>+</button>
            <button className="counter-add" onClick={handleLogIn} >Toevoegen</button>
            </div>
        </li>
        </>
    )
}