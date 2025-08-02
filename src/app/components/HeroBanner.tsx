'use client';
import Image from 'next/image';
import SidebarCategory from './SidebarCategory';

export default function HeroSection() {
  return (
    <div className="max-w-[1300px] mx-auto flex px-0 py-6 gap-6">
      {/* Sidebar */}
      <div className="w-[250px]">
        <SidebarCategory />
      </div>

      {/* Banner */}
    <div className="flex-1 flex justify-start items-center h-[500px]">
  <Image
    src="/images/banner1.jpg"
    alt="Banner"
    width={800}
    height={500}
    className="w-full h-full object-cover rounded"
    priority
  />
</div>

    </div>
  );
}
