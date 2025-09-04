"use client";

import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Checkout() {

    const router = useRouter();

    const [step, setStep] = useState(1); // 1 = Info, 2 = Shipping, 3 = Payment

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

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateStep = () => {
        if (step === 1) return formData.email.trim() !== "";
        if (step === 2) {
        return (
            formData.firstName.trim() &&
            formData.lastName.trim() &&
            formData.address.trim() &&
            formData.city.trim() &&
            formData.state.trim() &&
            formData.zip.trim()
        );
        }
        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
        setStep(step + 1);
        } else {
        alert("Please fill out all required fields before continuing.");
        }
    };

    const prevStep = () => setStep(step - 1);

    return (
        <div className="py-20 relative">

            <div className="absolute top-4 right-6 text-2xl py-1 px-4 border  border-gray-700 bg-gray-900 rounded-lg" onClick={()=> router.push("/")}><i className="fa fa-close"></i></div>

            <div className="mx-auto max-w-[1000px] bg-gray-800 flex flex-wrap gap-2">
                {/* Payment Methods */}
                <div className="mx-auto sm:min-h-screen flex flex-col items-center p-1 sm:p-6">
                    {/* Progress tracker */}
                    <div className="flex gap-4 text-sm mb-8 text-gray-200">
                        <span className={step === 1 ? "font-bold text-blue-500" : ""}>Information</span>
                        <span>{"›"}</span>
                        <span className={step === 2 ? "font-bold text-blue-500" : ""}>Shipping</span>
                        <span>{"›"}</span>
                        <span className={step === 3 ? "font-bold text-blue-500" : ""}>Payment</span>
                    </div>

                    {/* Step 1: Information */}
                    {step === 1 && (
                        <div className="bg-[rgba(0,0,0,0.7)] text-gray-200 w-full max-w-lg p-4 sm:p-6 rounded-2xl shadow-md space-y-6">
                            <h2 className="text-lg font-medium mb-2">Contact</h2>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email or mobile phone number"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border p-2 rounded-lg text-white"
                                required
                            />
                            <button
                                onClick={nextStep}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4"
                            >
                                Continue to shipping
                            </button>
                        </div>
                    )}

                    {/* Step 2: Shipping */}
                    {step === 2 && (
                        <div className="bg-[rgba(0,0,0,0.7)] text-gray-200 w-full max-w-lg p-4 sm:p-6 rounded-2xl shadow-md space-y-4">
                            <h2 className="text-lg font-medium">Shipping address</h2>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border p-2 rounded-lg text-white"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border p-2 rounded-lg text-white"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border p-2 rounded-lg text-white"
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full border p-2 rounded-lg text-white"
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full border p-2 rounded-lg text-white"
                            />
                            <input
                                type="text"
                                name="zip"
                                placeholder="ZIP code"
                                value={formData.zip}
                                onChange={handleChange}
                                className="w-full border p-2 rounded-lg text-white"
                            />

                            <div className="flex justify-between mt-4">
                                <button
                                onClick={prevStep}
                                className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                                >
                                Back
                                </button>
                                <button
                                onClick={nextStep}
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                                >
                                Continue to payment
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Payment */}
                    {step === 3 && (
                        <div className="bg-[rgba(0,0,0,0.7)] text-gray-200 w-full max-w-lg p-1 py-3 sm:p-6 rounded-2xl shadow-md space-y-6">
                            <h2 className="text-lg font-medium mb-4">Payment</h2>

                            {/* Summary Section */}
                            <div className="border-b border-gray-600 pb-3">
                                <div className="flex justify-between text-sm">
                                <span className="font-medium">Contact: </span>
                                <span className="break-all">{formData.email || "Not provided"}</span>
                                <button
                                    onClick={() => setStep(1)}
                                    className="text-blue-400 underline ml-2"
                                >
                                    Change
                                </button>
                                </div>
                            </div>

                            <div className="border-b border-gray-600 pb-3">
                                <div className="flex justify-between text-sm">
                                <span className="font-medium">Ship to</span>
                                <span>
                                    {formData.address}, {formData.city}, {formData.state}{" "}
                                    {formData.zip}
                                </span>
                                <button
                                    onClick={() => setStep(2)}
                                    className="text-blue-400 underline ml-2"
                                >
                                    Change
                                </button>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div>
                                <h3 className="text-md font-semibold mb-2">Payment</h3>
                                <p className="text-sm text-gray-400">
                                All transactions are secure and encrypted.
                                </p>
                                <div className="bg-gray-700 p-4 rounded-lg mt-2 text-center text-gray-400">
                                {"This store can’t accept payments right now."}
                                </div>
                            </div>

                            <div className="flex justify-between mt-4">
                                <button
                                onClick={prevStep}
                                className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                                >
                                Back
                                </button>
                                <button
                                type="button"
                                disabled
                                className="bg-green-600 text-white py-2 px-4 rounded-lg opacity-60 cursor-not-allowed"
                                >
                                Complete Order
                                </button>
                            </div>
                        </div>
                    )}

                    <p className="text-xs text-gray-500 mt-6">
                        All rights reserved Dev Vercel Shop
                    </p>
                </div>

                {/* Cart Display */}
                <div className="pt-6 pb-18 px-1 sm:p-6 z-20 mt-0 sm:border-l-1 border-gray-700 w-full sm:w-[25rem] bg-[rgba(0,0,0,0.88)]">
                        
                    <div className="relative font-black">
                        <h2 className="font-black px-4 py-6">Purchases</h2>
                    </div>

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
                    </div>
                </div>
            </div>
        </div>
    );
}
