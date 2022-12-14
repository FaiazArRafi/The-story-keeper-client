import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ prod, setProd }) => {
    const { user } = useContext(AuthContext);
    const { product_name, resale_price } = prod;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            product_name: product_name,
            price: resale_price,
            user_name: name,
            email,
            phone,
            location
        }

        fetch('https://resale-server-ruby.vercel.app/booked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProd(null);
                    toast.success('Booking confirmed');
                    form.reset();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input name="name" type="text" value={product_name} disabled placeholder="Product Name" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Price (Tk)</span>
                        </label>
                        <input name="name" type="text" value={resale_price} disabled placeholder="price" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Your email</span>
                        </label>
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <span></span><label className="label">
                            <span className="label-text">Your contact number</span>
                        </label>
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <span></span><label className="label">
                            <span className="label-text">Meeting Location</span>
                        </label>
                        <input name="location" type="text" placeholder="location you want to meet" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;