"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
  const images = [
    "/bg.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Product Details */}
      <div className="sm:px-12 flex flex-col sm:flex-row gap-4 text-gray-200 font-black">
        {/* Left: Main Image and Thumbnails */}
        <div className="flex-2 flex flex-col">

          {/* Main Image */}
          <div className="sm:p-4 flex-2 bg-gray-800 rounded-lg border border-gray-600 flex justify-center items-center">
            <Image
              src={selectedImage}
              alt="Product"
              width={400}
              height={400}
              className="mx-auto rounded object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-2 flex justify-center gap-2 bg-gray-800 rounded-lg border border-gray-600 p-2">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`relative w-20 h-20 cursor-pointer rounded-lg border ${
                  selectedImage === img ? "border-3 border-red-800" : "border-gray-500"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 bg-gray-800 rounded-lg border border-gray-600 p-4">
          {/* You can add product details here later */}
          <h2 className="text-xl">Product Name <small className="ml-4 text-[goldenrod] text-[14px] font-normal">Qty: {"100"}</small></h2>
          <div className="mt-2 mb-4">
            <h2 className="border-1 border-gray-100 font-normal inline bg-blue-700 rounded-2xl p-2">{"₦ 300,000"}</h2>
          </div><hr/>
          <ul>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Size</strong>: <span className="text-[goldenrod] text-sm font-normal">{"15000 mAh"}</span></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Caution</strong>: <span className="text-[goldenrod] text-sm font-normal">{"None"}</span></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Colour</strong>: <span className="text-[goldenrod] text-sm font-normal">{"Black"}</span></li>
          </ul>
          <div className="mt-3">
            <button className="w-full rounded-2xl bg-red-800 text-sm p-3 hover:bg-red-600">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}
