"use client"
import Image from "next/image"
import { useState } from "react";


export default function ProductUi(){

    const[menu, setMenu] = useState(false);

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:px-6 lg:px-12 text-gray-200">
            <section>
                <div className="hidden sm:block ">Here</div>
                <div className="relative sm:hidden w-70">
                    <div onClick={()=> setMenu((prev)=>!prev)} className="absolute top-0 z-20 inline ml-4 p-2 rounded-lg bg-gray-700 font-bold">Catigories <i className={`ml-4 fa ${menu?"fa-angle-up":"fa fa-angle-down"}`}></i></div>
                    {menu && <ul id="cat" className="max-h-[20rem] z-10 overflow-y-auto w-40 p-4 rounded-b-lg absolute top-[1.4rem] ml-4 bg-gray-500 italics flex flex-col gap-4 items-start justify-center">
                            <li className="w-full pt-20 p-1 font-semi-bold border-b-1 border-gray-700">Tecno</li>
                            <li className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Infinix</li>
                            <li className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Itel</li>
                            <li className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Redmi</li>
                            <li className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Oppo</li>
                            <li className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Vivo</li>
                            <li className="w-full p-1 font-semi-bold border-b-1 border-gray-700">Others</li>
                            <li className="w-full p-1 ">Assesories</li>
                        </ul>
                    }
                </div>
            </section>
            <section className="mt-12 sm:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-6 ">
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={300}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
                <div className="p-4 bg-gray-800 border-1 border-gray-600 rounded-lg">
                    <Image
                    
                        src="/bg.jpeg"
                        alt=""
                        width={400}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                </div>
            </section>
        </div>
    )
}