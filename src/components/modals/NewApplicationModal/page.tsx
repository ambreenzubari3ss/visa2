'use client';
import CrossSvg from '@/Assets/svgs/CrossSvg';
import LeftArrowSvg from '@/Assets/svgs/LeftArrow';
import styles from '../ApplicationDetailModal/styles.module.css';
import CopyGreenSvg from '@/Assets/svgs/CopyGreenSvg';
import { useState } from "react";
import { Check } from "lucide-react";
import { X } from "lucide-react";
import "../../ui/input/style.modules.css";
import "@/styles/globals.css";
import InputField from '@/components/ui/input/input';
import DropDown from '@/components/ui/dropdown/page';
import CircleImageSvg from '@/Assets/svgs/CricleImageSvg';
import NewApplication2 from '../NewApplicationModal2/page';

const SpecialTagInput = () => {
    const [tags, setTags] = useState(["Tag1"]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            e.preventDefault();
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleRemoveTag = (tag: string) => {
        setTags(tags.filter((t) => t !== tag));
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center flex-wrap focus-within:border-green-500 input-text overflow-y-scroll">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="bg-green-100 text-green-700 flex items-center px-3 py-1 rounded-full mr-2 mb-1"
                    >
                        <span className="mr-2">{tag}</span>
                        <button
                            onClick={() => handleRemoveTag(tag)}
                            className="text-green-600 hover:text-green-800 focus:outline-none"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))}
                <input
                    type="text"
                    className="flex-1 border-none outline-none text-gray-700 placeholder-gray-400"
                    placeholder="Type and press Enter"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleAddTag}
                />
            </div>
        </div>
    );
};

const steps = [
    { id: 1, label: "Step 1" },
    { id: 2, label: "Step 2" },
];

