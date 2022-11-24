import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({ category }) => {
    const { _id, category_name } = category;

    return (
        <div>
            <div className="card w-96  bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{category_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <Link to={`/category/${_id}`} className="btn btn-primary">{category_name}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;