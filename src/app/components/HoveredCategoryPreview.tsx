'use client';

import Link from 'next/link';
import Image from 'next/image';
import { allProducts, Product } from '@/app/data/products';
import { slugify } from '@/app/utils/slugify';

export default function HoveredCategoryPreview({ category }: { category: string }) {
  const slug = slugify(category);
  const filtered = allProducts.filter((p) => slugify(p.category1) === slug);

  if (filtered.length === 0) return null;

  const categoryItems = filtered.filter((p) => p.section === 'Shop by Category');
  const topTrends = filtered.filter((p) => p.section === 'Shop by Trends' && !p.subgroup);

  const groupedTrends = filtered
    .filter((p) => (p.section === 'Shop by Trends' && p.subgroup) || (!p.section && p.subgroup))
    .reduce((acc: Record<string, Product[]>, item) => {
      const key = item.subgroup!;
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});

  const renderCircleGrid = (products: Product[], gap = 'gap-x-5 gap-y-8') => (
    <div className={`grid grid-cols-4 ${gap} place-items-center`}>
      {products.slice(0, 8).map((product) => (
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
    <div className="bg-white shadow-xl rounded-lg p-4 w-[1100px] max-h-[750px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 z-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Vertical Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />

        {/* Left: Shop by Category */}
        <div className="ml-0 md:ml-8">
          {categoryItems.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase mb-3 text-[#8c3606]">Shop by Category</h3>
              {renderCircleGrid(categoryItems, 'gap-x-10 gap-y-10')}
            </div>
          )}
        </div>

        {/* Right: Shop by Trends */}
        <div className="ml-0 md:ml-6">
          {topTrends.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase mb-3 text-[#123659]">Shop by Trends</h3>
              {renderCircleGrid(topTrends, 'gap-x-6 gap-y-6')}
            </div>
          )}

          {Object.entries(groupedTrends).map(([subgroup, items]) => (
            <div key={subgroup} className="mb-6">
              <h4 className="text-sm font-bold uppercase mb-3 text-[#123659]">{subgroup}</h4>
              {renderCircleGrid(items, 'gap-x-6 gap-y-6')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
