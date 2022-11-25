import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductsDetails from './ProductsDetails';

const Products = (id) => {
    const product = useLoaderData();

    const { _id, category_name, products } = product;
    const [prod, setProd] = useState(null);

    return (
        <div className='grid grid-cols-2 mx-auto'>
            {
                products.map(product =>
                    <ProductsDetails
                        key={product.p_id}
                        product={product}
                        category_name={category_name}
                        setProd={setProd}
                    ></ProductsDetails>)
            }

            {
                products.map(product =>
                    <BookingModal
                        key={product.p_id}
                        product={product}
                        setProd={setProd}
                        category_name={category_name}
                    ></BookingModal>)
            }
        </div>
    );
};

export default Products;