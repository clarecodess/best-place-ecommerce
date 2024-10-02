"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Laptop Sale",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Accessories Sale",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Smart Phone Sale",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/17177820/pexels-photo-17177820/free-photo-of-lenses-of-iphone-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[50vh] max-h-[500px] overflow-hidden relative">
      <div
        className="w-max h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-2 text-center md:text-left">
              <h2 className="text-lg md:text-2xl font-medium">
                {slide.description}
              </h2>
              <h1 className="text-2xl md:text-4xl font-bold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="mt-2 rounded-md bg-black text-white py-2 px-4 text-sm md:text-base transition-transform duration-300 transform hover:scale-105 hover:bg-gray-800">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-full md:w-1/2 h-[30vh] md:h-full relative">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION DOTS */}
      <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index ? "bg-gray-800 scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
