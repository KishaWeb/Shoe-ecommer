import React from 'react';
import './index.css';
import shoeImage from '/src/assets/NIKE+DUNK+LOW+NN-Photoroom.png';

const Footer = () => {
  return (
    <div className="flex gap-4 px-8 pt-16">
      <ul className="flex justify-between w-full">
        <li className="flex flex-col gap-12">
          <div>
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-6xl mb-4">Let’s stay in touch.</h2>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="p-4 rounded-l-full border-y-2 border-l-2 border-solid border-black"
                />
                <button className="bg-primary text-white p-4 rounded-r-full border-2 border-solid border-black duration-200 hover:bg-green-400">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#"><img width="42" className="duration-200 hover:opacity-75" src="/public/facebook.svg" alt="face-book" /></a>
            <a href="#"><img width="42" className="duration-200 hover:opacity-75" src="/public/instagram.svg" alt="instagram" /></a>
            <a href="#"><img width="42" className="duration-200 hover:opacity-75" src="/public/tiktok.svg" alt="" /></a>
            <a href="#"><img width="42" className="duration-200 hover:opacity-75" src="/public/pintrest.svg" alt="" /></a>
          </div>

          <h1 className="italic font-black text-11xl">NIKE</h1>
          <p className="text-gray-400 text-xl mb-8">we do not porvied any services this is just a project</p>
        </li>

        <li className="flex gap-16 text-lg">
          <div>
            <h1 className="font-bold">Help</h1>

            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Student Offer</a></li>
              <li><a href="#">Educator Offer</a></li>
              <li><a href="#">Healthcare Offer</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Ethics</a></li>
              <li><a href="#">Rollie Rewards</a></li>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">Terms & Conditions</a></li>
           </ul>
          </div>

          <div>
            <ul>
              <li>
                <h1 className="font-bold">Shop</h1>

                <ul>
                  <li><a href="#">Womens</a></li>
                  <li><a href="#">Mens</a></li>
                  <li><a href="#">Kids</a></li>
                </ul>
              </li>

              <li>
                <h1 className="font-bold">Contact Us</h1>

                <ul>
                  <li><a href="mailto:hello@email.com">hello@email.com</a></li>
                  <li><a href="tel:555-555-555">555-555-555</a></li>
                  <li><a href="#">Kids</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
