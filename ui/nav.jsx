"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react";

export default function Nav(){

    const[menu, setMenu] = useState(false);

    const path = usePathname();

    if(path === "/policy"){
        return false
    }

    return(
        <div className="relative py-4 sm:py-8">
            <div className="flex flex-col px-5 py-2 gap-10 border-b-1 border-white">
                <ul className="pl-0 flex justify-between items-end text-white font-semibold">
                    <li className="mb-4"><div><h2 className="text-red-600 font-extrabold underline border-3 inline rounded-md p-2 border-l-[goldenrod]"><Link href={"/"}>Nomo<span className="text-[goldenrod] underline">Po</span></Link></h2></div></li>
                    <li className={`hidden sm:block ${path==="/"?"text-gray-400":""}`}><Link href={"/"}><i className="cursor-pointer fa fa-home hover:text-green-300 transition duration-200 ease-in-out" style={{fontSize:"24px"}}></i></Link></li>
                    <li className={`hidden sm:block ${path==="/product"?"text-gray-400":""}`}><Link className="hover:text-green-300 transition duration-200 ease-in-out" href={"/product"}>Products</Link></li>
                    
                    <li className="hidden sm:block relative w-[25rem]">
                        <input className="w-full px-3 py-1 bg-white outline-gray-400 rounded-lg text-gray-900" type="text" />
                        <i className="text-gray-500 absolute top-2 right-2 fa fa-search"></i>
                    </li>

                    <li className={`hidden sm:block ${path==="/news"?"text-gray-400":""}`}><Link className="hover:text-green-300 transition duration-200 ease-in-out" href={"/news"}>News</Link></li>
                    <li className="ml-20 sm:ml-0">
                        <i className="cursor-pointer fa fa-shopping-cart hover:text-green-300 transition duration-200 ease-in-out" style={{fontSize:"24px"}}></i> 
                        {/* {Remeber to add an onlick to activat a link to show a form for orders}    */}
                    </li>

                    <li onClick={()=> setMenu((prev)=>!prev)} className="sm:hidden"><i className={`fa ${menu?"fa-angle-double-up":"fa-bars"}`} style={{fontSize:"30px"}}></i></li>
                </ul>
                
            </div>
            {
                menu && (<div className="side-bar absolute right-0 sm:hidden z-20">
                <ul className="font-bold p-4 h-[50vh] w-[14rem] text-gray-300 bg-gray-600 flex flex-col space around gap-3 rounded-bl-lg">
                    <li className={`${path==="/"?"text-gray-500 border-b-1 pt-4 pb-2":"border-b-1 pt-4 pb-2"}`}>
                        <Link onClick={()=> setMenu(false)} href={"/"}><i className="w-full cursor-pointer fa fa-home" style={{fontSize:"24px"}}></i></Link>
                    </li>
                    <li className={`${path==="/product"?"text-gray-500 border-b-1 pt-4 pb-2":"border-b-1 pt-4 pb-2"}`}>
                        <Link onClick={()=> setMenu(false)} className="w-full" href={"/product"}>Products</Link>
                    </li>
                
                    <li className={`${path==="/news"?"text-gray-500 border-b-1 pt-4 pb-2":"border-b-1 pt-4 pb-2"}`}>
                        <Link onClick={()=> setMenu(false)} className="w-full" href={"/news"}>News</Link>
                    </li>
                    <li className="pt-4 pb-2">
                        <Link onClick={()=> setMenu(false)} className="w-full" href={"/policy/faq"}>FAQ</Link>
                    </li>
                </ul>
            </div>)
            }
            <div className="sm:hidden mt-5">
                <div className="px-5 mx-auto relative w-full sm:max-w-[30rem]">
                    <input className="w-full px-3 py-1 bg-white outline-gray-400 rounded-lg text-gray-900" type="text" />
                    <i className="text-gray-500 absolute top-2 right-8 fa fa-search"></i>
                </div>
            </div>
        </div>
    )

}