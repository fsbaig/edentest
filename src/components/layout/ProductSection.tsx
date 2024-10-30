"use client";

import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { name: 'ALLURE LAWN', image: '/allurelawn.webp' },
  { name: 'MEN WESTERN', image: '/menwestern.webp' },
  { name: 'FRAGRANCES', image: '/fragrances.webp' },
  { name: 'KIDS', image: '/kids.webp' },
  { name: 'MEN ETHNIC', image: '/menethnic.webp' },
  { name: 'WOMEN UNSTITCHED', image: '/womenunstitched.webp' },
];

const ProductSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      
      {/* Desktop Layout: First Row of 2 products */}
      <div className="hidden sm:grid grid-cols-2 gap-4 mb-10">
        {products.slice(0, 2).map((product) => (
          <motion.div
            key={product.name}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[1100px] object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-lg font-bold">
              <span>{product.name}</span>
              <button className="mt-2 px-8 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Layout: Second Row of 3 products */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.slice(2).map((product) => (
          <motion.div
            key={product.name}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[600px] object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-lg font-bold">
              <span>{product.name}</span>
              <button className="mt-2 px-8 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout: Stack Products Vertically */}
      <div className="block sm:hidden grid grid-cols-1 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.name}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-lg font-bold">
              <span>{product.name}</span>
              <button className="mt-2 px-8 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
