"use client";
import { usePreventScroll } from "@/hooks";
import { buttonTheme } from "@/theme/button";
import { memo, PropsWithChildren } from "react";

interface ModalProps {
  onClose?: () => void;
}
export const Modal = memo(
  ({ children, onClose }: PropsWithChildren<ModalProps>) => {
    usePreventScroll();

    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex-initial flex justify-center items-center z-[80] w-full h-svh backdrop-brightness-50">
        <div className="w-full h-svh absolute z-[70]" onClick={onClose} />
        <div className="bg-slate-100 z-[90] p-3 pb-14 2sm:w-auto min-w-[90%] sm:min-w-[600px] min-h-[66%] rounded-2xl relative shadow-md">
          {children}
          <button
            className={`${buttonTheme({
              variant: "primary",
            })} absolute bottom-2 right-2`}
            onClick={onClose}
          >
            Cencel
          </button>
        </div>
      </div>
    );
  }
);
