"use client";
import { signOut } from "@/helpers/auth";
import { memo } from "react";
import { SecoundaryButton } from "../button";
import { Modal } from "../modal";
import { JwtPayload } from "@/models";
import { buttonTheme } from "@/theme/button";
interface ProfileOptionsProps {
  onClose: () => void;
  user: JwtPayload;
}

export const ProfileOptions = memo(({ onClose, user }: ProfileOptionsProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex sm:flex-row flex-col w-full justify-center gap-4 items-center">
        <img
          src="https://t4.ftcdn.net/jpg/09/64/89/17/360_F_964891760_h0DymPvgJ0dZtcdWLts0qQIrk9fKWpjG.jpg"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h1 className="font-ptsans text-xl font-semibold">
            {user?.firstName} {user?.lastName}
          </h1>
          <h1 className="font-ptsans text-base">{user?.email}</h1>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center">
        <button
          className={`${buttonTheme({ variant: "primary" })}`}
          onClick={signOut}
        >
          Log out
        </button>
      </div>
    </Modal>
  );
});
