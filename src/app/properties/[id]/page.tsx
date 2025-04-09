import getPropertiesList from "@/cached/get-properties-list";
import getProperty from "@/cached/get-property";
import { authValidation } from "@/helpers/auth";
import { buttonTheme } from "@/theme/button";
import {
  BackButton,
  DescriptionTypography,
  Gallery,
  Line,
  ProfileInfo,
  PropertiesList,
  PropertyEssensials,
  Title,
} from "@/ui-components";
import * as Router from "next/navigation";
export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  await authValidation();
  const { id } = await params;
  const property = await getProperty(id);
  if (!property) {
    Router.redirect("/", Router.RedirectType.replace);
  }
  const properties = await getPropertiesList();
  const filteredProperties = properties.filter((e) => e.id !== id);

  return (
    <div className="pt-12">
      <BackButton className="m-2" />
      <Gallery images={property?.images} />
      <div className="w-full py-4 gap-4 2xl:px-24 flex flex-col justify-center items-start">
        <h1 className="bg-[#EEEEEE] mx-2 py-3 px-6 font-sans text-[#0C4653] uppercase self-start">
          for {property.dealType}
        </h1>
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <h1 className="font-inter uppercase text-[#0C4653] text-3xl md:text-5xl font-semibold p-2">
            {property.title}
          </h1>
          <h1 className="font-inter uppercase text-[#0C4653] text-2xl md:text-4xl font-semibold p-2">
            price: {property.price}
          </h1>
        </div>
        <div className="w-full flex items-center flex-col md:flex-row justify-between md:items-start">
          <PropertyEssensials
            status={property.active ? "Active" : "Unactive"}
            essentials={{
              bathrooms: property.bathrooms,
              bedrooms: property.bedrooms,
              size: property.sqmeter,
            }}
          />
          <div className="flex flex-col gap-2 items-end p-4 xl:border border-[#555555] max-w-[600px]">
            <ProfileInfo />
            <button className={buttonTheme({ variant: "primary" })}>
              Contact me
            </button>
          </div>
        </div>
        <div className="">
          {property.propertyFeatures.map((feature, i) => (
            <DescriptionTypography
              key={i}
              description={feature.description}
              title={feature.title}
            />
          ))}
        </div>
      </div>
      <Line className="mb-8" />
      <Title className="text-center mb-3">similar properties</Title>
      <div className="w-full flex justify-center">
        <PropertiesList data={filteredProperties} />
      </div>
    </div>
  );
}
