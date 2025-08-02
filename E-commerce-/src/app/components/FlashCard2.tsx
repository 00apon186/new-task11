'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  images: string[] // Must have 1–3 images
  title?: string
  price: string
}

export default function FlashCard({ images, title, price }: Props) {
  const [currentImage, setCurrentImage] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (hovered) return
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % Math.min(images.length, 2))
    }, 5000)
    return () => clearInterval(timer)
  }, [hovered, images.length])

  const displayedImage = hovered && images[2] ? images[2] : images[currentImage] || images[0]

  return (
    <Link href="/all-products">
      <div
         className="min-w-[120px] sm:min-w-[160px] w-[150px] sm:w-[220px] lg:w-[250px] flex-shrink-0 border border-[#FFDA00] bg-[#FFFFFF] relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ⚡ Discount Badge */}
       <div className="absolute top-0 left-0 bg-[#FFDA00] text-black text-xs lg:text-xl font-bold   w-[30px] lg:w-[65px]  py-[1px] lg:py-[8px] text-center z-10">
  ⚡ -21%
</div>


        {/* 🖼️ Product Image */}
      <div className="w-full h-[180px] sm:h-[230px] lg:h-[270px] overflow-hidden">

          {displayedImage ? (
            <Image
              src={displayedImage}
              alt={title || 'deal'}
              width={250}
              height={270}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>

        {/* 💵 Prices */}
        <div className="text-center py-2">
          <div className="text-[#F53E32] font-bold  text-[15px] lg:text-[20px] leading-tight text-left ml-2">{price}</div>
          <div className=" text-[13px] lg:text-[15px] text-gray-500 line-through text-left ml-2">$6.00</div>
        </div>
      </div>
    </Link>
  )
}
