// import Image from "next/image";
// import Link from "next/link";

// const CategoryList = () => {
//   return (
//     <div className="px-4 overflow-x-scroll scrollbar-hide">
//         <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
//             <Link 
//                 href='/list?cate=test'
//                 className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">

//                 <div className="relative w-full h-80">
//                     <Image src="https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                         alt="" 
//                         fill sizes="25vw" 
//                         className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
//                 </div>
//                 <h1 className="mt-8 font-light text-xl tracking-wide">Computers</h1>
//             </Link>

//             <Link 
//                 href='/list?cate=test'
//                 className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">

//                 <div className="relative w-full h-80">
//                     <Image src="https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                         alt="" 
//                         fill sizes="25vw" 
//                         className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
//                 </div>
//                 <h1 className="mt-8 font-light text-xl tracking-wide">Computers</h1>
//             </Link>

//             <Link 
//                 href='/list?cate=test'
//                 className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">

//                 <div className="relative w-full h-80">
//                     <Image src="https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                         alt="" 
//                         fill sizes="25vw" 
//                         className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
//                 </div>
//                 <h1 className="mt-8 font-light text-xl tracking-wide">Computers</h1>
//             </Link>

//             <Link 
//                 href='/list?cate=test'
//                 className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">

//                 <div className="relative w-full h-80">
//                     <Image src="https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                         alt="" 
//                         fill sizes="25vw" 
//                         className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
//                 </div>
//                 <h1 className="mt-8 font-light text-xl tracking-wide">Computers</h1>
//             </Link>

            
//         </div>
//     </div>
//   )
// }

// export default CategoryList

import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 1, title: "Samsung", img: "https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 2, title: "Apple", img: "https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 3, title: "Oppo", img: "https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  
];

const CategoryList = () => {
  return (
    <div className="p-6 md:px-10 overflow-x-auto scrollbar-hide">
      <div className="flex gap-x-8 gap-y-16 justify-between">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/list?cate=${category.title.toLowerCase()}`}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-64 lg:h-72">
              <Image
                src={category.img}
                alt={category.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                className="object-cover rounded-lg shadow-md transition-opacity duration-500 hover:opacity-80"
              />
            </div>
            <h1 className="mt-6 text-lg font-semibold text-center tracking-wide text-gray-800">
              {category.title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
