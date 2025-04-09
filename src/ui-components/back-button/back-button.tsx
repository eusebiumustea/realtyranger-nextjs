"use client";

import { buttonTheme } from "@/theme/button";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

export function BackButton({ className }: { className?: string }) {
  const route = useRouter();

  return (
    <button
      onClick={() => route.back()}
      className={buttonTheme({
        variant: "primary",
        className: "flex flex-row gap-x-2 items-center " + className || "",
      })}
    >
      <MdArrowBack size={16} />
      <h1 className="font-inter text-xs">back</h1>
    </button>
  );
}
