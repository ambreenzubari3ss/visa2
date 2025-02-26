"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OTPInput from "otp-input-react";
// import styles from "./styles.module.css";
import Button from "@/components/ui/button/button";
import LoginLogo from "../../../Assets/Images/LoginLogo.png";
import styles from "./../styles.module.css"; // Import the CSS Module

import "./../../globals.css";

export default function OTPPage() {
  const router = useRouter();
  const [OTP, setOTP] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification here
    console.log("OTP submitted:", OTP);
    // If verification successful, redirect to next page
    // router.push("/dashboard");
  };

  return (
    // <div className={styles.container}>
    //   <div>
    //     <div className="flex items-center justify-center flex-col gap-7">
    //       <Image
    //         src={LoginLogo}
    //         alt="Logo"
    //         width={156}
    //         height={93}
    //         className={styles.logo}
    //       />
    //       <h2 className={styles.title}>Enter Code</h2>
    //       <span className={styles.subtitle}>Check your mail and enter PIN</span>
    //     </div>

    //     <form onSubmit={handleSubmit} className="flex flex-col gap-6">
    //       <div className={styles.otpContainer}>
    //         <OTPInput
    //           value={OTP}
    //           onChange={setOTP}
    //           autoFocus
    //           OTPLength={4}
    //           otpType="number"
    //           disabled={false}
    //           inputClassName={styles.otpInput}
    //         />
    //       </div>

    //       <p className={styles.resendText}>
    //         Enter Code to Continue or continue
    //       </p>
    //       <Button
    //         buttonText="Continue to login"
    //         type="submit"
    //         disabled={OTP.length !== 4}
    //       />
    //     </form>
    //   </div>
    // </div>

    <div className={styles.containerauth}>
      <div>
        <div className="flex items-center justify-center flex-col gap-7">
          <Image
            src={LoginLogo} // Use imported image
            alt="Example Image"
            width={156}
            height={93}
            className={styles.LoginLogo}
          />
          <h2 className={styles.title}>Enter Code </h2>
          <span className={styles.WelcomeText}>
            Check your mail and enter PIN
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className={styles.otpContainer}>
            <p>Check your mail and enter PIN</p>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              inputClassName={styles.otpInput}
            />
          </div>

          <p className={styles.resendText}>
            Enter Code to Continue or continue
          </p>
          <Button
            buttonText="Continue to login"
            type="submit"
            disabled={OTP.length !== 4}
          />
        </form>
      </div>
    </div>
  );
}
