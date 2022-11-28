import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `https://resale-server-ruby.vercel.app/booked?email=${user?.email}`;

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booked', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete your booking ?');
        if (proceed) {
            fetch(`https://resale-server-ruby.vercel.app/booked/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully !!!');
                        refetch();
                    }
                })
        }
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.image}</td>
                                <td>{booking.product_name}</td>
                                <td>{booking.price}</td>
                                <td><button className='btn btn-xs btn-warning px-4 text-white'>Pay</button></td>
                                <td><button onClick={() => handleDelete(booking._id)} className='btn btn-xs bg-red-600 border-0 text-white px-4'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MyOrders;