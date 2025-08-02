'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/data/products';
import { useState } from 'react';

type Props = {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  showCartButton?: boolean;
  isVertical?: boolean;
  showCartIconOnly?: boolean;
  maxRows?: number;
};

export default function ProductCardGrid({
  products,
  onAddToCart,
  showCartButton = false,
  maxRows,
}: Props) {
  const [showAll, setShowAll] = useState(false);
  const cardsPerRow = 6;
  const displayProducts =
    showAll || !maxRows ? products : products.slice(0, maxRows * cardsPerRow);

  


  return (
    <section className="w-full flex flex-col">
      <div
        className={`
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          xl:grid-cols-6
          gap-x-4 gap-y-5
          justify-items-center
        `}
      >
        {displayProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="w-full md:max-w-[400px]"
          >
            <div
              className="
                group
                w-full md:max-w-[400px]
                rounded
                border-[8px] border-transparent
                hover:border-[#E7E7E7]
                hover:shadow-md
                hover:scale-[1.02]
                transform
                transition-all duration-300 bg-white
              "
            >
              <div className="relative aspect-[14/18] overflow-hidden">
                <Image
                  src={product.image[0]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="pt-1 text-xs text-gray-800 px-2 pb-2">
                <div className="line-clamp-2 h-[32px] leading-tight mb-1">
                  {product.title}
                </div>

                <div className="flex items-center justify-between font-semibold text-sm">
                  <span className="text-black">{product.price}</span>

                   {showCartButton && (
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // prevents link navigation
                        onAddToCart?.(product); // 🔥 Trigger cart add + drawer open
                      }}
                      className="text-base"
                    >
                      🛒
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 🔽 Toggle Button */}
      {maxRows && products.length > maxRows * cardsPerRow && (
        <div className="mt-8 flex justify-center w-full">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-3 border border-black text-black font-semibold hover:bg-black hover:text-white transition"
          >
            {showAll ? 'View Less ⌃' : 'View More ⌄'}
          </button>
        </div>
      )}
    </section>
  );
}
