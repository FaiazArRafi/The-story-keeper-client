import React, { useEffect, useState } from 'react';
import CategoryDetails from './CategoryDetails';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='grid grid-cols-3 mb-7'>
            {
                categories.map(category =>
                    <CategoryDetails
                        key={category._id}
                        category={category}
                    ></CategoryDetails>)
            }
        </div>
    );
};

export default Category;