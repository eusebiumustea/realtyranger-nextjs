"use server";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { authentificationRequest } from "../request";
import { JwtPayload, Role } from "@/models";
import { cache } from "react";
const ACCESS_TOKEN_KEY = "access_token";
export const getUser = cache(async () => {
  try {
    const res = await authentificationRequest<JwtPayload>({
      method: "GET",
      url: "/auth/profile",
    });
    return res?.data;
  } catch (error) {
    return null;
  }
});
export const setAccessToken = async (accessToken: string) => {
  const cookiesManager = await cookies();
  cookiesManager.set(ACCESS_TOKEN_KEY, accessToken);
};
export const getAccessToken = async () => {
  const cookiesManager = await cookies();
  return cookiesManager.get(ACCESS_TOKEN_KEY)?.value;
};
export const authValidation = async (roles?: Role[]) => {
  const user = await getUser();

  if (!user) {
    redirect("/authentification/login", RedirectType.replace);
  }
  if (
    roles &&
    roles.length > 0 &&
    roles.some((role) => !user.roles.includes(role))
  ) {
    redirect("/", RedirectType.replace);
  }
};
