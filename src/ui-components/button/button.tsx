"use client";
import { PropsWithChildren, ReactNode } from "react";

interface SecoundaryButtonProps {
  onClick?: () => void;
  icon?: ReactNode;

  additionalStyle?: string;
}

export function SecoundaryButton({
  icon,

  onClick,
  additionalStyle,
  children,
}: PropsWithChildren<SecoundaryButtonProps>) {
  return (
    <button
      className={
        "flex flex-row font-inter text-white text-sm font-medium items-center justify-center py-3 px-7 bg-[#FF970F] gap-4 rounded-sm select-none hover:bg-[#ff970fd8] transition-all" +
        additionalStyle
      }
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}
