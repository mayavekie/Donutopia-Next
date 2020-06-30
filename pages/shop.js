import React, {useState, useContext} from "react"
import axios from "axios"
import Link from "next/link"
import Header from "../Components/Header"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import {CartProvider, CartContext} from "../contexts/CartContext"
import {Cart} from "../Components/Shop/Cart"
import {ProductItem} from "../Components/Shop/ProductItem"
import Layout from "../Components/Layout"



export default function Products({products, categories}){
    //Kwantiteit per product
    const [count, setCount] = useState(0)
    const handleClickAdd = () => {
      setCount(count +1)
    }
    const handleClickMin = () => {
      count > 0 && setCount(count-1)
    }

    //category filter
    const handleCategoryClick = () => {
      categories.map(category =>{
        if (category.id === product) {

        }
      })
    }

    return (
        <>
        <Layout  title="Shop" description="De lekkerste donutwinkel van België heeft nu ook een online shop waar je naar hartelust zo veel donuts kan kopen als je zelf wilt." image="images/shop-header.jpg"/>
          <section className="shop-categories">
          <Link href={`/bestelling`}><a></a></Link>

    <h2>Categorieën</h2>
            <ul>
              { categories.map(category => {
                return (
                  <li key={category.id}>
                    <input type="checkbox" id={category.name} name={category.name} value={category.id} />
                    <label for={category.name} >{category.name}</label>
                  </li>
                )
              }
              )}
            </ul>
          </section>
          <section className="shop-product">
            <CartProvider>
              <Cart/>
              <ul className="shop-products-list">
                { products.map(product => {
                    return (
                      <ProductItem product={product}/>
                    )
                  })
                }
              </ul>
            </CartProvider>
            
          </section>
          <Footer/>
        </>
      )
}

export const getServerSideProps = async () => {
    const response1 = await axios.get('https://wdev.be/wdev_maya/eindwerk/api/products')
    const response2 = await axios.get("https://wdev.be/wdev_maya/eindwerk/api/categories")
    const [products, categories] = await axios.all([response1, response2])
    return {
      props: {
        products: products.data['hydra:member'],
        categories: categories.data['hydra:member']
      }
    }
}