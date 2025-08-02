'use client';

import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/app/utils/slugify';

const categories = [
  { label: 'Women', image: '/images/pro.png' },
  { label: 'Men', image: '/images/men.png' },
  { label: 'Kids & Baby', image: '/images/p4.png' },
  { label: 'Dresses', image: '/images/p8.png' },
  { label: 'Tops', image: '/images/p3.png' },
  { label: 'Co-ords', image: '/images/p7.png' },
  { label: 'jewelry', image: '/images/p10.png' },
  { label: 'Sports & Outdoor', image: '/images/p11.png' },
  { label: 'Sleepwear', image: '/images/p12.png' },
  { label: 'Electronics', image: '/images/p13.png' },
  { label: 'Shoes & Bags', image: '/images/p5.png' },
  { label: 'Accessories', image: '/images/p16.png' },
  { label: 'Watches', image: '/images/p17.png' },
  { label: 'Beauty & Health', image: '/images/p15.png' },
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
