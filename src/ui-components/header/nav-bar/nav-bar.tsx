"use client";
import { UserAvatar } from "@/ui-components/user-avatar";

import { memo } from "react";
import { MenuItems } from "../menu-items";
export const NavBar = memo(
  ({
    onOptionsOpen,
    username,
    avatar,
  }: {
    onOptionsOpen: () => void;
    username?: string;
    avatar?: string;
  }) => {
    return (
      <div className="hidden flex-row gap-6 items-center md:flex">
        <MenuItems />
        <UserAvatar
          onClick={onOptionsOpen}
          image={avatar}
          username={username ?? ""}
        />
      </div>
    );
  }
);
