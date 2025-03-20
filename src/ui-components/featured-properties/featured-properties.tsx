import getPropertiesList from "@/cached/get-properties-list";
import { buttonTheme } from "@/theme/button";
import { PropertiesList } from "../properties-list";
import Link from "next/link";
export async function FeaturedProperties() {
  const properties = await getPropertiesList();

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[#0C4653] font-inter text-4xl font-normal uppercase text-center py-11">
        featured properties
      </h1>

      <PropertiesList data={properties} />
      <Link
        className={`${buttonTheme({ variant: "primary" })} my-12`}
        href={"/properties"}
      >
        More Properties
      </Link>
      <div className=" w-[80%] mt-4 self-center h-[1px] bg-[#555555]" />
    </div>
  );
}
