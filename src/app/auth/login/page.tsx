"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Formik, Form } from "formik";
import styles from "./../styles.module.css";
import Button from "@/components/ui/button/button";
import LoginLogo from "../../../Assets/Images/LoginLogo.png";
import InputField from "@/components/ui/input/input";
import { useAppDispatch, useAppSelector } from "@/store";
import { loginUser } from "@/store/authSlice";
import { loginSchema } from "@/utils/validationSchema";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      console.log("Form submitted with values:", values);
      const result = await dispatch(
        loginUser({
          username: values.email,
          password: values.password,
        })
      ).unwrap();

      console.log("Login result:", result);

      if (result) {
        router.push("/main/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    // Any client-side only code goes here
  }, []);

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
          <h2 className={styles.title}>Sign in/Log in</h2>
          <span className={styles.WelcomeText}>Welcome Back👋</span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur }) => (
            <Form className="flex flex-col gap-5">
              <InputField
                fieldName="email"
                placeHolder="Email"
                type="email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
              <InputField
                fieldName="password"
                label="Enter your Password"
                placeHolder="Password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
              />
              <div
                onClick={() => router.push("/auth/forgot-password")}
                className="cursor-pointer"
              >
                <p className="text-[16px] font-[500] text-primary">
                  Forgot password?
                </p>
              </div>
              <Button
                buttonText={isLoading ? "Logging in..." : "Login"}
                type="submit"
                disabled={isLoading}
              />

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
