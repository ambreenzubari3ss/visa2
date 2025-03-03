"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "@/store";
import { forgotPassword } from "@/store/authSlice";
import styles from "./../styles.module.css";
import Button from "@/components/ui/button/button";
import InputField from "@/components/ui/input/input";
import Image from "next/image";
import LoginLogo from "../../../Assets/Images/LoginLogo.png";

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const initialValues = {
    email: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await dispatch(forgotPassword(values.email)).unwrap();
      // Optionally redirect to login page after successful submission
      // setTimeout(() => {
      //   router.push("/auth/login");
      // }, 2000);
    } catch (error) {
      console.error("Forgot password error:", error);
    }
  };

  return (
    <div className={styles.containerauth}>
      <div className={styles.card}>
        <div className="flex items-center justify-center flex-col gap-7">
          <Image
            src={LoginLogo}
            alt="Login Logo"
            width={156}
            height={93}
            className={styles.LoginLogo}
          />
          <h2 className={styles.title}>Forgot Password</h2>
          <div className="flex items-center justify-center">
            <span className={`${styles.WelcomeText} w-[80%]`}>
              You don&apos;t have to worry about forgetting your password.
            </span>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={forgotPasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur }) => (
            <Form className="flex flex-col gap-5 mt-[20px]">
              <InputField
                fieldName="email"
                placeHolder="Enter your email"
                type="email"
                label="Enter Email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
              <div className="mt-[10px]">
                <Button
                  buttonText={isLoading ? "Sending..." : "Reset Password"}
                  type="submit"
                  disabled={isLoading}
                />
              </div>
              <div>
                <p className={styles.pageDesc}>
                  By clicking on the &quot;Create an Account&quot; button, I
                  consent to the processing of my personal data in accordance
                  with the{" "}
                  <strong className="text-black">Privacy Policy</strong>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ForgotPassword;
