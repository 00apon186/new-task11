'use client';

import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/app/utils/slugify';

const categories = [
  { label: 'Women', image: '/images/pro.png' },
  { label: 'Men', image: '/images/p3.png' },
  { label: 'Kids & Baby', image: '/images/p4.png' },
  { label: 'Dresses', image: '/images/p5.png' },
  { label: 'Tops', image: '/images/product1.jpg' },
  { label: 'Co-ords', image: '/images/product1.jpg' },
  { label: 'Beachwear', image: '/images/product1.jpg' },
  { label: 'Sports & Outdoor', image: '/images/product1.jpg' },
  { label: 'Underwear & Sleepwear', image: '/images/product1.jpg' },
  { label: 'Home & Living', image: '/images/product1.jpg' },
  { label: 'Shoes & Bags', image: '/images/product1.jpg' },
  { label: 'Accessories', image: '/images/product1.jpg' },
  { label: 'Jewelry & Watches', image: '/images/product1.jpg' },
  { label: 'Beauty & Health', image: '/images/product1.jpg' },
];

export default function CategoryCircleSection() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-7 gap-x-2 gap-y-1 sm:gap-x-4 sm:gap-y-3 md:gap-x-6 md:gap-y-5 lg:gap-x-8 lg:gap-y-6 place-items-center">


          {categories.map((cat, i) => (
            <Link
              href={`/group/${slugify(cat.label)}`}
              key={i}
              className="flex flex-col items-center justify-start text-center text-black text-[10px] sm:text-xs min-h-[90px]"
            >
             <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[130px] lg:h-[130px] rounded-full bg-[#EDE9E6] overflow-hidden shadow-sm">

                <Image
                  src={cat.image}
                  alt={cat.label}
                  width={130}
                  height={130}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="mt-1 leading-tight break-words">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
