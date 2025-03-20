import { tv } from "tailwind-variants";

export const buttonTheme = tv({
  base: "px-6 py-3 border uppercase font-inter text-xs transition-all duration-100 active:scale-90 rounded-lg select-none shadow-lg",
  variants: {
    variant: {
      primary:
        "border-[#0C4653] text-[#0C4653] sm:hover:text-white active:text-white sm:hover:bg-[#0C4653] active:bg-[#0C4653]",
    },
  },
});
