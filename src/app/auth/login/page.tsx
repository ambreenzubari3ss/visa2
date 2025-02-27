"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Formik, Form } from 'formik';
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
  const { isLoading, error } = useAppSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    // const result = await dispatch(loginUser(values));
    console.log("VALUES___________", values)
    if (loginUser.fulfilled.match(result)) {
      // router.push("/dashboa .rd");
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
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
              <InputField
                fieldName="password"
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
                <p className="text-[16px] font-[500] color-[#42DA82]">
                  Forgot password?
                </p>
              </div>
              <Button
                buttonText={isLoading ? "Logging in..." : "Login"}
                type="submit"
                disabled={isLoading}
              />
              {error && (
                <p className="text-danger text-sm text-center">{error}</p>
              )}
              <div>
                <p className="text-color text-[14px] font-[500] text-center m-0">
                  By clicking on the &quot;Create an Account&quot; button, I consent to the
                  processing of my personal data in accordance with the{" "}
                  <strong className="highlight-color">Privacy Policy</strong>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
