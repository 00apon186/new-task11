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
      setCurrentImage((prev) => (prev + 1) % Math.min(images.length, 2)) // Rotate only 1 or 2
    }, 5000)
    return () => clearInterval(timer)
  }, [hovered, images.length])

  const displayedImage = hovered && images[2] ? images[2] : images[currentImage] || images[0]

  return (
<Link href="/all-products">
  <div
  className="min-w-[120px] sm:min-w-[160px] lg:min-w-[200px] flex-shrink-0"

  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>

    <div className="w-[120px] h-[150px] sm:w-[160px] sm:h-[180px] lg:w-[200px] lg:h-[220px] rounded-md overflow-hidden bg-white relative">
      {displayedImage ? (
        <Image
          src={displayedImage}
          alt={title || 'deal'}
          width={200}
          height={220}
          className="object-cover w-full h-full transition-all duration-500"
        />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
    </div>
    <div className="text-red-600 font-semibold text-xs mt-1 text-center">
      {price}
    </div>
  </div>
</Link>



  )
}
