"use client";

import { buttonTheme } from "@/theme/button";
import { useRouter } from "next/navigation";

export function BackButton({ additionalStyle }: { additionalStyle?: string }) {
  const route = useRouter();

  return (
    <button
      onClick={() => route.back()}
      className={`${buttonTheme({ variant: "primary" })} ${additionalStyle}`}
    >
      back
    </button>
  );
}
