// src/components/FlashDeals.tsx
'use client'

import { useRef, useState, useEffect } from 'react'
import FlashCard from './FlashCard'

const deals = [
  {
    id: 1,
    images: ['/images/product5.jpg', '/images/product7.jpg','/images/product10.jpg',],
    title: 'Foundation Brush',
    price: '$0.80',
  },
  {
    id: 2,
    images: ['/images/p104.jpg', '/images/product12.jpg','/images/product28.jpg',],
    price: '$5.40',
  },
  {
    id: 3,
   images: ['/images/p105.jpg', '/images/product17.jpg','/images/product6.jpg',],
    price: '$6.00',
  },
  {
    id: 4,
   images: ['/images/p106.jpg', '/images/product23.jpg','/images/product6.jpg',],
    price: '$0.75',
  },
  {
    id: 5,
    images: ['/images/product5.jpg', '/images/product27.jpg','/images/product6.jpg',],
    price: '$6.75',
  },
  {
    id: 6,
  images: ['/images/product5.jpg', '/images/product27.jpg','/images/product6.jpg',],
    price: '$1.88',
  },
  {
    id: 7,
images: ['/images/product5.jpg', '/images/product27.jpg','/images/product6.jpg',],
    price: '$17.00',
  },
]

export default function FlashDeals() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)

  const handleScroll = () => {
    if (!scrollRef.current) return
    setShowLeft(scrollRef.current.scrollLeft > 10)
  }

  const scrollLeftFn = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRightFn = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
   <section className="w-full relative bg-gradient-to-r from-[#FDE1CA] to-[#FFC3BA] p-2 sm:p-4 rounded-md sm:rounded-lg mt-4 min-h-[160px] sm:min-h-[220px]">
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-base sm:text-lg font-semibold text-red-600">
      <span className="italic text-black">Super</span>Deals
    </h2>
    <button
      onClick={scrollRightFn}
      className="group flex items-center gap-1 text-xs sm:text-sm font-medium"
      style={{ color: '#525558' }}
    >
      Save big now!
      <span className="text-lg sm:text-xl font-bold group-hover:translate-x-1 transition-transform">
        &gt;
      </span>
    </button>
  </div>
<div
  ref={scrollRef}
  className="flex overflow-x-auto gap-2 sm:gap-4 pr-2 sm:pr-4 scroll-smooth hide-scrollbar"
>


    {deals.map((item) => (
      <FlashCard
        key={item.id}
        images={item.images}
        title={item.title}
        price={item.price}
      />
    ))}
  </div>

  {/* Left Arrow */}
  {showLeft && (
    <button
      onClick={scrollLeftFn}
      className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-2 w-8 h-8 rounded-full bg-white shadow-md items-center justify-center z-10"
    >
      <span className="text-xl text-black">{'<'}</span>
    </button>
  )}

  {/* Right Arrow */}
  <button
    onClick={scrollRightFn}
    className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-full bg-white shadow-md items-center justify-center z-10"
  >
    <span className="text-xl text-black">{'>'}</span>
  </button>
</section>

  )
}


