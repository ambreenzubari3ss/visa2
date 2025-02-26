"use client";

import Button from "@/components/ui/button/button";
import InputField from "@/components/ui/input/input";
import Image from "next/image";
import React from "react";
import "./../../globals.css";
import styles from "./../styles.module.css";
import LoginLogo from "../../../Assets/Images/LoginLogo.png";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <div className={styles.containerauth}>
      <div className={styles.card}>
        <div className="flex items-center justify-center flex-col gap-7">
          <Image
            src={LoginLogo} // Use imported image
            alt="Example Image"
            width={156}
            height={93}
            className={styles.LoginLogo}
          />
          <h2 className={styles.title}>Forgot Password</h2>
          <div className="flex items-center justify-center">
            <span className={`${styles.WelcomeText} w-[80%]`}>
              You don't have to worry about forgetting your password.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-[20px]">
          <InputField fieldName={"enter email"} placeHolder={"email"} />
          <div className="mt-[10px]">
            <Button
              buttonText={"Get Code"}
              onClick={() => router.push("/auth/otp")}
            />
          </div>
          <div>
            <p className="text-color text-[14px] font-[500] text-center m-0">
              By clicking on the "Create an Account" button, I consent to the
              processing of my personal data in accordance with the{" "}
              <strong className="highlight-color">Privacy Policy</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
