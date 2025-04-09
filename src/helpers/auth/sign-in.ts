"use server";
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
  } catch (error) {
    console.log(error);
  }
};
