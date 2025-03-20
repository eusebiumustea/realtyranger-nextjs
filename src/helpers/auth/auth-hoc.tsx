import { redirect, RedirectType } from "next/navigation";
import { ComponentType } from "react";
import { getUser } from "./auth";

export const withAuth = async (children: ComponentType<any>) => {
  const user = await getUser();
  if (!user) {
    redirect("/authentification/login", RedirectType.replace);
  }
  return children;
};
