"use client";
import { useState, useEffect } from "react";


const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
        <h4 className="font-medium">Choose a Color</h4>
        <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
                <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "/>
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-yellow-500"></li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
                <div className="absolute w-10 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "/>
            </li>
        </ul>
        <h4 className="font-medium">Choose a Size</h4>
        <ul className="flex items-center gap-3">
            <li className="ring-1 ring-accent text-accent rounded-md py-1 px-4 text-sm cursor-pointer">Small</li>
            <li className="ring-1 ring-accent text-white bg-accent rounded-md py-1 px-4 text-sm cursor-pointer">Medium</li>
            <li className="ring-1 ring-purple-300 text-accent bg-purple-300 rounded-md py-1 px-4 text-sm cursor-not-allowed">Large</li>
        </ul>
    </div>
  )
}

export default CustomizeProducts