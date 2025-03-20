"use server";
import { redirect } from "next/navigation";
import { request } from "../request";
import { setAccessToken } from "./auth";

export const signIn = async (email: string, password: string) => {
  try {
    const response = await request<{ accessToken: string }>({
      method: "POST",
      url: "/auth/login",
      data: { email, password },
    });
    await setAccessToken(response.data.accessToken);
    redirect("/");
  } catch (error) {
    console.log(error);
  }
};
