import React from 'react';
import './index.css';
import shoeImage from '/src/assets/NIKE+DUNK+LOW+NN-Photoroom.png';

const head = () => {
  return (
    <div className="container flex flex-col items-end">
      <div className="flex flex-col py-2 px-6 gap-4">
        <h1 className="uppercase font-black text-11xl">street snikers</h1>
        <h2 className="font-black text-4xl">judge gray collection</h2>
        <button className="w-64 h-16 bg-white border-4 font-black text-2xl border-black mt-10 rounded-full">Buy now</button>
      </div>
    </div>
  );
};

export default head;
