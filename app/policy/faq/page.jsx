"use client"

import { useEffect, useState } from 'react';

export default function FAQ(){
    
    const [lastUpdated, setLastUpdated] = useState('');

    useEffect(() => {
        // Get the last modified date of the document
        const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
        setLastUpdated(lastModifiedDate);
    }, []);

    return(
        <div className="py-4 sm:p-8">
            <div className="max-w-6xl mx-auto px-4 my-6 py-8 bg-gray-300 ">
                <h1 className="text-xl sm:text-3xl font-bold text-center text-red-800 mb-4 underline">Frequently Asked Questions</h1>
            </div><hr className="text-white" />
            <div className="p-1 text-center"><small style={{color: "#fff"}}>Last updated: {lastUpdated}</small></div>
        </div>
    )

}