import { getUser } from "@/helpers/auth";
import { Logo } from "@/ui-components";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import React from "react";
import backgroundImage from "./../../../public/RealEstateLandscape.jpg";
export default async function AuthentificationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  if (user) {
    return redirect("/", RedirectType.replace);
  }
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <img
        src={backgroundImage.src}
        alt="Landscape of future green city"
        className="w-full h-dvh object-cover fixed -z-30 brightness-75"
      />
      <div className="w-[90%] flex flex-col p-4 sm:w-auto sm:max-w-[640px] bg-white max-h-[90%] shadow-2xl shadow-slate-300 rounded-xl">
        <Logo theme="dark" svg={{ className: "self-center my-6" }} />
        {children}
      </div>
    </div>
  );
}
