"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SignIn = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/member/home");
  };

  return (
    <div
      className="flex h-screen w-full flex-col-reverse md:flex-row"
      style={{ backgroundColor: "#243831" }}
    >
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-white text-xl mb-4">Sign in</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-md border border-gray-300 mb-4"
          />
          <button
            onClick={navigateToHome}
            className="w-full p-3 text-white rounded-md"
            style={{ backgroundColor: "#49A569" }}
          >
            Sign In
          </button>
        </div>
      </div>

      <div
        className="flex items-center justify-center  p-6 md:flex-1 md:rounded-l-lg"
        style={{ backgroundColor: "#2B5F44" }}
      >
        <div className="flex flex-col items-center">
          <Image
          height={200}
          width={200}
            src="/images/board.png"
            alt="Board illustration"
            className="mx-auto mb-4"
          />
          <Image
            height={40}
            width={100}
            alt="Your Company"
            src="/images/logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
