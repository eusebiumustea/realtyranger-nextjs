import { SignUpRequest } from "@/models";
import { redirect, RedirectType } from "next/navigation";
import { request } from "../request";
import { setAccessToken } from "./auth";

export const signUp = async (createUser: SignUpRequest) => {
  try {
    const res = await request<{ accessToken: string }, SignUpRequest>({
      url: "/auth/register",
      method: "POST",
      data: createUser,
    });
    if (res.status === 401) {
      return;
    }
    await setAccessToken(res.data.accessToken);
    redirect("/", RedirectType.replace);
  } catch (error) {
    console.log(error);
  }
};
