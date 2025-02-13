import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/16171553/pexels-photo-16171553/free-photo-of-top-view-of-a-laptop-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27861771/pexels-photo-27861771/free-photo-of-home-office-table-equipment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">KES 2000</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl bg-purple-500 ring-1 ring-accent text-accent py-2 px-4 text-xs w-max hover:bg-accent hover:text-white">Add to Cart</button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/16171553/pexels-photo-16171553/free-photo-of-top-view-of-a-laptop-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27861771/pexels-photo-27861771/free-photo-of-home-office-table-equipment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">KES 2000</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl bg-purple-500 ring-1 ring-accent text-accent py-2 px-4 text-xs w-max hover:bg-accent hover:text-white">Add to Cart</button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/16171553/pexels-photo-16171553/free-photo-of-top-view-of-a-laptop-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27861771/pexels-photo-27861771/free-photo-of-home-office-table-equipment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">KES 2000</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl bg-purple-500 ring-1 ring-accent text-accent py-2 px-4 text-xs w-max hover:bg-accent hover:text-white">Add to Cart</button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/16171553/pexels-photo-16171553/free-photo-of-top-view-of-a-laptop-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27861771/pexels-photo-27861771/free-photo-of-home-office-table-equipment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">KES 2000</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl bg-purple-500 ring-1 ring-accent text-accent py-2 px-4 text-xs w-max hover:bg-accent hover:text-white">Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
