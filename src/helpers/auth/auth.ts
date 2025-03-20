"use server";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { authentificationRequest } from "../request";
import { JwtPayload } from "@/models";
const ACCESS_TOKEN_KEY = "access_token";
export const getUser = async () => {
  try {
    const res = await authentificationRequest<JwtPayload>({
      method: "GET",
      url: "/auth/profile",
    });
    return res.data;
  } catch (error) {
    return null;
  }
};
export const setAccessToken = async (accessToken: string) => {
  const cookiesManager = await cookies();
  cookiesManager.set(ACCESS_TOKEN_KEY, accessToken);
};
export const getAccessToken = async () => {
  const cookiesManager = await cookies();
  return cookiesManager.get(ACCESS_TOKEN_KEY)?.value;
};
export const authValidation = async () => {
  const user = await getUser();
  if (!user) {
    redirect("/authentification/login", RedirectType.replace);
  }
};
