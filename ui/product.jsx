"use client"
import Image from "next/image"
import { useState } from "react";


export default function ProductUi(){

    const[menu, setMenu] = useState(false);

    return(
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-6 sm:px-6 lg:px-12 text-gray-200">
            <div className="sm:flex-1 sm:max-w-50">
                <div className="hidden sm:block ">
                    <h3 className="pl-1 mt-0 text-lg font-bold border-b-1 border-gray-500 text-gray-500">categories</h3>
                    <ul className="w-full p-4 pb-50 bg-gray-800 italics flex flex-col gap-4 items-start justify-center rounded-b-lg">
                            <li className="hover:bg-gray-700 transition ease-in-out w-full p-1 font-semi-bold border-b-1 border-gray-700">Tecno</li>
                            <li className="hover:bg-gray-700 transition ease-in-out w-full p-1 font-semi-bold border-b-1 border-gray-700">Infinix</li>
                            <li className="hover:bg-gray-700 transition ease-in-out w-full p-1 font-semi-bold border-b-1 border-gray-700">Itel</li>
                            <li className="hover:bg-gray-700 transition ease-in-out w-full p-1 font-semi-bold border-b-1 border-gray-700">Redmi</li>
                            <li className="hover:bg-gray-700 transition ease-in-out w-full p-1 font-semi-bold border-b-1 border-gray-700">Oppo</li>
                            <li className="hover:bg-gray-700 transition ease-in-out w-full p-1 font-semi-bold border-b-1 border-gray-700">Vivo</li>
                            <li className="hover:bg-gray-700 transition ease-in-out w-full p-1 font-semi-bold border-b-1 border-gray-700">Others</li>
                            <li className="hover:bg-gray-700 transition ease-in-out w-full p-1 ">Assesories</li>
                    </ul>
                </div>

                {/* Mobile view Brand Categories */}
                <div className="relative sm:hidden w-70">
                    <div onClick={()=> setMenu((prev)=>!prev)} className="absolute top-0 z-20 inline ml-4 p-2 rounded-lg bg-gray-700 font-bold">Categories <i className={`ml-4 fa ${menu?"fa-angle-up":"fa fa-angle-down"}`}></i></div>
                    {menu && <ul id="cat" className="max-h-[20rem] z-10 overflow-y-auto w-40 p-4 rounded-b-lg absolute top-[1.4rem] ml-4 bg-gray-500 italics flex flex-col gap-4 items-start justify-center">
                            <li onClick={()=> setMenu(false)} className="w-full pt-30 p-1 font-semi-bold border-b-1 border-gray-700">Tecno</li>
                            <li onClick={()=> setMenu(false)} className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Infinix</li>
                            <li onClick={()=> setMenu(false)} className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Itel</li>
                            <li onClick={()=> setMenu(false)} className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Redmi</li>
                            <li onClick={()=> setMenu(false)} className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Oppo</li>
                            <li onClick={()=> setMenu(false)} className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Vivo</li>
                            <li onClick={()=> setMenu(false)} className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Others</li>
                            <li onClick={()=> setMenu(false)} className="w-full p-1 ">Assesories</li>
                        </ul>
                    }
                </div>
            </div>
            <div className="sm:mt-6 sm:flex-5 mt-12 sm:mt-0 col-span-1 sm:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-6 ">
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                    
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
                <div className="relative p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-t-lg"
                    />

                    <div className="flex flex-col">
                        <strong className="bg-gray-900 p-1 rounded-b-md font-black">Tecno</strong>
                        <div>
                            <small className="font-semibold">Ram & Rom: <span className="font-normal text-[goldenrod]">{"8/256gb, "}</span></small>
                            <small className="font-semibold">Front Camera: <span className="font-normal text-[goldenrod]">{"50MP, "}</span></small>
                            <small className="font-semibold">Rear Camera: <span className="font-normal text-[goldenrod]">{"32Mp, "}</span></small>
                            <small className="font-semibold">Battrey: <span className="font-normal text-[goldenrod]">{"5000Mah, "}</span></small>
                            <small className="font-semibold">Processor: <span className="font-normaltext-[goldenrod]">{"MTK Helio G65 (6nm)"}</span></small>
                        </div>
                    </div>

                    <span className="absolute top-4 right-4 p-2 rounded-lg rounded-tl-none rounded-br-none bg-red-800 text-white font-bold underline">{"#252,999"}</span>
                    <button className="w-full text-sm mt-2 hover:bg-green-700 transition ease-in-out bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}