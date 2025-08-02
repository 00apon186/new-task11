'use client';

import 'rc-slider/assets/index.css';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Header from '@/app/components/Header';



import CartDrawer from '@/app/components/CartDrawer';
import Slider from 'rc-slider';
import { allProducts, Product } from '@/app/data/products';
import { slugify } from '@/app/utils/slugify';
import ProductCardGrid from '@/app/components/ProductCardgrid';
import Footer from '@/app/components/Footer';

export default function GroupPage() {
  const { group } = useParams();
  const groupSlug = decodeURIComponent(group as string);

  const matchedProducts = allProducts.filter((p) => slugify(p.group) === groupSlug);

  const allCategories = Array.from(new Set(matchedProducts.map((p) => p.subcategory)));

  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const [searchQuery, setSearchQuery] = useState('');

   

  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setDrawerOpen(true);
  };

  const handleCategoryChange = (cat: string) => {
    setCheckedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

 const filteredProducts = matchedProducts
  .filter((product) => {
    if (checkedCategories.length === 0) return true;
    return checkedCategories
      .map((c) => c.toLowerCase())
      .includes((product.subcategory || '').toLowerCase());
  })
  .filter((product) => {
    const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
    return price >= priceRange[0] && price <= priceRange[1];
  })
  .filter((product) => {
    const q = searchQuery.toLowerCase();
    return (
      product.title?.toLowerCase().includes(q) ||
      product.group?.toLowerCase().includes(q) ||
      product.subcategory?.toLowerCase().includes(q) ||
      product.category1?.toLowerCase().includes(q)
    );
  });


    

    
  return (
  
  <div className="flex flex-col min-h-screen bg-white justify-between">
   <Header onSearchChange={setSearchQuery} />


      {/* Minimal FILTERS button for mobile */}
<div className="flex-1 pb-6 md:pb-[80px]">

        <button
          className="flex items-center gap-1 text-black font-semibold uppercase tracking-wide lg:hidden"
          onClick={() => setShowMobileFilters((prev) => !prev)}
        >
          <span>FILTERS</span>
          <span className="text-sm">{showMobileFilters ? '▲' : '▼'}</span>
        </button>

        {showMobileFilters && (
          <div className="bg-pink-50 border rounded mt-2 p-4">
            <h3 className="text-sm font-bold mb-2 text-black">Filter by Sub-Category</h3>
<div className="space-y-3 max-h-[180px] overflow-y-auto pr-1">
  {allCategories.map((cat) => (
    <label
      key={cat}
      className="flex items-center gap-2 text-sm text-black cursor-pointer"
    >
      <input
        type="checkbox"
        checked={checkedCategories.includes(cat)}
        onChange={() => handleCategoryChange(cat)}
      />
      <span>{cat}</span>
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

      <div className="flex flex-col md:flex-row w-full px-4 py-0 gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-full md:w-[250px] h-fit sticky top-20 mt-0">
          <h3 className="text-lg font-bold mb-4 text-black">Filter by Sub-Category</h3>
         <div className="max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent space-y-3">
  {allCategories.map((cat) => (
    <label
      key={cat}
      className="flex justify-between items-center gap-2 text-sm text-black cursor-pointer group"
    >
      <div className="flex items-center gap-2">
  <input
    type="checkbox"
    checked={checkedCategories.includes(cat)}
    onChange={() => handleCategoryChange(cat)}
    className="w-4 h-4 border border-gray-400 rounded bg-white checked:bg-black accent-black"
  />
  <span>{cat}</span>
</div>

      <span className="text-gray-400 text-base group-hover:text-black">+</span> {/* ✅ right plus */}
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

        {/* Product Grid */}
        <main className="flex-1 mb-56 lg:mb-48">
        
          <ProductCardGrid
           
            onAddToCart={handleAddToCart}
            isVertical={true}
            products={filteredProducts}
          />
        </main>
      </div>

   
     <div className="mt-6">
      <Footer />
</div>
      
      <CartDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}

