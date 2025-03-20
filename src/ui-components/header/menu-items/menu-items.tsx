import { menuItems } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { memo } from "react";

export const MenuItems = memo(() => {
  const pathname = usePathname();
  const route = useRouter();
  return (
    <div className="flex flex-row items-center pr-3 gap-6 border-r border-r-black">
      {menuItems.map((item, i) => {
        const focused = pathname === item;
        return (
          <button
            onClick={() => route.push(item)}
            className={`select-none duration-200 uppercase active:scale-90 transition-transform font-inter cursor-pointer px-3 py-1 border-[#fff] rounded-xl text-xs ${
              focused && "bg-black"
            } ${
              focused ? "text-white" : "text-black"
            } hover:bg-black hover:text-white transition-all`}
            key={i}
          >
            {item.slice(1) || "Home"}
          </button>
        );
      })}
    </div>
  );
});
