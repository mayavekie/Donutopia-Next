import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductsGrid = () => {
    const {products} = useContext(ProductsContext)

    return (
        <>
        <section className="shop-product">
            <ul >
              { products.map(product => {
                  <ProductItem product={product}/>
                })
              }
            </ul>
          </section>
        </>
    )
}

export default ProductsGrid;
