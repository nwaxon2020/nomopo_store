
export default function WorkDays(){
    //working days
    const schedule = [
        { day: "Monday", time: "7:00 AM - 8:00 PM" },
        { day: "Tuesday", time: "7:00 AM - 8:00 PM" },
        { day: "Wednesday", time: "7:00 AM - 8:00 PM" },
        { day: "Thursday", time: "7:00 AM - 8:00 PM" },
        { day: "Friday", time: "7:00 AM - 5:00 PM" },
        { day: "Saturday", time: "9:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Closed" },
    ];

    return(
        <div>
            {/* WORKING Days */}
            <div className="text-center overflow-x-auto px-1 lg:px-12 sm:px-4 py-6">
                <table className="min-w-[300px] w-full border-collapse rounded-sm shadow-md overflow-hidden">
                    <thead className="bg-gray-200 text-red-800">
                    <tr>
                        <th className="px-4 py-3">Days</th>
                        <th className="px-4 py-3">Working Hours</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-700 text-gray-100">
                    {schedule.map((item, index) => (
                        <tr key={index} className="border-t hover:bg-gray-500 hover:text-gray-700 transition-colors">
                        <td className="px-4 py-2 font-medium">{item.day}</td>
                        <td className="px-4 py-2">{item.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}