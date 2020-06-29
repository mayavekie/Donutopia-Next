import React, {useState} from "react"
import Axios from "axios"
import Link from "next/link"
import Footer from "../../Components/Footer"
import ImageGallery from 'react-image-gallery';
import Layout from "../../Components/Layout"


export default ({product}) => {
    const [count, setCount] = useState(0)
    const handleClickAdd = () => {
      setCount(count +1)
    }
    const handleClickMin = () => {
      count > 0 && setCount(count-1)
    }

    //variabele voor image gallery
    const options = product.images.map(image =>{
        return { original:`https://wdev.be/wdev_maya/eindwerk/image.php?${image.image}&width=600&height=600&cropratio=4:3&image=/wdev_maya/eindwerk/images/products/${image.image}`, 
                thumbnail: `https://wdev.be/wdev_maya/eindwerk/image.php?${image.image}&width=200&height=200&cropratio=4:3&image=/wdev_maya/eindwerk/images/products/${image.image}`}
    })

    
    return (
        <>
        <Layout title="Shop"description={product.description} image="../images/shop-header.jpg"/>
            <Link href="/shop">
                <a className="back">← Terug naar producten</a>
            </Link>
            <div >
            {
                product && 
                <div className="body-product">
                    <ImageGallery items={options}/>
                    <section class="product-info">
                        <h2>{product.name}</h2>
                        <div dangerouslySetInnerHTML= {{__html: product.description}} class="p"></div>
                        <p className="product-price">€{product.price[0].price}</p>
                        <div className="product-counter">
                            <button className="counter" onClick={handleClickMin}>-</button>
                            <p className="quantity-product">count</p>
                            <button className="counter" onClick={handleClickAdd}>+</button>
                            <button className="counter-add">Toevoegen</button>
                        </div>
                    </section>
                    
                </div>
            }
            </div>
            


            
            <Footer/>
            
        </>
    )
}
//Specifieke paden aanmaken per product
export const getStaticPaths = async () => {
    const products = await Axios.get("https://wdev.be/wdev_maya/eindwerk/api/products")
    const productList = products.data['hydra:member']

    const list = productList.map( product => (
        {
            params: {
                id: `${product.id}`
            }
        }
    ))

    return {
        paths: list,
        fallback: false
    }
}

export const getStaticProps = async (ctx) => {
    const response = await Axios.get('https://wdev.be/wdev_maya/eindwerk/api/product/' + ctx.params.id)
    const product = response.data
    return {
      props: {
        product
      }
    }
}