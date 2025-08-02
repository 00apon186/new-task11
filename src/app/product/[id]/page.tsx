'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';


import Header from '@/app/components/Header';

import Footer from '@/app/components/Footer';
import RelatedProducts from '@/app/components/RelatedProducts';

import SingleProductDetails from '@/app/components/SingleProductDetails';
import CartDrawer from '@/app/components/CartDrawer';
import React from 'react';
import { allProducts } from '@/app/data/products';

export default function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = React.use(props.params); // 👈 unwrap the promise

  const id = parseInt(params.id);
  const product = allProducts.find((p) => p.id === id);

  const [drawerOpen, setDrawerOpen] = useState(false); // ✅ moved above conditional return

  if (!product) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          {/* Optional: Add something here */}
        </div>

        <SingleProductDetails
          product={{ ...product, category1: product.category1 }} // ✅ Ensure 'category' exists
          onAddToCart={() => setDrawerOpen(true)}
        />
      </main>

      <RelatedProducts
        allProducts={allProducts.map((p) => ({ ...p, category: p.category1 }))} // ✅ Ensure all have category
        currentId={product.id}
        currentCategory={product.category1}
      />

      <Footer />

      <CartDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
