"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/home')
  };
  return (
    <div
      className="flex h-screen w-full flex-col-reverse md:flex-row"
      style={{ backgroundColor: "#243831" }}
    >
      Hello
    </div>
  );
};

export default HomePage;
