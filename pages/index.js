import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import Link from "next/link"
import Axios from "axios"

export default function Home({categories, product}) {
  // console.log(product)
  return (
    <>

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
              <h3>{product.name}</h3>
              <div dangerouslySetInnerHTML= {{__html: product.description}}></div>
              
            </article>
        }
        {
          product.images.length > 0 && 
          <article className="product-image" style={{backgroundImage:`url(https://wdev.be/wdev_maya/eindwerk/image.php?${product.images[0].image}&width=1080&image=/wdev_maya/eindwerk/images/products/${product.images[0].image}
            )`, backgroundSize:'cover'}}>
          </article>

          
        }

      </section>
            

      <Footer/>
    </>
  )
}


// export const getStaticPaths = async () => {
//   return {
//       paths: [
//           { params: { id: '1' } },
//           { params: { id: '2' } }
//       ],
//       fallback: true
//   }
// }
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

