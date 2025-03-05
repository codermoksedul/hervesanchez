import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full max-w-[440px] bg-white min-h-[90vh] overflow-hidden sm:rounded-xl">
      {children}
    </main>
  );
}
