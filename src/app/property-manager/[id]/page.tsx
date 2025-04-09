import getProperty from "@/cached/get-property";
import { PropertyManagerForms } from "@/ui-components";
import * as Router from "next/navigation";
export default async function ManagePropertyPage({
  params,
}: {
  params: Promise<{ id: number | "create" }>;
}) {
  const { id } = await params;
  if (id === "create") {
    return <PropertyManagerForms />; // create property
  }
  const property = await getProperty(id);
  if (!property) {
    return Router.redirect("/property-manager", Router.RedirectType.replace);
  }
  return <PropertyManagerForms property={property} />; // edit property
}
