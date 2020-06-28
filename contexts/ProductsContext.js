import React, { createContext, useState } from 'react';

export const ProductsContext = createContext()

const ProductsContextProvider = ({children, productList}) => {
    const [products] = useState(productList)

    return (
        <ProduductsContext.Provider value={products}>
            {children}
        </ProduductsContext.Provider>
    )
}

export default ProductsContextProvider

export const getServerSideProps = async () => {
    const response1 = await axios.get('https://wdev.be/wdev_maya/eindwerk/api/products')
    const [productList] = await axios.all([response1])
    return {
      props: {
        productList: productList.data['hydra:member']
      }
    }
}