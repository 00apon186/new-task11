// components/Navbar.tsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm py-4 px-6 flex justify-between items-center text-black">
      <Link href="/" className="text-xl font-bold">LABANE</Link>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Lifestyles Blog</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/exchange">Return & Exchange</Link>
        <Link href="/live">Live</Link>
      </div>
    </div>
  );
}
