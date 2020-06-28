import Footer from "../Components/Footer"
import { CartProvider } from "../contexts/CartContext"
import { Cart } from "../Components/Shop/Cart"
import Layout from "../Components/Layout"

export default function Products (){
    return (
        <>
        <Layout title="Bestelling - Donutopia" description="Bestel de lekkerste donuts nu online en snel bij Donutopia."image="../images/shop-header.jpg"/>
        <CartProvider>
            <Cart/>
        </CartProvider>
        <Footer/>
        </>
    )
}