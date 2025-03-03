"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import OTPInput from "otp-input-react";
// import styles from "./styles.module.css";
import Button from "@/components/ui/button/button";
import LoginLogo from "../../../Assets/Images/LoginLogo.png";
import styles from "./../styles.module.css"; // Import the CSS Module
import { useRouter, useSearchParams } from "next/navigation";

import "./../../globals.css";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/store";
import { verifyResetPin } from "@/store/authSlice";

export default function OTPPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState<string>("");
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Get email from URL parameters
    const emailParam = searchParams.get("email");
    console.log("decoded", emailParam);
    if (!emailParam) {
      toast.error("Email not found. Please try again");
      router.push("/auth/forgot-password");
      return;
    }
    setEmail(decodeURIComponent(emailParam));
  }, [searchParams, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (OTP.length !== 4) {
      toast.error("Please enter a valid 4-digit PIN");
      return;
    }

    try {
      await dispatch(
        verifyResetPin({
          email: email,
          pin: OTP,
        })
      ).unwrap();

      // After successful verification, redirect to reset password page
      router.push(`/auth/reset-password?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error("OTP verification error:", error);
      // Error toast is already handled in the thunk
    }
  };

  return (
    <div className={styles.containerauth}>
      <div className={styles.card}>
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
              <p className={styles.otpCheckMailText}>
                Check your mail and enter PIN
              </p>
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
              buttonText={
                isLoading ? "Verifying..." : "Continue to Reset Password"
              }
              type="submit"
              disabled={OTP.length !== 4 || isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
