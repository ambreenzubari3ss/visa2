// export const dynamic = "force-dynamic";

// import { redirect } from "next/navigation";

// export default function Home() {
//   // redirect("/main/dashboard");
//   redirect("/auth/login");

//   return null; // This line will never be reached, but satisfies TypeScript
// }

"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token");

    if (token && token !== "undefined" && token !== "null") {
      redirect("/main/dashboard");
    } else {
      redirect("/auth/login");
    }
  }, [router]);

  // Return null or a loading state while checking
  return null;
}
