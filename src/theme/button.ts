import { tv } from "tailwind-variants";

export const buttonTheme = tv({
  base: "px-6 py-3 border font-inter text-xs transition-all rounded-full select-none shadow-lg",
  variants: {
    variant: {
      primary:
        "border-[#0C4653] uppercase text-[#0C4653] sm:hover:text-white active:text-white duration-100 active:scale-90 sm:hover:bg-[#0C4653] active:bg-[#0C4653]",
      icon: "p-3 hover:backdrop-brightness-95",
      "icon-text":
        "p-3 hover:backdrop-brightness-95 flex flex-row gap-x-1 items-center",
    },
  },
});
