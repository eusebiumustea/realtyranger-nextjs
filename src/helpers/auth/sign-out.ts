"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const ACCESS_TOKEN_KEY = "access_token";
export const signOut = async () => {
  const cookiesManager = await cookies();
  cookiesManager.delete(ACCESS_TOKEN_KEY);
  redirect("/authentification/login");
};
