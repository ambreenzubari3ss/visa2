import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"; // Import the CSS Module
import Button from "@/components/ui/button/button";
import LoginLogo from "../../../Assets/Images/LoginLogo.png"; // Import the image
import InputField from "@/components/ui/input/input";
import './../../globals.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
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
          <InputField fieldName={'email'} />
          <InputField fieldName={'password'} />
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
