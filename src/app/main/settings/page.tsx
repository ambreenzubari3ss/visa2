"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ProfileImage from "@/Assets/Images/generic-profile.png";
import InputField from "@/components/ui/input/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    name: "Linda Blair",
    email: "lindablair@mail.com",
    phone: "+926546613114",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className={styles.header}>Settings</h1>

      <div className="mt-6 bg-white rounded-[16px] p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-[16px] border border-[#E9EAEA]">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={ProfileImage}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className={styles.profileName}>Linda Blair</h2>
              <p className={styles.profileRole}>Manager</p>

              <div className="w-full mt-6 space-y-4">
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ID</span>
                  <span className={styles.infoValue}>ID011221</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>lindablair@mail.com</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Phone Number</span>
                  <span className={styles.infoValue}>050 414 8788</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Joined</span>
                  <span className={styles.infoValue}>12 December 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Settings Form */}
          <div className="md:col-span-8 lg:col-span-9">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="border-b border-[#E9EAEA] w-full justify-start gap-8">
                <TabsTrigger value="personal" className={styles.tabButton}>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger value="business" className={styles.tabButton}>
                  Business Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="">
                    <InputField
                      label="Name"
                      fieldName="name"
                      onChange={handleInputChange}
                      placeHolder={"Enter Name"}
                    />
                    <InputField
                      label="Email"
                      fieldName="email"
                      type="email"
                      onChange={handleInputChange}
                      placeHolder={"Enter Email"}
                    />
                    <InputField
                      label="Phone Number"
                      fieldName="phone"
                      onChange={handleInputChange}
                      placeHolder={""}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <InputField
                      label="New Password"
                      fieldName="newPassword"
                      type="password"
                      onChange={handleInputChange}
                      placeHolder={""}
                    />
                    <InputField
                      label="Confirm New Password"
                      fieldName="confirmPassword"
                      type="password"
                      onChange={handleInputChange}
                      placeHolder={""}
                    />
                  </div>

                  <div className="flex justify-start mt-8">
                    <Button type="submit" className={styles.saveButton}>
                      Save Changes
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="business" className="mt-6">
                {/* Add business settings form here */}
                <p>Business settings content goes here</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
