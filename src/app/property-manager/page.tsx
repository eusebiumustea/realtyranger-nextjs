import getPropertiesList from "@/cached/get-properties-list";
import { BackButton, PropertyManagerList } from "@/ui-components";
export default async function PropertyManager() {
  const properties = await getPropertiesList();
  return (
    <div className="w-full h-dvh">
      <PropertyManagerList properties={properties} />;
    </div>
  );
}
