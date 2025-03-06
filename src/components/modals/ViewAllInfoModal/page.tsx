'use client';
import CrossSvg from '@/Assets/svgs/CrossSvg';
import LeftArrowSvg from '@/Assets/svgs/LeftArrow';
import { Pencil } from "lucide-react";

const ViewInfo = ({ setIsRefund }: any) => {
    return (
        <>
            {/* Header */}
            <div className="flex flex-col h-full justify-between items-center w-full">
                <div className='w-full'>
                    <div className="flex justify-between p-6 pb-0 items-center">
                        <div className="flex items-center gap-2">
                            <button onClick={() => { setIsRefund(false) }}>
                                <LeftArrowSvg />
                            </button>
                            <h2 className="text-lg font-semibold">View All Info</h2>
                        </div>
                        <button className="border-[#E9EAEA] border-[1px] p-2 rounded-[10px]" onClick={() => { setIsRefund(false) }}>
                            <CrossSvg size={24} />
                        </button>
                    </div>
                    <hr className='my-3' />
                    {/* Main Content */}


                    <div className="bg-white shadow-md rounded-lg p-6 w-full border border-gray-300 relative">
                        {/* Edit Icon */}
                        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition">
                            <Pencil size={20} />
                        </button>

                        {/* Grid Layout */}
                        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                            {/* Name */}
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Name</p>
                                <p className="text-base font-semibold text-gray-900">Name goes here</p>
                            </div>

                            {/* Passport Number */}
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Passport Number</p>
                                <p className="text-base font-semibold text-gray-900">050 414 8788</p>
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Date of Birth</p>
                                <p className="text-base font-semibold text-gray-900">26 October 2024</p>
                            </div>

                            {/* Gender */}
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Gender</p>
                                <p className="text-base font-semibold text-gray-900">Male</p>
                            </div>

                            {/* Marital Status */}
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Marital Status</p>
                                <p className="text-base font-semibold text-gray-900">Married</p>
                            </div>

                            {/* Spouse Name */}
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Spouse Name</p>
                                <p className="text-base font-semibold text-gray-900">Mrs. Bhaarti</p>
                            </div>

                            {/* Spouse Country of Birth */}
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Spouse Country of Birth</p>
                                <p className="text-base font-semibold text-gray-900">India</p>
                            </div>

                            {/* Have you Visited India Before? */}
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Have you Visited India Before?</p>
                                <p className="text-base font-semibold text-gray-900">Yes</p>
                            </div>
                        </div>
                    </div>









                </div>
                {/* Footer */}
                <div className='w-full'>
                    <hr className='my-2' />
                    <div className="flex justify-end p-6 pt-0 items-center pt-4">
                        <div className="flex gap-2">
                            <button onClick={() => setIsRefund(false)} className="bg-[#42DA82] text-white px-6 py-2 rounded-[12px] font-semibold">
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewInfo