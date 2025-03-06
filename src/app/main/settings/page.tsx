"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ProfileImage from "@/Assets/Images/generic-profile.png";
import InputField from "@/components/ui/input/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail } from "lucide-react";
import EmailSvg from "@/Assets/svgs/EmailSvg";
import PhoneSvg from "@/Assets/svgs/PhoneSvg";
import CopySvg from "@/Assets/svgs/CopySvg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    name: "Linda Blair",
    email: "lindablair@mail.com",
    phone: "+926546613114",
    newPassword: "",
    confirmPassword: "",
  });
  const [businessSettings, setBusinessSettings] = useState({
    sendInvoices: "yes",
    allowCancel: "yes",
    apiKey: "",
    selectedStatuses: ["status1"],
    anyFee: "",
    whatFee: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBusinessSettingsChange = (field: string, value: any) => {
    setBusinessSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className={styles.settingsContainer}>
      <h1 className={styles.header}>Settings</h1>

      <div className={styles.mainCard}>
        <div className={styles.gridLayout}>
          {/* Left Column - Profile Info */}
          <div className={styles.profileCard}>
            <div className={styles.profileCardInner}>
              <div className={styles.profileImageContainer}>
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
                  <div className="flex justify-between items-center w-full">
                    <p className={styles.infoLabel}>Email</p>
                    <CopySvg />
                  </div>
                  <span className={styles.infoValue}>lindablair@mail.com</span>
                </div>
                <div className={styles.infoItem}>
                  <div className="flex justify-between items-center w-full">
                    <p className={styles.infoLabel}>Phone Number</p>
                    <CopySvg />
                  </div>
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
          <div className={styles.formSection}>
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
                  <div>
                    <InputField
                      label="Name"
                      fieldName="name"
                      onChange={handleInputChange}
                      placeHolder="Enter Name"
                    />
                    <div className="mt-[10px]">
                      <InputField
                        icon={<EmailSvg />}
                        label="Email"
                        fieldName="email"
                        type="email"
                        onChange={handleInputChange}
                        placeHolder="Enter Email"
                      />
                    </div>
                    <div className="mt-[10px]">
                      <InputField
                        label="Phone Number"
                        fieldName="phone"
                        icon={<PhoneSvg color="#727A90" />}
                        onChange={handleInputChange}
                        placeHolder="Enter Phone Number"
                      />
                    </div>
                  </div>
                  <div className={styles.formGrid}>
                    <InputField
                      label="New Password"
                      fieldName="newPassword"
                      isPassword={true}
                      type="password"
                      onChange={handleInputChange}
                      placeHolder="Enter New Password"
                    />
                    <InputField
                      label="Confirm New Password"
                      fieldName="confirmPassword"
                      type="password"
                      isPassword={true}
                      onChange={handleInputChange}
                      placeHolder="Confirm Password"
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
                <form className="">
                  {/* Send Invoices Section */}
                  <div className="">
                    <h3 className={styles.settingLabel}>
                      Send invoices to customers automatically?
                    </h3>
                    <RadioGroup
                      defaultValue={businessSettings.sendInvoices}
                      onValueChange={(value) =>
                        handleBusinessSettingsChange("sendInvoices", value)
                      }
                      className="flex gap-4 "
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="send-yes" />
                        <Label
                          className={styles.radioCheckLabel}
                          htmlFor="send-yes"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="send-no" />
                        <Label
                          className={styles.radioCheckLabel}
                          htmlFor="send-no"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* API Key Section */}
                  <div className="mt-[20px]">
                    <InputField
                      fieldName="apiKey"
                      label="Payment provider API key"
                      placeHolder="Enter API Key"
                      onChange={(e) =>
                        handleBusinessSettingsChange("apiKey", e.target.value)
                      }
                    />
                  </div>

                  {/* Allow Cancel Section */}
                  <div className="mt-[20px]">
                    <h3 className={styles.settingLabel}>
                      Allow users to cancel?
                    </h3>
                    <RadioGroup
                      defaultValue={businessSettings.allowCancel}
                      onValueChange={(value) =>
                        handleBusinessSettingsChange("allowCancel", value)
                      }
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="cancel-yes" />
                        <Label
                          className={styles.radioCheckLabel}
                          htmlFor="cancel-yes"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="cancel-no" />
                        <Label
                          className={styles.radioCheckLabel}
                          htmlFor="cancel-no"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Status Section */}
                  <div className="mt-[20px]">
                    <h3 className={styles.settingLabel}>In what Status</h3>
                    <div className="flex flex-row flex-wrap mt-[10px]">
                      {[
                        "Status Value",
                        "Status Value",
                        "Status Value",
                        "Status Value",
                      ].map((status, index) => (
                        <div
                          key={index}
                          className="flex items-center mr-[20px]"
                        >
                          <Checkbox
                            checked={businessSettings.selectedStatuses.includes(
                              `status${index + 1}`
                            )}
                            className="mr-[10px]"
                            onCheckedChange={(checked) => {
                              const newStatuses = checked
                                ? [
                                    ...businessSettings.selectedStatuses,
                                    `status${index + 1}`,
                                  ]
                                : businessSettings.selectedStatuses.filter(
                                    (s) => s !== `status${index + 1}`
                                  );
                              handleBusinessSettingsChange(
                                "selectedStatuses",
                                newStatuses
                              );
                            }}
                          />
                          <Label
                            className={styles.radioCheckLabel}
                            htmlFor={`status-${index}`}
                          >
                            {status}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fee Section */}
                  <div className="grid grid-cols-2 gap-6 mt-[20px]">
                    <div className="space-y-4">
                      <InputField
                        fieldName="anyFee"
                        label="Any Fee?"
                        placeHolder="Enter fee amount"
                        onChange={(e) =>
                          handleBusinessSettingsChange("anyFee", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-4">
                      <InputField
                        fieldName="whatFee"
                        label="What Fee"
                        placeHolder="Enter fee description"
                        onChange={(e) =>
                          handleBusinessSettingsChange(
                            "whatFee",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <Button type="submit" className={styles.saveButton}>
                      Save Changes
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
