"use client";

import { useState } from "react";

import { JwtPayload } from "@/models";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Logo, MenuIcon } from "../assets";
import { ProfileOptions } from "../profile-options";
import { MobileNav } from "./mobile-nav";
import { NavBar } from "./nav-bar";

export function Header({ user }: { user: JwtPayload }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);
  const route = useRouter();
  return (
    <>
      <AnimatePresence>
        {mobileMenu && (
          <MobileNav
            username={user.firstName}
            onOptionsOpen={() => setOptionsModal(true)}
            onClose={() => setMobileMenu(false)}
          />
        )}
      </AnimatePresence>
      <div className="flex bg-white flex-row border-b h-12 items-center justify-between w-full fixed z-10 top-0 left-0 p-2">
        <Logo
          theme="dark"
          svg={{
            className: "cursor-pointer",
            onClick: () => route.replace("/"),
          }}
        />
        <NavBar
          username={user.firstName}
          onOptionsOpen={() => setOptionsModal(true)}
        />
        <MenuIcon
          onClick={() => setMobileMenu(true)}
          fill="#000"
          className="md:hidden"
        />
      </div>
      {optionsModal && (
        <ProfileOptions user={user} onClose={() => setOptionsModal(false)} />
      )}
    </>
  );
}
