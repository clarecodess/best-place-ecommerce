import Image from "next/image";
import Link from "next/link";

const offers = [
  { id: 1, title: "Samsung", img: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg" },
  { id: 2, title: "Sony", img: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 3, title: "Apple", img: "https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  
];

const Offers = () => {
  return (
    <div className="p-6 md:px-10 ">
      <div className="flex gap-x-8 gap-y-16 justify-between">
        {offers.map((offer) => (
          <Link
            key={offer.id}
            href={`/offers?offer=${offer.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-64 lg:h-72">
              <Image
                src={offer.img}
                alt={offer.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                className="object-cover rounded-lg shadow-md transition-opacity duration-500 hover:opacity-80"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-lg font-semibold tracking-wide text-gray-800">
                {offer.title}
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                {offer.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offers;
