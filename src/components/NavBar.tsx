"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const categories: Record<string, string[]> = {
  samsung: ["Phones", "Watches", "Laptops", "Ear Buds"],
  apple: ["Phones", "Watches", "Laptops", "AirPods"],
  infinix: ["Phones", "Tablets", "Laptops"],
  google: ["Phones", "Smart Speakers", "Chromebooks"],
  itel: ["Phones", "Accessories"],
  nokia: ["Phones", "Feature Phones"],
  oppo: ["Phones", "Accessories"],
  oneplus: ["Phones", "Smart Watches"],
  realme: ["Phones", "Ear Buds"],
  tecno: ["Phones", "Tablets"],
  vivo: ["Phones", "Ear Buds"],
  xiaomi: ["Phones", "Watches", "Laptops"],
};

const NavBar: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null); // State for hovered brand

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-purple-100 py-2 hidden md:flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex items-center space-x-4">
          <a href="tel:+254700111555" className="text-sm text-gray-600">
            <i className="fas fa-phone-alt"></i> +254 700 111 555
          </a>
          <a href="mailto:info@bestplace.co.ke" className="text-sm text-gray-600"> 
            <i className="fas fa-envelope"></i> info@bestplace.co.ke
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-600">
            Facebook
          </a>
          <a href="#" className="text-sm text-gray-600">
            Twitter
          </a>
          <a href="#" className="text-sm text-gray-600">
            Instagram
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-between">
        {/* LEFT - Logo */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <div className="text-2xl tracking-wide font-semibold">BEST PLACE KE</div>
          </Link>
        </div>

        {/* RIGHT - Search & Icons */}
        <div className="flex items-center space-x-8">
          <SearchBar />
          <NavIcons />
        </div>
      </nav>

      {/* Tabbed Interface for Product Brands */}
      <div className="bg-orange-100 py-4 px-4 flex items-center justify-center space-x-6 ">
        <div className="flex space-x-4">
          {Object.keys(categories).map((brand) => (
            <div
              key={brand}
              className="relative" // Added relative positioning
              onMouseEnter={() => setHoveredBrand(brand)} // Show categories on hover
              onMouseLeave={() => setHoveredBrand(null)} // Hide categories when not hovering
            >
              <button
                className={`py-2 px-4 text-gray-700 hover:text-purple-500 ${
                  selectedBrand === brand ? "border-b-2 border-purple-500" : ""
                }`}
                onClick={() => {
                  setSelectedBrand(brand);
                  setHoveredBrand(brand); // Keep categories open if clicked
                }}
              >
                {brand.charAt(0).toUpperCase() + brand.slice(1)}
              </button>

              {/* Categories Display on Hover */}
              {hoveredBrand === brand && (
                <div className="absolute left-0 z-20 bg-purple-100 shadow-lg py-2 mt-1 rounded-md">
                  <ul className="space-y-2">
                    {categories[brand].map((category) => (
                      <li key={category}>
                        <Link 
                          href="/list" 
                          className="block text-purple-600 hover:underline px-4 py-2"
                          onClick={() => setHoveredBrand(null)} // Close categories on selection
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
