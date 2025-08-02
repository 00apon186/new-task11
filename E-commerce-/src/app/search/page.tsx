'use client';

import { useSearchParams } from 'next/navigation';
import {  useState } from 'react';
import { allProducts} from '../data/products';
import ProductCardGrid from '../components/ProductCardgrid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const allCategories = Array.from(
    new Set(
      allProducts
        .filter((p) => p.title?.toLowerCase().includes(query.toLowerCase()) || p.subcategory?.toLowerCase().includes(query.toLowerCase()))
        .map((p) => p.subcategory)
    )
  );

  const filteredProducts = allProducts
    .filter((product) => {
      const q = query.toLowerCase();
      return (
        product.title?.toLowerCase().includes(q) ||
        product.group?.toLowerCase().includes(q) ||
        product.subcategory?.toLowerCase().includes(q) ||
        product.category1?.toLowerCase().includes(q)
      );
    })
    .filter((product) => {
      if (checkedCategories.length === 0) return true;
      return checkedCategories.includes(product.subcategory);
    })
    .filter((product) => {
      const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
      return price >= priceRange[0] && price <= priceRange[1];
    });

  const handleCategoryChange = (cat: string) => {
    setCheckedCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  return (
    <div className="bg-white">
      <Header onSearchChange={() => {}} />

      <div className="flex flex-col md:flex-row w-full max-w-[1700px] mx-auto px-4 gap-6 mt-6 items-start">
        {/* Sidebar */}
        <aside className="hidden md:block w-[250px] pt-[80px]">
          <h3 className="text-lg font-bold mb-4 text-black">Category</h3>
         <div className="max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent space-y-3">
  {allCategories.map((cat) => (
    <label
      key={cat}
      className="flex justify-between items-center gap-2 text-sm text-black cursor-pointer group"
    >
      <div className="flex items-center gap-2">
        <span className="w-[8px] h-[8px] bg-black rounded-full inline-block" /> {/* ✅ bullet */}
        <input
          type="checkbox"
          checked={checkedCategories.includes(cat)}
          onChange={() => handleCategoryChange(cat)}
          className="hidden"
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
        <main className="flex-1">
          <h1 className="text-2xl font-semibold mb-4 pt-4 text-black">
            Search Results for: <span className="text-blue-600">{query}</span>
          </h1>

          {filteredProducts.length > 0 ? (
            <ProductCardGrid
              products={filteredProducts}
              showCartButton={true}
              isVertical
            />
          ) : (
            <p className="text-gray-600">No products found.</p>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
