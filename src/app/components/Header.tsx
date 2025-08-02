'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaGlobe,
  FaChevronRight,
} from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { slugify } from '@/app/utils/slugify';
import { categories } from '@/app/data/categoryList';
import { usePathname, useRouter } from 'next/navigation';
import HoveredCategoryPreview from './HoveredCategoryPreview';
import CartDrawer from './CartDrawer';

type CartProduct = {
  id: number;
  title: string;
  image: string[];
  price: string;
  oldPrice: string;
  discount: string;
  quantity: number;
};

type Props = {
  onSearchChange?: (value: string) => void;
};

export default function Header({ onSearchChange }: Props) {
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownFrozen, setDropdownFrozen] = useState(false);
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const isCategoryPage = pathname.startsWith('/category/');
  const formatCategoryUrl = (name: string) => `/category/${slugify(name)}`;

  useEffect(() => {
    const handleDropdownVisibility = () => {
      if (isCategoryPage) {
        const isTrulyLargeScreen = window.innerWidth >= 1280;
        setDropdownVisible(isTrulyLargeScreen);
        setDropdownFrozen(isTrulyLargeScreen);
      } else {
        setDropdownVisible(false);
        setDropdownFrozen(false);
      }
    };

    setTimeout(handleDropdownVisibility, 0);
    window.addEventListener('resize', handleDropdownVisibility);
    return () => window.removeEventListener('resize', handleDropdownVisibility);
  }, [isCategoryPage]);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartProduct[];
      const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(total);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  // ✅ Hover show (if not frozen)
  const showDropdown = () => {
    if (!dropdownFrozen && !dropdownVisible) {
      setDropdownVisible(true);
    }
  };

  // ✅ Hover leave (if not frozen)
  const hideDropdown = () => {
    if (!isCategoryPage && !dropdownFrozen && dropdownVisible) {
      setDropdownVisible(false);
    }
  };

  // ✅ Click toggle with freeze/unfreeze
  const toggleDropdown = () => {
    if (!isCategoryPage) {
      setDropdownVisible((prevVisible) => {
        const nextState = !prevVisible;
        setDropdownFrozen(nextState); // freeze when opened, unfreeze when closed
        return nextState;
      });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed.length > 0) {
      router.push(`/search?query=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 text-sm">
      <div className="px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-[28px] font-extrabold tracking-wide text-black">
          SHEIN
        </Link>

        {/* Search bar */}
        <form onSubmit={handleSearchSubmit} className="w-full md:max-w-[500px]">
          <div className="flex border border-gray-400 h-[32px] md:h-[36px] w-full text-black">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 px-2 md:px-3 text-sm outline-none bg-white"
            />
            <button type="submit" className="bg-black text-white px-3">
              <FaSearch size={14} />
            </button>
          </div>
        </form>

        {/* Icons */}
        <div className="flex items-center justify-end gap-2 md:gap-5 text-gray-700 text-[16px] flex-nowrap overflow-x-auto scrollbar-hide">
          <FaUser className="flex-shrink-0" />
          <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute top-[2px] right-[-6px] bg-red-500 text-white text-[10px] font-bold w-[16px] h-[16px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <FaHeart className="flex-shrink-0" />
          <FaGlobe className="flex-shrink-0" />
        </div>
      </div>

      {/* Top navbar */}
      <div className="hidden md:flex w-full">
        <nav className="flex items-center gap-5 px-6 py-1 text-[13px] font-medium text-black">
          {/* Dropdown menu */}
          <div
            className="relative"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <div className="flex items-center gap-1 cursor-pointer" onClick={toggleDropdown}>
              Categories <BsChevronDown size={12} />
            </div>

            {dropdownVisible && (
              <div className="absolute top-6 left-0 bg-white shadow-lg rounded w-64 max-h-[400px] overflow-y-auto z-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <ul className="divide-y divide-gray-100">
                  {categories.map((cat, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between px-4 py-2 text-[14px] text-black hover:bg-gray-100 cursor-pointer"
                    >
                      <Link href={formatCategoryUrl(cat)} className="flex-1 hover:text-blue-600">
                        {cat}
                      </Link>
                      <FaChevronRight className="text-gray-400 w-3 h-3 ml-2" />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Top Navbar Group Links with Hover Preview */}
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredCat(cat)}
              onMouseLeave={() => setHoveredCat(null)}
            >
              <Link
                href={`/group/${slugify(cat)}`}
                className="cursor-pointer whitespace-nowrap hover:text-blue-600"
              >
                {cat}
              </Link>
              {hoveredCat === cat && (
                <div className="absolute top-full left-0 z-50 mt-2">
                  <HoveredCategoryPreview category={cat} />
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Top Category Links */}
      <div className="md:hidden flex items-center gap-4 px-3 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide text-[13px] font-medium text-black">
        <div
          onClick={() => setMobileCategoryOpen((prev) => !prev)}
          className="flex items-center gap-1 cursor-pointer flex-shrink-0"
        >
          Categories <BsChevronDown size={10} />
        </div>

        {categories.map((item, idx) => (
          <Link
            key={idx}
            href={`/group/${slugify(item)}`}
            className="cursor-pointer flex-shrink-0"
          >
            {item}
          </Link>
        ))}
      </div>

      {mobileCategoryOpen && (
        <div className="md:hidden px-4 pb-2">
          <ul className="grid grid-cols-2 gap-2 text-sm mt-1">
            {categories.map((cat, i) => (
              <li key={i}>
                <Link href={formatCategoryUrl(cat)} className="hover:text-blue-600 block">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
