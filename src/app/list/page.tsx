"use client"
import Image from "next/image";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import Link from "next/link";

// Define your categories
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

const ListPage = () => {
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand"); // Get the brand from query parameters

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative mt-8">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-accent text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      
      {/* FILTER */}
      <Filter />

      {/* PRODUCT LIST */}
      <h1 className="mt-12 text-xl font-semibold">
        {brand ? `${brand.charAt(0).toUpperCase() + brand.slice(1)} Products` : "Products for You!"}
      </h1>
      
      {/* Display categories if brand is selected */}
      {brand && categories[brand as string] ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Categories:</h2>
          <ul className="mt-2 space-y-2">
            {categories[brand as string].map((category) => (
              <li key={category}>
                <Link href={`/brands/${brand}/${category.toLowerCase()}`} className="text-blue-600 hover:underline">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-2 text-gray-600">No categories available for this brand.</p>
      )}

      {/* PRODUCT LIST COMPONENT */}
      <ProductList />
    </div>
  );
};

export default ListPage;
