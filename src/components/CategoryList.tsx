import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link 
                href='/list?cate=test'
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">

                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        fill sizes="25vw" 
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                </div>
                <h1 className="mt-8 font-light text-xl tracking-wide">Computers</h1>
            </Link>

            <Link 
                href='/list?cate=test'
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">

                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        fill sizes="25vw" 
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                </div>
                <h1 className="mt-8 font-light text-xl tracking-wide">Computers</h1>
            </Link>

            <Link 
                href='/list?cate=test'
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">

                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        fill sizes="25vw" 
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                </div>
                <h1 className="mt-8 font-light text-xl tracking-wide">Computers</h1>
            </Link>

            <Link 
                href='/list?cate=test'
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">

                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        fill sizes="25vw" 
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                </div>
                <h1 className="mt-8 font-light text-xl tracking-wide">Computers</h1>
            </Link>

            
        </div>
    </div>
  )
}

export default CategoryList