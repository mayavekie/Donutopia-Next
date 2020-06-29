import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import Link from "next/link"
import Axios from "axios"
import HeadHome from "../Components/HeadHome"


export default function Home({categories, product}) {
  return (
    <>
      <HeadHome/>
      <Nav/>
      <header className="header-home">
        <h1>Freshly baked donuts, everyday</h1>
        <button><Link href="/shop"><a title="button-shop">Shop</a></Link></button>
      </header>
      <section className="home-category">
      { categories.map(category => {
                return (
                  
                  <article style={{backgroundImage:`url(https://wdev.be/wdev_maya/eindwerk/image.php?${category.img}&width=1080&image=/wdev_maya/eindwerk/images/categories/${category.img})`, backgroundSize:'cover'}}>
                    <h2>{category.name}</h2>
                  </article>
                )})
              }
      </section>
      <section className="home-product">
        { 
          product &&
            <article>
              <h2>Donut in de kijker</h2>
        <Link href={`/product/${product.id}`}><a><h3>{product.name}</h3></a></Link>
              
              <div dangerouslySetInnerHTML= {{__html: product.description}}></div>
              
            </article>
        }
        {
          product.images.length > 0 && 
          <Link href={`/product/${product.id}`}><a><article className="product-image" style={{backgroundImage:`url(https://wdev.be/wdev_maya/eindwerk/image.php?${product.images[0].image}&width=1080&image=/wdev_maya/eindwerk/images/products/${product.images[0].image}
            )`, backgroundSize:'cover'}}>
          </article></a>
          </Link>

          
        }

      </section>
            

      <Footer/>
    </>
  )
}


export const getStaticProps = async () => {
  const request1 = await Axios.get('https://wdev.be/wdev_maya/eindwerk/api/categories')
  const request2 = await Axios.get('https://wdev.be/wdev_maya/eindwerk/api/product/1')
  const [categories, product] = await Axios.all([request1, request2])
  return {
    props: {
      categories: categories.data['hydra:member'],
      product: product.data
    }
  }
}

