import { authValidation } from "@/helpers/auth";
import { About } from "@/ui-components";

export default async function AboutPage() {
  await authValidation();
  return <About />;
}
