import React from 'react';
import Category from './Category';
import caro1 from '../../asset/caro1.jpg'
import caro2 from '../../asset/caro2.jpg'
import caro3 from '../../asset/caro3.jpg'
import ex1 from '../../asset/ex1.webp'

const Home = () => {
    return (
        <div>
            <div className="container carousel rounded my-14 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt="" src={caro1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt="" src={caro2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt="" src={caro3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='my-8'>
                <h1 className='mt-5 mb-2 text-4xl font-semibold  mb-5'>Category of Bookes</h1>
                <Category></Category>
            </div>
            <div className='my-16'>
                <div className='flex justify-center p-5 bg-blue-100 rounded-xl'>
                    <div className='w-1/2 p-5'>
                        <h1 className='text-5xl font-bold'>Millions of used copies for sale</h1>
                        <h2 className='text-lg mt-5 text-gray-900 font-bold'>Our immense online selection of used books covers every topic under the sun including all types of fiction and non-fiction, from Jack Kerouac's On the Road to Helene Hanff's 84, Charing Cross Road. <br /><br />

                            ➣ Used paperbacks and hardcovers from all the major authors.<br />
                            ➣ Beautiful vintage editions in memorable dust jackets.<br />
                            ➣ Big books at cheap prices, from art books to coffee-table books.<br />
                            ➣ Thousands of used copies of romance novels.<br />
                            ➣  Used self help books, from spiritual guidance to business books.<br />
                            ➣  Mysteries, crime and adventure novels galore.</h2>
                    </div>
                    <div className='w-1/2 p-5'>
                        <img src={ex1} alt="" className='rounded-md' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;