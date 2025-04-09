"use client";
import { signOut } from "@/helpers/auth";
import { JwtPayload, Role } from "@/models";
import { buttonTheme } from "@/theme/button";
import { useRouter } from "next/navigation";
import { memo } from "react";
import { Modal } from "../modal";
interface ProfileOptionsProps {
  onClose: () => void;
  user: JwtPayload;
}

export const ProfileOptions = memo(({ onClose, user }: ProfileOptionsProps) => {
  const route = useRouter();
  return (
    <Modal onClose={onClose}>
      <div className="flex sm:flex-row flex-col w-full justify-center gap-4 items-center">
        <img
          src="https://t4.ftcdn.net/jpg/09/64/89/17/360_F_964891760_h0DymPvgJ0dZtcdWLts0qQIrk9fKWpjG.jpg"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h1 className="font-ptsans text-xl font-semibold">
            {user.firstName} {user.lastName}
          </h1>
          <h1 className="font-ptsans text-base">{user.email}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-4 w-full justify-center">
        {user.roles.includes(Role.Admin) && (
          <button
            onClick={() => {
              route.push("/property-manager");
              onClose();
            }}
            className={`${buttonTheme({ variant: "primary" })}`}
          >
            Manage all properties
          </button>
        )}
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
