import { authValidation } from "@/helpers/auth";

export default async function News() {
  await authValidation();
  return <div>news</div>;
}
