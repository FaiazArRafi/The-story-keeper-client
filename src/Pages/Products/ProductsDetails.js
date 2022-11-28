import React from 'react';

const ProductsDetails = ({ product, category_name, setProd }) => {
    const { image, resale_price, original_price, years_of_use, condition, posted, sellers_name, sellers_location, mobile_number, product_name } = product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl my-8">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{product_name}</h2>
                    <p>Resale Price: $ <span className='text-3xl font-semibold text-red-600'>{resale_price}</span> Tk.</p>
                    <p>Original Price: $ <span className='font-semibold text-lg'>{original_price}</span> Tk.</p>
                    <p>Current conditon: <span className='font-semibold text-lg'>{condition}</span></p>
                    <p>Years of use:  <span className='font-semibold text-lg'>{years_of_use}</span></p>

                    <p>Seller's Name: <span className='font-semibold text-lg'>{sellers_name}</span> </p>
                    <p>Seller's Location: <span className='font-semibold text-lg'>{sellers_location}</span> </p>
                    <p>Contact number: <span className='font-semibold text-lg'>+{mobile_number}</span> </p>
                    <p>{posted}</p>
                    <div className="card-actions justify-center">
                        <label
                            htmlFor="booking-modal"
                            onClick={() => setProd(product)}
                            className="btn btn-primary text-white">Book Item</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsDetails;