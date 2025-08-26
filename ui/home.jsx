import Image from "next/image"
import Link from "next/link"

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  style: 'italic',
  weight: ['300', '400', '500'], // Multiple weights
});

export default function HomeUi(){
    return(
        <div className="my-8">
            {/* Hero Image model */}
            <div className="pb-4 flex gap-1 sm:gap-4 sm:px-12 lg:px-30">
                
                <div className="flex-2 relative">
                    <Image
                        src="/phone.avif"       // image path (public folder or external URL)
                        alt="Company Logo"    // accessibility description
                        width={400}           // desired width in px
                        height={400}          // desired height in px
                        className="sm:border-1 border-gray-600 sm:py-2 flex-2 sm:w-200  max-h-[27rem] bg-gray-800 mx-auto rounded-lg object-contain"
                    /> 
                    <strong className="whitespace-nowrap mr-[-36px] text-[10px] sm:text-base absolute bottom-10 right-12 pl-4 py-1 bg-white text-gray-700 rounded-lg">Tecno CAMON 40-PRO<span className="ml-4 p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                </div>     
                
                <div className="flex-1 flex-col gap-4 sm:gap-6" >
                    <div className="relative sm:p-2 bg-gray-800 mb-1 rounded-lg border-1 border-gray-600">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="mx-auto rounded-lg object-cover"
                        />
                        <strong className="mr-[-28px] text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Pouch<span className="ml-2 p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>

                    <div className="relative sm:p-2 bg-gray-800 mt-1 rounded-lg border-1 border-gray-600">
                        <Image
                            src="/notfound.jpeg"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="mx-auto rounded-lg object-cover"
                        />
                        <strong className="whitespace-nowrap mr-[-32px] text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Not Available<span className="ml-2 p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 0000"}</span></strong>     
                    </div>
                </div>
            </div><hr className="text-gray-500"/>

            {/* Other Phone Models */}
            <div className="pt-8 pb-8 sm:my-6 mt-2 sm:p-4 overflow-x-auto">                   
                <div className="phone-scroller flex flex-row gap-4 sm:gap-6 ">
                    <div className="relative flex justify-between items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                
                
                    <div className="relative flex justify-center items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                
                
                    <div className="relative flex justify-center items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                
                
                    <div className="relative flex justify-center items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                
                
                    <div className="relative flex justify-center items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                
                
                    <div className="relative flex justify-center items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                
                
                    <div className="relative flex justify-center items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                
                
                    <div className="relative flex justify-center items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                
                
                    <div className="relative flex justify-center items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/phone.avif"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                
                
                    <div className="relative flex justify-center items-center min-w-[10rem] h-40 rounded-lg border-1 border-gray-600 sm:min-w-[25rem] sm:h-55 bg-gray-800 p-1">
                        <Image
                            src="/bg.jpeg"       // image path (public folder or external URL)
                            alt="Company Logo"    // accessibility description
                            width={200}           // desired width in px
                            height={200}          // desired height in px
                            className="rounded-lg mx-auto object-contain"
                        />
                        <strong className="mr-[-21px] whitespace-nowrap text-[8px] sm:text-base shadow-2xl absolute bottom-2 right-8 pl-4 py-1 bg-white text-gray-700 rounded-lg">Samsung Galaxy <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                    </div>
                </div>
            </div><hr className="text-gray-500"/>

            {/* contacts */}
            <div id="bg" className={`${roboto.className} sm:px-12 lg:px-30 text-center px-2 py-6 sm:py-10  grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-100 font-bold`}>
                <h3 className="sm:text-xl mt-4 sm:col-span-2 underline text-center font-semibold">Do You Have Complains?</h3>
                <div className="p-4 sm:p-14 bg-red-800 rounded-lg">
                    <Link href={"mailto:nomopoventures@yahoo.com "}>Manger Nomopo <small className="font-normal">- {"[Manager]"}</small></Link>
                </div>
                <div className="p-4 sm:p-14 bg-red-800 rounded-lg">
                    <Link href={"mailto:veraekanem.ev@gmail.com"}>Vera <small className="font-normal">- {"[Customer Service 1]"}</small></Link>
                </div>
                <div className="p-4 sm:p-14 bg-red-800 rounded-lg">
                    <Link href={"mailto:codewithme.nw@gmail.com"}>Martins <small className="font-normal">- {"[Customer service 2]"}</small></Link>
                </div>
                <div className="p-4 sm:p-14 bg-red-800 rounded-lg">
                    <Link href={"mailto:princenwachukwu308@yahoo.com "}>Prince <small className="font-normal">- {"[Customer service 3]"}</small></Link>
                </div>
                <h5 className="sm:col-span-2 text-sm font-normal text-center bg-gray-900 p-3 rounded-lg">contact us today ☝</h5>
            </div><hr className="text-gray-500"/>

            {/* Trending */}
            <div className="max-h-[50rem] overflow-y-auto sm:max-h-none mt-6 sm:mt-12 mx-auto max-w-[60rem] sm:p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-4 sm:gap-6 pb-6">
                <h2 className="bg-gray-900 z-30 sticky sm:static pt-6 top-[-2px] mt-0 mb-2 sm:col-span-2 text-lg sm:text-xl underline text-center text-gray-200 font-extrabold">Trending Models</h2>
                <div className="relative">
                    <Image 
                        src="/phone.avif"       // image path (public folder or external URL)
                        alt="Company Logo" width={300} height={300} 
                        className="rounded-lg w-70 h-80 sm:w-90 sm:h-100 lg:w-100 lg:h-110 mx-auto" 
                        
                    />
                    <strong className="shadow-2xl absolute bottom-4 sm:bottom-6 right-10 pl-4 py-1 bg-white text-gray-700 rounded-lg">Oppo A5-PRO <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                </div>
                <div className="relative">
                    <Image 
                        src="/phone.avif"       // image path (public folder or external URL)
                        alt="Company Logo" width={300} height={300} 
                        className="rounded-lg w-70 h-80 sm:w-90 sm:h-100 lg:w-100 lg:h-110 mx-auto" 
                        
                    />
                    <strong className="shadow-2xl absolute bottom-4 sm:bottom-6 right-10 pl-4 py-1 bg-white text-gray-700 rounded-lg">Oppo A5-PRO <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                </div>
                <div className="relative">
                    <Image 
                        src="/phone.avif"       // image path (public folder or external URL)
                        alt="Company Logo" width={300} height={300} 
                        className="rounded-lg w-70 h-80 sm:w-90 sm:h-100 lg:w-100 lg:h-110 mx-auto" 
                        
                    />
                    <strong className="shadow-2xl absolute bottom-4 sm:bottom-6 right-10 pl-4 py-1 bg-white text-gray-700 rounded-lg">Oppo A5-PRO <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                </div>
                <div className="relative">
                    <Image 
                        src="/phone.avif"       // image path (public folder or external URL)
                        alt="Company Logo" width={300} height={300} 
                        className="rounded-lg w-70 h-80 sm:w-90 sm:h-100 lg:w-100 lg:h-110 mx-auto" 
                        
                    />
                    <strong className="shadow-2xl absolute bottom-4 sm:bottom-6 right-10 pl-4 py-1 bg-white text-gray-700 rounded-lg">Oppo A5-PRO <span className="p-2 text-white bg-blue-600 rounded-r-lg">{"₦ 1,000,000"}</span></strong>     
                </div>
            </div><hr className="text-gray-500"/>
        </div>
    )
}