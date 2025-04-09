import { authValidation } from "@/helpers/auth";
import { Role } from "@/models";
import { BackButton } from "@/ui-components";
import { ReactNode } from "react";

export default async function PropertyManagerLayout({
  children,
}: {
  children: ReactNode;
}) {
  await authValidation([Role.Admin]);
  return (
    <div className="flex g flex-col items-start gap-y-4 py-14 px-2">
      <BackButton />
      {children}
    </div>
  );
}
