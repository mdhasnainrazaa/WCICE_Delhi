"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/blog/mbbs-in-kyrgyzstan-fees-structure-2026/");
  }, [router]);

  return (
    <div className="bg-white flex items-center justify-center min-h-screen text-gray-500 font-sans">
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">Redirecting you to the updated page...</p>
        <p className="text-sm">
          If you are not redirected automatically,{" "}
          <a href="/blog/mbbs-in-kyrgyzstan-fees-structure-2026/" className="text-medical underline font-bold">
            click here
          </a>.
        </p>
      </div>
    </div>
  );
}
