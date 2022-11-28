import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const [cName, setCName] = useState();
    const [condition, setCondition] = useState();
    const navigate = useNavigate();

    const from = '/dashboard/myproducts';

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const category_name = form.category_name.value;
        const product_name = form.product_name.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const years_of_use = form.years_of_use.value;
        const condition = form.condition.value;
        const sellers_name = form.sellers_name.value;
        const sellers_email = form.sellers_email.value;
        const sellers_location = form.location.value;
        const mobile_number = form.mobile_number.value;

        const booking = {
            category_name: category_name,
            product_name: product_name,
            image: "",
            resale_price: resale_price,
            original_price: original_price,
            years_of_use: years_of_use,
            condition: condition,
            sellers_name: sellers_name,
            sellers_email,
            sellers_location: sellers_location,
            mobile_number: mobile_number

        }

        fetch('http://localhost:5000/myproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Book added successfully !!');
                    navigate(from, { replace: true });
                    form.reset();
                }
                else {
                    toast.error(data.message);
                }
            })
    }


    return (
        <div className="flex justify-center">
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn  mt-5">Add a Product</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text- name=''lg font-bold">Add your books here!</h3>
                    <p className="py-4">Fill up this form to give the customers a better understanding of your books!</p>
                    <form onSubmit={handleAddProduct}>
                        <div className='form-control w-2/3'>
                            <label className="label">
                                <span className="label-text">Select Book's Category:</span>
                            </label>
                            <select defaultValue="Select Category"
                                onChange={(e) => setCName(e.target.value)} required>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Science-Fiction">Science-Fiction</option>
                            </select>
                            <input type="text" name="category_name" disabled value={cName} defaultValue="Fantasy" placeholder="Book's Category" className="input input-bordered input-xs w-full max-w-xs mt-2" required hidden /></div>
                        <input type="text" name='product_name' placeholder="book's name" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        <input type="text" name='resale_price' placeholder="Resale Price" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        <input type="text" name='original_price' placeholder="Original Price" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        <div className='form-control w-2/3'>
                            <label className="label">
                                <span className="label-text">Select Book's Condition:</span>
                            </label>
                            <select defaultValue="Select conditon"
                                onChange={(e) => setCondition(e.target.value)} required>
                                <option value="Good">Good</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Fair">Fair</option>
                            </select>
                            <input type="text" name="condition" disabled value={condition} defaultValue="Good" placeholder="Book's Conditon" className="input input-bordered input-xs w-full max-w-xs mt-2" required hidden /></div>
                        <input type="text" name='years_of_use' placeholder="Years of use" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        <input type="text" name='sellers_name' placeholder="Seller's Name" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        <input type="email" defaultValue={user?.email} disabled name='sellers_email' placeholder="Seller's Email" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        <input type="text" name='location' placeholder="Seller's Location" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        <input type="text" name='mobile_number' defaultValue={880} placeholder="Contact number" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        <input className='btn btn-accent w-full mt-3' type="submit" value="Add Product" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;