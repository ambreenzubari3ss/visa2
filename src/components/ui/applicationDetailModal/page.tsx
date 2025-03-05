'use client';
import { X } from 'lucide-react';
import styles from './styles.module.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        name: string;
        photoUrl: string;
        email: string;
        phone: string;
        visaType: string;
        country: string;
        flightDate: string;
        passportPhotoUrl: string;
        applicationId: string;
        passportNumber: string;
        status: string;
        cancellationReason: string;
        internalNotes: string;
        paidAmount: string;
        paymentDate: string;
        invoiceFiles: { name: string; url: string }[];
    };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {

    const searchParams = useSearchParams();
    const dialogRef = useRef<null | HTMLDialogElement>(null);
    const showDialog = searchParams.get('showDialog');

    useEffect(() => {
        if (showDialog === '') {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [showDialog]);

    const closeDialog = () => {
        dialogRef.current?.close();
        onClose();
    };

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" >
            <div className="bg-white w-[700px] p-6 rounded-lg shadow-lg relative">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Application Details</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        <X size={24} />
                    </button>
                </div>
                <hr className='my-3' />

                {/* Main Content */}
                <div className="grid grid-cols-12 gap-4">
                    {/* Left Section */}
                    <div className="col-span-5">
                        <div className={`flex flex-col items-center mb-4 ${styles.mainDiv}`}>
                            <img src={data.photoUrl} alt="Profile" className="w-[120px] h-[120px] rounded-full object-cover" />
                            <p className="mt-2 font-medium">{data.name}</p>
                            <span className="text-gray-500 text-sm">Photo</span>
                        </div>
                        <div className={`flex flex-col items-center mb-4 ${styles.mainDiv}`}>
                            <img src={data.passportPhotoUrl} alt="Passport" className="w-[120px] h-[120px] rounded-full object-cover" />
                            <p className="mt-2 text-sm text-gray-500">Passport Picture</p>
                        </div>
                        <div className="border p-3 rounded-md text-sm">
                            <p><strong>Official Application ID:</strong> {data.applicationId}</p>
                            <p className="mt-1"><strong>Visa Type:</strong> <span className="text-red-500">{data.visaType}</span></p>
                            <p className="mt-1"><strong>Passport Number:</strong> {data.passportNumber}</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-span-7">
                        <div className={`flex flex-col gap-4 ${styles.mainDiv}`}>
                            <h1 className="text-[20px] font-[600] text-[#24282E]">Application Info</h1>
                            <div className="grid grid-cols-12">
                                <div className="col-span-6">
                                    <p className="text-[14px] font-[500] text-[#727A90]">Email</p>
                                    <p className="text-[14px] font-[500] text-[#24282E]">{data.email}</p>
                                </div>
                                <div className="col-span-6">
                                    <p className="text-[14px] font-[500] text-[#727A90]">Phone Number</p>
                                    <p className="text-[14px] font-[500] text-[#24282E]">{data.phone}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12">
                                <div className="col-span-6">
                                    <p className="text-[14px] font-[500] text-[#727A90]">Visa Type</p>
                                    <p className="text-[14px] font-[500] text-[#24282E]">{data.visaType}</p>
                                </div>
                                <div className="col-span-6">
                                    <p className="text-[14px] font-[500] text-[#727A90]">Country</p>
                                    <p className="text-[14px] font-[500] text-[#24282E]">{data.country}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12">
                                <div className="col-span-6">
                                    <p className="text-[14px] font-[500] text-[#727A90]">Passport Number</p>
                                    <p className="text-[14px] font-[500] text-[#24282E]">{data.visaType}</p>
                                </div>
                                <div className="col-span-6">
                                    <p className="text-[14px] font-[500] text-[#727A90]">Flight Date</p>
                                    <p className="text-[14px] font-[500] text-[#24282E]">{data.country}</p>
                                </div>
                            </div>
                            <button className="text-blue-500 mt-2">View all Info</button>
                        </div>
                        <div className="mt-4 border p-3 rounded-md text-sm">
                            <h3 className="font-semibold mb-2">Actions</h3>
                            <div className="flex justify-between items-center">
                                <span>Invoice</span>
                                <button className="text-green-500">Resend</button>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span>Visa</span>
                                <button className="text-green-500">Resend</button>
                            </div>
                        </div>
                        <div className="mt-4 border p-3 rounded-md text-sm">
                            <h3 className="font-semibold mb-2">Status</h3>
                            <button className="bg-red-500 text-white px-4 py-1 rounded-md text-sm">{data.status}</button>
                            <p className="text-gray-500 text-xs mt-2">
                                {data.cancellationReason}
                            </p>
                        </div>
                        <div className="mt-4 border p-3 rounded-md text-sm">
                            <h3 className="font-semibold mb-2">Internal Notes</h3>
                            <textarea className="w-full border rounded-md p-2" placeholder="Write Description Here"></textarea>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-6 border-t pt-4">
                    <div>
                        <p className="text-sm font-medium">Paid: <span className="text-green-500">${data.paidAmount}</span></p>
                        <p className="text-xs text-gray-500">Date: {data.paymentDate}</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">Refund Amount</button>
                        <button className="bg-green-500 text-white px-6 py-2 rounded-md text-sm">Apply</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Modal