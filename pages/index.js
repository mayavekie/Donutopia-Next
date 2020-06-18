import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import Link from "next/link"
import Axios from "axios"

export default function Home({categories, product}) {
  // console.log(product)
  return (
    <>

      <Nav/>
      <header class="header-home">
        <h1>Freshly baked donuts, everyday</h1>
        <button><Link href="/shop"><a title="button-shop">Shop</a></Link></button>
      </header>
      <section class="home-category">
      { categories.map(category => {
                return (
                  <article style={{backgroundImage:`url(http://127.0.0.1:8000/images/categories/${category.img})`, backgroundSize:'cover'}}>
                    <h2>{category.name}</h2>
                  </article>
                )})
              }
      </section>
      <section class="home-product">
        { 
          product &&
            <article>
              <h2>Donut in de kijker</h2>
              <h3>{product.name}</h3>
              <div dangerouslySetInnerHTML= {{__html: product.description}}></div>
              
            </article>
        }
        {
          product.images.length > 0 && 
          <article class="product-image" style={{backgroundImage:`url(http://127.0.0.1:8000/images/products/${product.images[0].image})`, backgroundSize:'cover'}}>

          </article>

          
        }

      </section>
            

      <Footer/>
    </>
  )
}


export const getStaticPaths = async () => {
  return {
      paths: [
          { params: { id: '1' } },
          { params: { id: '2' } }
      ],
      fallback: true
  }
}
export const getStaticProps = async () => {
  const request1 = await Axios.get('http://127.0.0.1:8000/api/categories')
  const request2 = await Axios.get('http://127.0.0.1:8000/api/product/1')
  const [categories, product] = await Axios.all([request1, request2])
  return {
    props: {
      categories: categories.data['hydra:member'],
      product: product.data
    }
  }
}

