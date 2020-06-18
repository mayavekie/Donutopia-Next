import Axios from "axios"
import Link from "next/link"
import Header from "../../Components/Header"
import Nav from "../../Components/Nav"
import Footer from "../../Components/Footer"


export default (props) => {
    return (
        <>
            <Nav/>
            <Header title="Shop" image="../images/shop-header.jpg" alt="shop-header" />

            {
                props.product && <div><h1>{props.product.name}</h1>
                    <p dangerouslySetInnerHTML= {{__html: props.product.description}}></p>
                    <img src={props.product.images.image} alt={props.product.images.imageAlt}></img>
                </div>
            }
                <Link href="/shop">
                    <a>← Terug naar producten</a>
                </Link>
            <Footer/>
            
        </>
    )
}


export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { id: '2' } },
            { params: { id: '3' } }
        ],
        fallback: true
    }
}
export const getStaticProps = async (ctx) => {
    const response = await Axios.get('http://127.0.0.1:8000/api/product/' + ctx.params.id)
    const product = response.data
    console.log(product)
    return {
      props: {
        product
      }
    }
}