const NewApplication = ({ setIsNewApplication }: any) => {

    const [currentStep, setCurrentStep] = useState(1);

    const handleStepClick = (step: number) => {
        setCurrentStep(step);
    };

    const handleNextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const backClicked = () => {
        if (currentStep === 1) {
            setIsNewApplication(false);
        } else {
            setCurrentStep(1);
        }
    }

    return (
        <>
            {/* Header */}
            <div className="flex flex-col h-full justify-between items-center w-full">
                <div className='w-full'>
                    <div className="flex justify-between p-6 pb-0 items-center">
                        <div className="flex items-center gap-2">
                            <button onClick={() => { backClicked() }}>
                                <LeftArrowSvg />
                            </button>
                            <h2 className="text-lg font-semibold">Add New Application</h2>
                        </div>
                        <button className="border-[#E9EAEA] border-[1px] p-2 rounded-[10px]" onClick={() => { setIsNewApplication(false) }}>
                            <CrossSvg size={24} />
                        </button>
                    </div>
                    <hr className='my-3' />
                    {/* Main Content */}

                    <div className='px-8'>
                        <div className='flex justify-start'>
                            <div className="flex flex-col items-center space-y-2">
                                {/* Stepper */}
                                <div className="flex items-center justify-center space-x-6">
                                    {steps.map((step, index) => (
                                        <div key={step.id} className="flex items-center m0imp">
                                            {/* Step Circle */}
                                            <div
                                                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 
                                            transition-all ${currentStep > step.id
                                                        ? "bg-green-500 border-green-500 text-white" // Completed step
                                                        : currentStep === step.id
                                                            ? "border-green-500 text-green-500" // Active step
                                                            : "border-gray-300 text-gray-400" // Inactive step
                                                    }`}
                                                onClick={() => handleStepClick(step.id)}
                                            >
                                                {currentStep > step.id ? (
                                                    <Check className="w-5 h-5" /> // Show checkmark for completed steps
                                                ) : currentStep === step.id ? (
                                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> // Show dot for active step
                                                ) : currentStep === 1 ? (
                                                    null // If on first step, make second circle completely empty
                                                ) : (
                                                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span> // Show gray dot for upcoming steps
                                                )}
                                            </div>


                                            {/* Line Between Steps */}
                                            {index !== steps.length - 1 && (
                                                <div className={`w-[350px] h-1 ${currentStep > step.id ? "bg-green-500" : "bg-gray-300"}`} />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Step Labels */}
                                <div className="flex justify-center space-x-[330px]">
                                    {steps.map((step) => (
                                        <span
                                            key={step.id}
                                            className={`text-sm font-medium ${currentStep >= step.id ? "text-black" : "text-gray-500"
                                                }`}
                                        >
                                            {step.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {currentStep === 1 && (
                            <div >
                                {/* Form Section */}
                                <div>
                                    <div className="flex items-center justify-between gap-6">
                                        <InputField fieldName="email" placeHolder="Email" type="text" label="Email" />
                                        <InputField fieldName="name" placeHolder="Name" type="text" label="Name" />
                                    </div>

                                    <div className="flex items-center justify-between gap-6 mt-3">
                                        <InputField fieldName="phone" placeHolder="+923434348432" type="text" label="Phone" />
                                        <div className="w-full flex flex-col align-start justify-start gap-3">
                                            <label className="text-[#24282E] font-jakarta">Special Tag</label>
                                            <SpecialTagInput />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-6 mt-3">
                                        <InputField fieldName="price" placeHolder="Price" type="number" label="Price" />
                                        <DropDown label="Priority" options={["High Priority", "Medium Priority"]} fieldName="priority" />
                                    </div>

                                    <div className="flex items-center justify-between gap-6 mt-3">
                                        <DropDown label="Visa type" options={["Business Visa", "Tourist Visa"]} fieldName="visaType" />
                                        <DropDown label="Visa country" options={["India", "USA", "UK"]} fieldName="visaCountry" />
                                    </div>
                                </div>
                                {/* Group Selection (Yes/No) */}
                                <div className="flex items-center gap-4 mt-3">
                                    <span className="text-[#24282E] font-jakarta font-[500] text-[18px]">Group ?</span>
                                    <label className="flex items-center gap-2 cursor-pointer text-[#24282E] font-jakarta font-[500] text-[18px]">
                                        <input
                                            type="radio"
                                            name="group"
                                            value="yes"
                                            className="hidden peer"
                                        />
                                        <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-400 peer-checked:bg-green-500 peer-checked:border-green-500">
                                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                        </div>
                                        Yes
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer text-[#24282E] font-jakarta font-[500] text-[18px]">
                                        <input
                                            type="radio"
                                            name="group"
                                            value="no"
                                            className="hidden peer"
                                        />
                                        <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-400 peer-checked:bg-green-500 peer-checked:border-green-500">
                                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                        </div>
                                        No
                                    </label>
                                </div>
                                {/* Text Area */}
                                <div className="mt-3">
                                    <label className="text-[#24282E] font-jakarta font-[500] text-[18px]">Text Area</label>
                                    <textarea
                                        placeholder="Write Description Here"
                                        className="w-full border-2 border-gray-300 rounded-lg p-3 mt-1 focus:border-primary focus:outline-none"
                                        rows={3}
                                    ></textarea>
                                </div>
                                {/* Image Upload (Passport & Photo) */}
                                <div className="flex items-center justify-between gap-6 mt-3">
                                    {/* Passport Upload */}
                                    <div className="w-full">
                                        <label className="text-[#24282E] font-jakarta font-[500] text-[18px]">Passport</label>
                                        <div className={`flex items-center justify-between gap-3 ${styles.mainDiv}`}>
                                            <CircleImageSvg />
                                            <span className="text-[14px] font-[400] text-[#727A90]">Drag and drop image here, or click add image</span>
                                            <button className="bg-[#42DA82] text-white px-6 py-2 rounded-[12px] font-semibold">Upload</button>
                                        </div>
                                    </div>

                                    {/* Photo Upload */}
                                    <div className="w-full">
                                        <label className="text-[#24282E] font-jakarta font-[500] text-[18px]">Photo</label>
                                        <div className={`flex items-center justify-between gap-3 ${styles.mainDiv}`}>
                                            <CircleImageSvg />
                                            <span className="text-[14px] font-[400] text-[#727A90]">Drag and drop image here, or click add image</span>
                                            <button className="bg-[#42DA82] text-white px-6 py-2 rounded-[12px] font-semibold">Upload</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <NewApplication2 />
                        )}

                    </div>
                </div>
                {/* Footer */}
                <div className='w-full'>
                    <hr className='my-2' />
                    <div className="flex justify-end p-6 pt-0 items-center pt-4">
                        <div className="flex gap-2 items-center">
                            <button className={styles.refundBtn}>
                                <CopyGreenSvg />
                                <span className="text-[12px] font-[600] underline">Add Another Application for Same</span>
                            </button>
                            <button onClick={handleNextStep} className="bg-[#42DA82] text-white px-6 py-2 rounded-[12px] font-semibold">
                                <span>Next Step</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewApplication