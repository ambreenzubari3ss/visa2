import Link from "next/link";
import styles from "./styles.module.css"; // Import the CSS Module

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        <form action="/api/auth/login" method="POST" className={styles.inputGroup}>
          <div>
            <label className={styles.label}>Email</label>
            <input type="email" name="email" required className={styles.input} />
          </div>
          <div>
            <label className={styles.label}>Password</label>
            <input type="password" name="password" required className={styles.input} />
          </div>
          <button type="submit" className={styles.button}>Sign In</button>
        </form>
        <p className={styles.textCenter}>
          Dont have an account?{" "}
          <Link href="/auth/signup" className={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
