import React, {useState} from "react"
import axios from "axios"
import Link from "next/link"
import Header from "../Components/Header"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"


export default function Products({products, categories}){
    const [count, setCount] = useState(0)
    const handleClickAdd = () => {
      setCount(count +1)
    }
    const handleClickMin = () => {
      count > 0 && setCount(count-1)
    }

     

    return (
        <>
          <Nav/>
          <Header title="Shop" image="images/shop-header.jpg" alt="shop-header" />
          <section className="shop-categories">
            <h2>Categorieën</h2>
            <ul>
              { categories.map(category => {
                return (
                  <li key={category.id}>
                    <input type="checkbox" id={category.name} name={category.name} value={category.id} />
                    <label for={category.name}>{category.name}</label>

                  </li>
                )
              }
              )}
            </ul>
          </section>
          <section className="shop-product">
            <ul >
              { products.map(product => {
                  return (
                    <li key={product.id}>
                      { product.images.length >= 0  &&
                        <div className="image-product">
                          <Link href={`/product/${product.id}`}><a><img src={`https://wdev.be/wdev_maya/eindwerk/image.php?${product.images[0].image}&width=1000&height=600&cropratio=1&image=/wdev_maya/eindwerk/images/products/${product.images[0].image}
`} ></img></a></Link>
                        </div>
                      }

                      <Link href={`/product/${product.id}`}><a><h2>{product.name}</h2></a></Link>
                      <p dangerouslySetInnerHTML= {{__html: product.description}}></p>
                      <p className="product-price">€{product.price[0].price}</p>
                      <div className="product-counter">
                        <button className="counter" onClick={handleClickMin}>-</button>
                        <p>{count}</p>
                        <button className="counter" onClick={handleClickAdd}>+</button>
                        <button className="counter-add" >Toevoegen</button>
                      </div>
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