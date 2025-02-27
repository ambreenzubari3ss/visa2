"use client";
import RevenueSvg from "@/Assets/svgs/RevenueSvg";
import styles from "./styles.module.css";
import Graph1Svg from "@/Assets/svgs/Graph1Svg";
import LeftIconSvg from "@/Assets/svgs/RightIconSvg";
import UserSvg from "@/Assets/svgs/UserSvg";
import Graph2Svg from "@/Assets/svgs/Graph2Svg";
import Graph3Svg from "@/Assets/svgs/Grapg3Svg";
import ApplicationSvg from "@/Assets/svgs/ApplicationSvg";

export default function Dashboard() {
    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>


            <div className="card">
                <div className={styles.containerdashboard}>
                    <div className="p-5">
                        <div className="flex items-center gap-2">
                            <RevenueSvg />
                            <span className={styles.cardHeader}>Total Revenue</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="text-[24px] font-[600] text-[#24282E]">$75,000</h2>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[14px] font-[700] text-[#009499]">10%</span>
                                    <span className="text-[14px] font-[400] text-[#727A90]">+750%</span>
                                </div>
                            </div>
                            <div>
                                <Graph1Svg />
                            </div>
                        </div>
                    </div>
                    <hr className="my-1" />
                    <div className="flex justify-between items-center p-5">
                        <span className="text-[14px] font-[600] text-[#42DA82]">See More</span>
                        <LeftIconSvg />
                    </div>
                </div>
            </div>


            <div className="card">
                <div className={styles.containerdashboard}>
                    <div className="p-5">
                        <div className="flex items-center gap-2">
                            <UserSvg />
                            <span className={styles.cardHeader}>Total New Customers</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="text-[24px] font-[600] text-[#24282E]">31,300</h2>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[14px] font-[700] text-[#009499]">5%</span>
                                    <span className="text-[14px] font-[400] text-[#727A90]">+156</span>
                                </div>
                            </div>
                            <div>
                                <Graph2Svg />
                            </div>
                        </div>
                    </div>
                    <hr className="my-1" />
                    <div className="flex justify-between items-center p-5">
                        <span className="text-[14px] font-[600] text-[#42DA82]">See More</span>
                        <LeftIconSvg />
                    </div>
                </div>
            </div>


            <div className="card">
                <div className={styles.containerdashboard}>
                    <div className="p-5">
                        <div className="flex items-center gap-2">
                            <ApplicationSvg />
                            <span className={styles.cardHeader}>Application to Apply</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="text-[24px] font-[600] text-[#24282E]">26</h2>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[14px] font-[700] text-[#009499]">10%</span>
                                </div>
                            </div>
                            <div>
                                <Graph3Svg />
                            </div>
                        </div>
                    </div>
                    <hr className="my-1" />
                    <div className="flex justify-between items-center p-5">
                        <span className="text-[14px] font-[600] text-[#42DA82]">See More</span>
                        <LeftIconSvg />
                    </div>
                </div>
            </div>



        </div>
    );
}
