// /src/pages/index.tsx
"use client";

import React from 'react';
import Banner from '@/components/layout/banner';
import ProductSection from '@/components/layout/ProductSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner /> {/* Ensure this comes first */}
      <div className="container mx-auto p-4">
        <ProductSection />
        <h3 className="text-2xl font-bold mb-4">Welcome to the Retail POS System</h3>
        <p>This system helps you manage your retail operations seamlessly.</p>
        <p>Navigate through the menu to access different functionalities.</p>
      </div>
    </div>
  );
};

export default HomePage;
