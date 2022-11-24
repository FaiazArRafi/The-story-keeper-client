import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsDetails from './ProductsDetails';

const Products = () => {
    const product = useLoaderData();
    const { _id, category_name, products } = product;

    return (
        <div className='grid grid-cols-2 mx-auto'>
            {
                products.map(product =>
                    <ProductsDetails
                        key={product.p_id}
                        product={product}
                        category_name={category_name}
                    ></ProductsDetails>)
            }
        </div>
    );
};

export default Products;