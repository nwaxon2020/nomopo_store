import Link from "next/link"

export default function Footer(){
    return(
        <div className="flex justify-around text-white py-14 border-t-1 border-white">
            <ul className="flex flex-col justify-around gap-5">
                <li className="hover:text-gray-400 transition duration-200 ease-in-out"><Link href={"/"}>Home</Link></li>
                <li className="hover:text-gray-400 transition duration-200 ease-in-out"><Link href={"/product"}>Products</Link></li>
                <li className="hover:text-gray-400 transition duration-200 ease-in-out"><Link href={"/news"}>News</Link></li>
                <li className="hover:text-gray-400 transition duration-200 ease-in-out"><Link href={"/accessories"}>Accessories</Link></li>
            </ul>

            <ul className="flex flex-col justify-around gap-1">
                <li className="hover:text-gray-400 transition duration-200 ease-in-out"><Link href={"/policy"}>Privacy Policy</Link></li>
                <li className="hover:text-gray-400 transition duration-200 ease-in-out"><Link href={"/policy/faq"}>FAQ</Link></li>
                <li>
                    <ul className="flex flex-row justify-around items-center gap-5 sm:gap-10">
                        <li><Link href={"#add facebook Link"} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square hover:text-gray-400 transition duration-200 ease-in-out" style={{fontSize:"24px", color:"white"}}></i></Link></li>
                        <li><Link href={"#add twitter Link"} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter hover:text-gray-400 transition duration-200 ease-in-out" style={{fontSize:"24px"}}></i></Link></li>
                        <li><Link href={"#add instagram Link"} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square hover:text-gray-400 transition duration-200 ease-in-out" style={{fontSize:"24px"}}></i></Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}