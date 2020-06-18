import React from "react"
import axios from "axios"
import Link from "next/link"
import Header from "../Components/Header"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"


export default function Products({products}){
    return (
        <>
          <Nav/>
          <Header title="Shop" image="images/shop-header.jpg" alt="shop-header" />
          <section class="shop-product">
            <ul >
              { products.map(product => {
                  return (
                    <li key={product.id}>
                      <h2>{product.name}</h2>
                      <p dangerouslySetInnerHTML= {{__html: product.description}}></p>
                      <Link href={`/product/${product.id}`}><a>Bekijk product</a></Link>
                    </li>
                  )
                })
              }
            </ul>
          </section>
          <Footer/>
        </>
      )
}

export const getServerSideProps = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/products')
    const products = response.data['hydra:member']
    return {
      props: {
        products
      }
    }
  }