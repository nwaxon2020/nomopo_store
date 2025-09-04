"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react";
import Image from "next/image";

export default function Nav(){

    //Sample List
    const cart = [
        {
            img: "/phone.avif",
            name: "Power Bank",
            amount: "₦20,000",
            color: "blue"
        },
        {
            img: "/phone.avif",
            name: "Screen Guard",
            amount: "₦20,000",
            color: "none"
        },
        {
            img: "/phone.avif",
            name: "Samsung Galaxy A5",
            amount: "₦20,000",
            color: "Gray"
        },
    ]

    const[menu, setMenu] = useState(false);
    const[cartView, setcartView] = useState(false);

    const path = usePathname();

    if(path === "/policy" || path === "/checkout"){
        return false
    }

    return(
        <div className="relative py-4 sm:py-8">
            <div className="flex flex-col px-5 py-2 gap-10 border-b-1 border-white">
                <ul className="relative pl-0 flex justify-between items-end text-white font-semibold">
                    <li className="mb-4"><div><h2 className="text-red-600 font-extrabold underline border-3 inline rounded-md p-2 border-l-[goldenrod]"><Link href={"/"}>Nomo<span className="text-[goldenrod] underline">Po</span></Link></h2></div></li>
                    <li className={`hidden sm:block ${path==="/"?"text-gray-400":""}`}><Link href={"/"}><i className="cursor-pointer fa fa-home hover:text-green-300 transition duration-200 ease-in-out" style={{fontSize:"24px"}}></i></Link></li>
                    <li className={`hidden sm:block ${path==="/product"?"text-gray-400":""}`}><Link className="hover:text-green-300 transition duration-200 ease-in-out" href={"/product"}>Products</Link></li>
                    
                    <li className="hidden sm:block relative w-[25rem]">
                        <input className="w-full px-3 py-1 bg-white outline-gray-400 rounded-lg text-gray-900" type="text" />
                        <i className="text-gray-500 absolute top-2 right-2 fa fa-search"></i>
                    </li>
                    
                    <li className={`hidden sm:block ${path==="/accessories"?"text-gray-400":""}`}><Link className="hover:text-green-300 transition duration-200 ease-in-out" href={"/accessories"}>Accessories</Link></li>
                    <li className={`hidden sm:block ${path==="/news"?"text-gray-400":""}`}><Link className="hover:text-green-300 transition duration-200 ease-in-out" href={"/news"}>News</Link></li>
                    <li className="ml-20 sm:ml-0">
                        <i onClick={()=> setcartView(true)} className="cursor-pointer fa fa-shopping-cart hover:text-green-300 transition duration-200 ease-in-out" style={{fontSize:"24px"}}></i> 
                        {<small className="absolute top-0  text-center bg-blue-500 w-8 h-8 rounded-full p-2">1</small>}
                    </li>

                    <li onClick={()=> setMenu((prev)=>!prev)} className="sm:hidden"><i className={`fa ${menu?"fa-angle-double-up":"fa-bars"}`} style={{fontSize:"30px"}}></i></li>
                </ul>
                
            </div>
            {
                menu && (<div className="side-bar absolute right-0 sm:hidden z-30">
                <ul className="font-bold p-4 h-[50vh] w-[14rem] text-gray-300 bg-gray-600 flex flex-col space around gap-3 rounded-bl-lg">
                    <li className={`${path==="/"?"text-gray-500 border-b-1 pt-4 pb-1":"border-b-1 pt-4 pb-1"}`}>
                        <Link onClick={()=> setMenu(false)} href={"/"}><i className="w-full cursor-pointer fa fa-home" style={{fontSize:"24px"}}></i></Link>
                    </li>
                    <li className={`${path==="/product"?"text-gray-500 border-b-1 pt-4 pb-1":"border-b-1 pt-4 pb-1"}`}>
                        <Link onClick={()=> setMenu(false)} className="w-full" href={"/product"}>Products</Link>
                    </li>
                
                    <li className={`${path==="/accessories"?"text-gray-500 border-b-1 pt-4 pb-1":"border-b-1 pt-4 pb-1"}`}>
                        <Link onClick={()=> setMenu(false)} className="w-full" href={"/accessories"}>Accessories</Link>
                    </li>
                    <li className={`${path==="/news"?"text-gray-500 border-b-1 pt-4 pb-1":"border-b-1 pt-4 pb-1"}`}>
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

            {/* CART POP UP */}
            {
                cartView &&  <div id="cart" className="z-30 absolute top-0 sm:top-23 right-0 pt-6 pb-18 px-1 sm:p-6 mt-0 sm:border-l-1 rounded-bl-lg border-gray-700 w-full sm:w-[25rem] bg-[rgba(0,0,0,0.88)]">
                    
                    <div className="relative font-black">
                        <h2 className="font-black px-4 py-6">Purchases</h2>
                        <div className="absolute top-4 right-6 text-2xl py-1 px-4 border  border-gray-700 bg-gray-900 rounded-lg" onClick={()=> setcartView(false)}><i className="fa fa-close"></i></div>
                    </div>

                    {/* CART EMPTY display */}
                    {/* <div className="flex justify-center items-center text-2xl font-extrabold text-white text-center min-w-50 min-h-50">Cart Empty</div> */}

                    {
                        cart.map((p, idx)=>{
                            return(
                                <div key={idx} className="relative flex justify-start items-center py-3 border-b-1 border-gray-600">
                                    <Image
                                        src={p.img}
                                        alt="Product"
                                        width={65}
                                        height={65}
                                        className="rounded-lg m-1 object-contain"
                                    />
                                    <div className="relative px-3 w-full bg-gray-800 rounded-lg flex flex-col flex-wrap">
                                        <strong>{p.name}</strong>
                                        <p>{p.amount}</p>
                                        <p>{p.color}</p>
                                        <i className="absolute right-4 top-7 fa fa-close"></i>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="mt-22">
                        <div>
                            <ul className="p-4 rounded-lg bg-white text-gray-700">
                                <li className="py-2 border-b border-gray-300"><strong className="text-red-500">Amount:</strong><span className="ml-2 font-semibold">{"₦104,000"}</span></li>
                                <li className="py-2 border-b border-gray-300"><strong className="text-red-500">Shipping Cost:</strong><span className="ml-2 font-semibold">{"₦100"}</span></li>
                                <li className="mt-8"><strong className="text-red-500">Total:</strong><span className="ml-2 font-semibold">{"₦104,100"}</span></li>
                            </ul>
                        </div>
                        <Link href={"/checkout"} className="block my-12 w-full rounded-lg mx-auto px-5 py-2 bg-blue-700 hover:bg-blue-900 font-extrabold">Proceed to CheckOut</Link>
                    </div>
                </div>
            }
        </div>
    )
}