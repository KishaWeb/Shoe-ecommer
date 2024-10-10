import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';import './index.css';
import women from "/src/assets/women.webp";
import men from "/src/assets/men.webp";
import kids from "/src/assets/kids.png";
import TheIcons from "/src/assets/icons.webp";
import sneakers from "/src/assets/sneakers.webp";
import left_arrow from "/public/left-arrow.svg";
import airforce1 from "/src/assets/airforce-1.png"

const Main = () => {
  const items = [
    { image: women, alt: "Women", text: "Women" },
    { image: men, alt: "Men", text: "Men" },
    { image: kids, alt: "Kids", text: "Kids" },
    { image: sneakers, alt: "Sneakers", text: "Sneakers" },
    { image: TheIcons, alt: "The Icons", text: "The Icons" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const featuredProducts = [
    { name: "Air force 1", price: "$100", image: "https://placehold.co/400/orange/white", isNew: true },
    { name: "React Element 55", price: "$130", image: "https://placehold.co/400/blue/white", isNew: false },
    { name: "Zoom Pegasus 38", price: "$120", image: "https://placehold.co/400/purple/white", isNew: true },
    { name: "Free RN 5.0", price: "$100", image: "https://placehold.co/400/red/white", isNew: false },
    { name: "Air Max 270", price: "$150", image: "https://placehold.co/400/green/white", isNew: true },
    { name: "Blazer Mid '77", price: "$100", image: "https://placehold.co/400/yellow/white", isNew: false },
    { name: "Joyride Run", price: "$180", image: "https://placehold.co/400/pink/white", isNew: true },
  ];

  const [productIndex, setProductIndex] = useState(0);

  const handleNextProduct = () => {
    setProductIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  };

  const handlePrevProduct = () => {
    setProductIndex((prevIndex) => (prevIndex - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <div className="w-screen text-text bg-background pt-4 pb-8 rounded-t-12xl mt-20">
      <div className="mt-12 px-16 py-3 flex flex-col gap-16 w-screen">
        <div className="flex items-center justify-between w-full px-4">
          <h1 className="text-5xl">We are innovators of comfort</h1>
          <p className="text-3xl">
            Looking good and feeling good<br></br>
            shouldn't be mutually exclusive.
          </p>
        </div>

        <div className="overflow-hidden relative group">
          <ul
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / items.length)}%)` }}
          >
            {items.map((item, index) => (
              <li key={index} className="w-1/3 flex-shrink-0 relative overflow-hidden px-3">
                <div className="h-100 relative">
                  <img
                    className="w-full h-100 object-cover rounded-4xl cursor-pointer"
                    src={item.image}
                    alt={item.alt}
                  />
                  <button className="absolute bottom-4 left-4 p-4 rounded-full bg-primary text-xl cursor-pointer transition-transform duration-150 ease-in-out hover:scale-110">
                    {item.text}
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <img src={left_arrow} alt="Previous" className="w-12 h-12" />
          </button>
          <button 
            onClick={handleNext} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <img src={left_arrow} alt="Next" className="w-12 h-12 rotate-180" />
          </button>
        </div>
        <section className="mt-16 relative group">
          <h2 className="text-4xl mb-8">Featured Products</h2>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${productIndex * (100 / 3)}%)` }}
            >
              {featuredProducts.map((product, index) => (
                <div className="w-1/3 flex-shrink-0 px-4" key={index}>
                  <div className="bg-white flex flex-col gap-6 rounded-3xl p-5 relative">
                    <img src={product.image} alt={product.name} className="w-full h-auto object-cover cursor-pointer rounded-3xl" />
                    {product.isNew && (
                      <span className="absolute top-8 right-8 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        New
                      </span>
                    )}
                    <div className="flex justify-between">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-lg text-primary font-bold">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={handlePrevProduct} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <img src={left_arrow} alt="Previous" className="w-8 h-8" />
          </button>
          <button 
            onClick={handleNextProduct} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <img src={left_arrow} alt="Next" className="w-8 h-8 rotate-180" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Main;