"use client";
import { motion } from "framer-motion";

import { usePreventScroll } from "@/hooks";
import { UserAvatar } from "@/ui-components/user-avatar";
import { usePathname, useRouter } from "next/navigation";
import { menuItems } from "../../../constants";
import { CloseIcon } from "../../assets";

interface MobileNavProps {
  onClose: () => void;
  onOptionsOpen: () => void;
  username?: string;
  avatar?: string;
}
export function MobileNav({
  onClose,
  onOptionsOpen,
  username,
  avatar,
}: MobileNavProps) {
  usePreventScroll();
  const pathname = usePathname();
  const route = useRouter();
  return (
    <>
      <motion.div
        onClick={onClose}
        transition={{ duration: 0.2 }}
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        exit={{ backgroundColor: "rgba(0,0,0,0)" }}
        className="w-full top-0 left-0 !h-screen fixed z-30 md:hidden"
      />
      <motion.div
        initial={{ transform: "translateX(100%)", opacity: 0 }}
        animate={{ transform: "translateX(0%)", opacity: 1 }}
        exit={{ transform: "translateX(100%)", opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="p-4 h-screen min-w-56 flex overflow-hidden justify-center bg-white fixed top-0 right-0 z-40 md:hidden"
      >
        <CloseIcon onClick={onClose} className="absolute top-0 right-0 m-3" />
        <div className="flex flex-col mt-12 gap-6 items-center">
          {menuItems.map((item, i) => {
            const focused = pathname === item;
            return (
              <motion.button
                key={i}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  route.push(item);
                  onClose();
                }}
                initial={{ opacity: 0, transform: "translateX(150px)" }}
                animate={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{
                  delay: (i + 1) * 0.1,
                  duration: 0.1 * menuItems.length,
                }}
                className={`text-2xl uppercase ${
                  focused ? "text-slate-50" : "text-gray-800"
                } font-ptsans p-4 rounded-lg hover:rounded-lg ${
                  focused && "bg-slate-950"
                } active:bg-slate-950 hover:bg-slate-950 hover:text-slate-50 select-none`}
              >
                {item.slice(1) || "Home"}
              </motion.button>
            );
          })}
        </div>
        <div className="absolute bottom-0 left-0 border-t w-full">
          <UserAvatar
            className="m-4"
            onClick={onOptionsOpen}
            username={username ?? ""}
            image={avatar}
          />
        </div>
      </motion.div>
    </>
  );
}
