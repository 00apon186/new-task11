'use client';

const categories = [
  'Abaya',
  'Salwar Kameez',
  'Gown & Lehanga',
  'Cotton Dress',
  'Ready Dress',
  "Saree's",
  "Woman's Bag",
  'Nighty & Bra',
  "Kid's Collections",
];

export default function SidebarCategory() {
  return (
    <div className="bg-[#1362b1] text-white p-4 w-full md:w-[250px] h-[520px]">
      <h3 className="font-bold mb-4 uppercase text-sm tracking-wide  ">Browse Categories</h3>
      <ul className="space-y-3 text-sm">
        {categories.map((cat, index) => (
          <li key={index} className="hover:underline cursor-pointer">{cat}</li>
        ))}
      </ul>
    </div>
  );
}
