import React from 'react';
import logo from '../../../asset/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-cyan-800 text-white rounded text-base-content ">
            <div>
                <img src={logo} className='w-14' alt="" />
                <p><span className='font-bold text-lg'>The Story Keeper</span></p>
                <p>Copyright © 2022 theStoryKeeper.com</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Bookseller</a>
                <a href="/" className="link link-hover">Gift</a>
                <a href="/" className="link link-hover">Seminar</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">About Us</span>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;