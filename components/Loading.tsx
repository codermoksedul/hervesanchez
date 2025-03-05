"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const minTime = 2000; // Minimum loading time in ms

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minTime);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full fixed left-0 top-0 h-screen bg-white flex flex-col justify-center items-center">
      <Image
        src="/logo.jpg"
        alt="Loading"
        width={100}
        height={100}
        className="w-[100px] loadingLogo h-[100px]"
      />
    </div>
  );
}
