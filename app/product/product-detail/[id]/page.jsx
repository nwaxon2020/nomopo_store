"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
  const images = [
    "/bg.jpeg",
    "/phone.avif",
    "/instore.jpg",
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
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Size and Weight</strong>: <span className="text-[goldenrod] text-sm font-normal">{"164.82mm/75.53mm 194g"}</span></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Storage</strong>: <span className="text-[goldenrod] text-sm font-normal">{"8GB + 256GB"}</span> <span className="font-semibold text-gray-200">expandable: {"8GB"}</span></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Resolution</strong>: <span className="text-[goldenrod] text-sm font-normal">{"720 x 1604 Pixels"}</span> <p className="text-gray-400">Cover Glasses: <span className="text-[goldenrod] font-normal">{"Corning® Gorilla® Glass 7"}</span></p></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Refresh Rate</strong>: <span className="text-[goldenrod] text-sm font-normal">{`Max: 90Hz ${"Mid:"} Default: 60Hz)`}</span></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Rear Camera</strong>: <span className="text-[goldenrod] text-sm font-normal">{"50-MP wide | 2MP Macro-Lens | 8MP Ultra-wide"}</span> <p className="text-gray-400">Front Camera: <span className="text-[goldenrod] font-normal">{"8MP"}</span></p></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Battery</strong>: <span className="text-[goldenrod] text-sm font-normal">{"5800mAh"}</span> <p className="text-gray-400">Fast Charging: <span className="text-[goldenrod] font-normal">{"45W"}</span></p></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Chips</strong>: <span className="text-[goldenrod] text-sm font-normal">{"Qualcomm® Snapdragon® 6s 4G Gen1 | 8 Cores | 6nm"}</span></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Biometrics</strong>: <span className="text-[goldenrod] text-sm font-normal">{"Side Mounted Fingerprint | Face ID"}</span></li>
              <li className="mb-2 p-1 bg-gray-900 rounded text-gray-400 text-sm"><strong>Cellular Network</strong>: <span className="text-[goldenrod] text-sm font-normal">{"Dual Nano Sim Support | 4G Band Bluetooth"}</span></li>
          </ul>
          <div className="mt-3">
            <button className="w-full rounded-2xl bg-red-800 text-sm p-3 hover:bg-red-600">ADD TO CART</button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <h3 className="border-b-1 border-gray-600 px-2 sm:px-12  sm:text-xl py-1 font-black mt-12 text-gray-200">Related Prooducts</h3>                  
      <div className="my-4 sm:my-8 sm:mx-12 flex flex-row gap-4 sm:gap-6 overflow-x-auto">
        <Link href={`/product/product-detail/${2}`} className="relative flex justify-between items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/phone.avif"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </Link>
        
        
        <Link href={`/product/product-detail/${2}`} className="relative flex justify-center items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/phone.avif"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </Link>
    
    
        <Link href={`/product/product-detail/${2}`} className="relative flex justify-center items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/phone.avif"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </Link>
        
        
        <Link href={`/product/product-detail/${2}`} className="relative flex justify-center items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/phone.avif"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </Link>
    
    
        <Link href={`/product/product-detail/${2}`} className="relative flex justify-center items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/phone.avif"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </Link>
    
    
        <Link href={`/product/product-detail/${2}`} className="relative flex justify-center items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/phone.avif"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </Link>
    
    
        <Link href={`/product/product-detail/${2}`} className="relative flex justify-center items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/phone.avif"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </Link>
    
    
        <Link href={`/product/product-detail/${2}`} className="relative flex justify-center items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/phone.avif"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </Link>
    
    
        <Link href={`/product/product-detail/${2}`} className="relative flex justify-center items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/phone.avif"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </Link>
    
    
        <div className="relative flex justify-center items-center min-w-[18rem] min-h-30 rounded-lg border-1 border-gray-600 sm:min-w-[18rem] sm:min-h-30 bg-gray-800 p-1">
            <Image
                src="/bg.jpeg"       // image path (public folder or external URL)
                alt="Company Logo"    // accessibility description
                width={400}           // desired width in px
                height={400}          // desired height in px
                className="rounded-lg mx-auto object-contain"
            />
            <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
        </div>
      </div><hr className="text-gray-500"/>
    </div>
  );
}
