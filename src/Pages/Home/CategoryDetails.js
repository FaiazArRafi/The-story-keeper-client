import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({ category }) => {
    const { _id, category_name, logo } = category;

    return (
        <div >
            <div className="card w-96  bg-base-100 shadow-xl image-full sm:mt-7">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body" >
                    <h2 className="card-title text-2xl">{category_name}</h2>
                    <div className="card-actions justify-center">
                        <Link to={`/products/${_id}`} className="btn btn-info">{category_name}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;