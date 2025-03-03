"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Formik, Form } from "formik";
import Button from "@/components/ui/button/button";
import InputField from "@/components/ui/input/input";
import styles from "./../styles.module.css";
import LoginLogo from "../../../Assets/Images/LoginLogo.png";
import { forgotPasswordSchema } from "@/utils/validationSchema";

const ForgotPassword = () => {
  const router = useRouter();

  const initialValues = {
    email: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Forgot Password Values:", values);
    // Handle forgot password logic here
    router.push("/auth/otp");
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
                <Button buttonText="Get Code" type="submit" />
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
};

export default ForgotPassword;
