import React, { useContext, useState } from 'react';
import Link from 'next/link'
import { CartContext } from '../../contexts/CartContext'

export const ProductItem = ({product}) => {
    //count
    const [count, setCount] = useState(0)
    const handleClickAdd = () => {
      setCount(count +1)
    }
    const handleClickMin = () => {
      count > 0 && setCount(count-1)
    }

    //Bestelling
    const [cart, setCart] = useContext(CartContext)
    const addToCart = () => {
        if (count > 0 ){
      const productincart = { id : product.id, name: product.name, price: product.price[0].price, quantity: count}
      setCart(currentState => [...currentState, productincart])}
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
            {/* <p dangerouslySetInnerHTML= {{__html: product.description}}></p> */}

            { product.price.length > 0 && 
                <p className="product-price">€{product.price[0].price}</p>
            }            
    <div className="product-counter">
            <button className="counter" onClick={handleClickMin} >-</button>
            <p>{count}</p>
            <button className="counter" onClick={handleClickAdd}>+</button>
            <button className="counter-add" onClick={addToCart} >Toevoegen</button>
            </div>
        </li>
        </>
    )
}