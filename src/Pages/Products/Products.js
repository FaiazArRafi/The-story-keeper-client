import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductsDetails from './ProductsDetails';

const Products = () => {
    const product = useLoaderData();

    const { category_name, products } = product;
    const [prod, setProd] = useState(null);

    return (
        <div className='grid grid-cols-2 mx-auto'>
            {
                products.map(product =>
                    <ProductsDetails
                        key={product._id}
                        product={product}
                        category_name={category_name}
                        setProd={setProd}
                    ></ProductsDetails>)
            }

            {
                prod &&
                <BookingModal
                    prod={prod}
                    setProd={setProd}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;