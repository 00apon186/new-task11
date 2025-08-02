'use client';

import { useParams } from 'next/navigation';
import { allProducts, Product } from '@/app/data/products';

import Header from '@/app/components/Header';
import { slugify } from '@/app/utils/slugify';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/app/components/Footer';

export default function CategoryPage() {
  const { category } = useParams();
  const categorySlug = decodeURIComponent(category as string);
  const [searchQuery, setSearchQuery] = useState('');

  // ✅ First filter by group only
  const groupMatched = allProducts.filter(
    (p) => slugify(p.group || '') === categorySlug
  );

  // ✅ Then filter by search input (on group-matched only)
  const filtered = groupMatched.filter(
    (p) =>
      p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subcategory?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category1?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ❌ Category does not exist at all (invalid URL)
  if (groupMatched.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-white p-6 text-center text-red-600">
        <Header onSearchChange={setSearchQuery} />
        <div className="flex-grow flex items-center justify-center">
          <p>Category not found: {categorySlug}</p>
        </div>
        <Footer />
      </div>
    );
  }

  const displayGroupName = groupMatched[0].group;

  // 🟠 Shop by Category
  const categoryItems = filtered.filter((p) => p.section === 'Shop by Category');

  // 🔵 Shop by Trends (no subgroup)
  const topTrends = filtered.filter(
    (p) => p.section === 'Shop by Trends' && !p.subgroup
  );

  // 🟣 Subgroups (only if `section` is undefined)
  const groupedSubgroups = filtered
    .filter((p) => !p.section && p.subgroup)
    .reduce((acc: Record<string, Product[]>, item) => {
      const key = item.subgroup!;
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});

  const renderCircleGrid = (
    products: Product[],
    gapClasses = 'gap-x-6 gap-y-6',
    columnClasses = 'grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-7'
  ) => (
    <div className={`grid ${columnClasses} ${gapClasses} place-items-center`}>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="flex flex-col items-center text-center text-black text-xs"
        >
          <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src={product.image[0]}
              alt={product.title}
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="mt-1 leading-tight line-clamp-2">{product.title}</span>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onSearchChange={setSearchQuery} />

      <div className="py-8 px-4 max-w-[1500px] mx-auto flex-grow">
        <h2 className="text-xl md:text-2xl font-semibold mb-8 capitalize">
          {displayGroupName} Collection
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />

          {/* Shop by Category */}
          <div className="pl-6 md:pl-28 lg:pl-36 xl:pl-20">
            {categoryItems.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase mb-4 text-[#8c3606]">
                  Shop by Category
                </h3>
                {renderCircleGrid(
                  categoryItems,
                  'gap-x-10 gap-y-10',
                  'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'
                )}
              </div>
            )}
          </div>

          {/* Shop by Trends + Subgroups */}
          <div className="space-y-16 px-10">
            {topTrends.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase mb-4 text-[#123659]">
                  Shop by Trends
                </h3>
                {renderCircleGrid(topTrends, 'gap-x-32 gap-y-10')}
              </div>
            )}

            {Object.keys(groupedSubgroups).length > 0 && (
              <div className="space-y-12">
                {Object.entries(groupedSubgroups).map(([subgroup, items]) => (
                  <div key={subgroup}>
                    <h4 className="text-sm font-bold uppercase mb-4 text-[#123659]">
                      {subgroup}
                    </h4>
                    {renderCircleGrid(items, 'gap-x-32 gap-y-10')}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
