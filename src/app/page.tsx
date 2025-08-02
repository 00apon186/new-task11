'use client';

import {  useState } from 'react';

import CategoryCircleSection from "./components/CategoryCircleSection";
import FlashDeals from "./components/FlashDeals";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCardGrid from "./components/ProductCardgrid";
import CartDrawer from "./components/CartDrawer";
import { allProducts, Product } from "./data/products";
import { toast } from 'sonner';

// ✅ Define CartProduct type (Product + quantity)
type CartProduct = Product & { quantity: number };

export default function HomePage() {


  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // ✅ Search input state

  // ✅ Add to cart
  const handleAddToCart = (product: Product) => {
    const cart: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item) => item.id === product.id);

    let updatedCart: CartProduct[];

    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setIsCartOpen(true);
    toast.success('Added to cart!');
  };

  // ✅ Filter products based on search query
  const filteredProducts = allProducts.filter((product) => {
  const q = searchQuery.toLowerCase();
  return (
    product.title?.toLowerCase().includes(q) ||
    product.group?.toLowerCase().includes(q) ||
    product.subcategory?.toLowerCase().includes(q) ||
    product.category1?.toLowerCase().includes(q)
  );
});


  return (
    <div className="bg-white">
      <Header onSearchChange={setSearchQuery} /> {/* ✅ Pass search setter */}
      <CategoryCircleSection />

    <div className="w-full px-2 sm:px-4 mb-8 sm:mb-16 md:mb-28">
  <div className="max-w-[1280px] mx-auto">
    <FlashDeals />
  </div>
</div>



      {/* 🛒 Recommended Products */}
      <section className="w-full flex justify-center  mt-4 sm:mt-[-80px]">
        <div className="w-full max-w-[1280px] px-2">
        <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
  <img src="/icons/shopping-bag.png" alt="icon" className="w-6 h-6" />
  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
    Explore Our Collection
  </span>
</h2>


          <ProductCardGrid
            products={filteredProducts} // ✅ Use filtered list
            showCartButton={true}
            onAddToCart={handleAddToCart}
            maxRows={5}
          />
        </div>
      </section>
<div className="mt-6">
      <Footer />
</div>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
