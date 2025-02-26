"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./../styles.module.css"; // Import the CSS Module
import Button from "@/components/ui/button/button";
import LoginLogo from "../../../Assets/Images/LoginLogo.png"; // Import the image
import InputField from "@/components/ui/input/input";
import './../../globals.css';
import { useAppDispatch, useAppSelector } from "@/store";
import { loginUser } from "@/store/authSlice";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser(formData));
    if (loginUser.fulfilled.match(result)) {
      router.push("/dashboard");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) dispatch(clearError());
  };

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
          <h2 className={styles.title}>Sign in/Log in</h2>
          <span className={styles.WelcomeText}>Welcome Back👋</span>
        </div>
        <div className="flex flex-col gap-5">
          <InputField fieldName={'email'} placeHolder={'email'} />
          <InputField fieldName={'password'} placeHolder={'password'}/>
          <p className="text-base font-medium color-primary">Forgot password?</p>
          <Button buttonText={'Login'} />
          <div>
            <p className="text-color text-sm font-medium text-center m-0">
              By clicking on the "Create an Account" button, I consent
              to the processing of my personal data in accordance with the{" "}
              <strong className="highlight-color">
                Privacy Policy
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
