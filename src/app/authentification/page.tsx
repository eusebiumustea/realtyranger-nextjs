import { redirect, RedirectType } from "next/navigation";

export default async function AuthentificationPage() {
  return redirect("/authentification/login", RedirectType.replace);
}
