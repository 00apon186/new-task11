'use client';

import { useState } from 'react';
import { allProducts, type Product } from '@/app/data/products';
import ProductCardGrid from '../components/ProductCardgrid';
import Header from '../components/Header';
import FlashDeals2 from '../components/FlashDeals2';
import CartDrawer from '../components/CartDrawer';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { toast } from 'sonner';
import Footer from '../components/Footer';

type CartProduct = Product & { quantity: number };

export default function AllProductsPage() {
  const allCategories = Array.from(new Set(allProducts.map((p) => p.subcategory)));

  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleCategoryChange = (cat: string) => {
    setCheckedCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

 const filteredProducts = allProducts.filter((product) => {
  const q = searchQuery.toLowerCase();
  return (
    product.title?.toLowerCase().includes(q) ||
    product.group?.toLowerCase().includes(q) ||
    product.subcategory?.toLowerCase().includes(q) ||
    product.category1?.toLowerCase().includes(q)
      );
    })
    .filter((product) => {
      if (checkedCategories.length === 0) return true;
      return checkedCategories
        .map((c) => c.toLowerCase())
        .includes((product.subcategory || '').toLowerCase());
    })
    .filter((product) => {
      const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
      return price >= priceRange[0] && price <= priceRange[1];
    });

  return (
    <div className="bg-white">
      <Header onSearchChange={setSearchQuery} />

      
<div className="w-full h-[50px] sm:h-[60px] lg:w-[1700px] lg:h-[65px] mx-auto 
  bg-gradient-to-r from-[#FF6F61] via-[#FF4C5B] to-[#FF7A7F] 
  py-4 sm:py-6 lg:py-8  mt-4 lg:mt-6 flex justify-center items-center relative">


        <img
          src="/images/sparkle.png"
          alt="sparkle"
          className="absolute left-[20%] top-[30%] w-6 h-6 animate-ping opacity-60"
        />



        <h1 className="text-white text-3xl sm:text-4xl font-extrabold italic tracking-wide  text-center flex items-center justify-center gap-2">
          <img src="/icons/star.png" alt="Bag" className="w-6 h-6 object-contain" />
          Super <span className="text-white">Deals</span>
        </h1>
</div>

     <div className="w-full max-w-[1700px] mx-auto px-2 sm:px-4">
  <FlashDeals2 />
</div>



      
      

      {/* 🔧 Mobile FILTERS button */}
      <div className=" hidden px-4 mt-4">
        <button
          className="flex items-center gap-1 text-black font-semibold uppercase tracking-wide"
          onClick={() => setShowMobileFilters((prev) => !prev)}
        >
          <span>FILTERS</span>
          <span className="text-sm">{showMobileFilters ? '▲' : '▼'}</span>
        </button>

        {showMobileFilters && (
          <div className="bg-pink-50 border rounded mt-2 p-4">
            <h3 className="text-sm font-bold mb-2 text-black mt-80">Filter by Sub-Category</h3>
            <div className="space-y-2 mb-4">
              {allCategories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm text-black">
                  <input
                    type="checkbox"
                    checked={checkedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="accent-rose-500"
                  />
                  {cat}
                </label>
              ))}
            </div>

            <h3 className="text-sm font-bold mb-2 text-black">Filter by Price</h3>
            <Slider
              range
              min={0}
              max={5000}
              value={priceRange}
              onChange={(value: number | number[]) => {
                if (Array.isArray(value)) setPriceRange([value[0], value[1]]);
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-black">
              <span>৳ {priceRange[0]}</span>
              <span>৳ {priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* 🔧 Desktop layout */}
      <div className="flex flex-col md:flex-row w-full max-w-[1700px] mx-auto px-4 gap-6 items-start mt-[-120px]">
        {/* Sidebar */}
        <aside className="hidden md:block w-[250px] pt-[26px]">
          <h3 className="text-lg font-bold mb-4 text-black mt-10 lg:mt-40">Category</h3>
          <div className="max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent space-y-3">
            {allCategories.map((cat) => (
              <label
                key={cat}
                className="flex justify-between items-center gap-2 text-sm text-black cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="category"
                    checked={checkedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    
                className="w-4 h-4 border border-gray-400 rounded bg-white checked:bg-black accent-black"
                  />
                  {cat}
                </div>
                <span className="text-gray-400 text-base">+</span>
              </label>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2 text-black">Filter by Price</h3>
            <Slider
              range
              min={0}
              max={5000}
              value={priceRange}
              onChange={(value: number | number[]) => {
                if (Array.isArray(value)) setPriceRange([value[0], value[1]]);
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-black">
              <span>৳ {priceRange[0]}</span>
              <span>৳ {priceRange[1]}</span>
            </div>
          </div>
        </aside>

        {/* Products */}
        <main className="flex-1">
       

<h1 className="text-2xl font-semibold mb-4 pt-4 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent
  text-center flex items-center justify-center gap-2 mt-32 lg:mt-40">
  <img src="/icons/rate.png" alt="Bag" className="w-6 h-6 object-contain" />
  <span> Find What You Loves</span>
</h1>

          <ProductCardGrid
            products={filteredProducts}
            isVertical
            showCartButton={true}
            onAddToCart={handleAddToCart}
          />
        </main>
      </div> 

      
<div className="mt-6">
      <Footer />
</div>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
