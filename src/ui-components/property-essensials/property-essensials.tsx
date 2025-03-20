import { BathroomIcon, BedroomIcon, PropertySizeIcon } from "../assets";
import { PropertyFeatureCard } from "../property-feature-card";
interface PropertyEssensialsProps {
  essentials: {
    bedrooms: number;
    size: number;
    bathrooms: number;
  };
  status: string;
}
export function PropertyEssensials({
  essentials,
  status,
}: PropertyEssensialsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <PropertyFeatureCard
        name="Bedrooms"
        icon={
          <div className="flex flex-row items-center gap-4">
            <BedroomIcon />
            <h1 className="font-normal text-[#0C4653] text-base font-serif">
              {essentials.bedrooms}
            </h1>
          </div>
        }
      />
      <PropertyFeatureCard
        name="Sq Meter"
        icon={
          <div className="flex flex-row items-center gap-4">
            <PropertySizeIcon />
            <h1 className="font-normal text-[#0C4653] text-base font-serif">
              {essentials.size}
            </h1>
          </div>
        }
      />
      <PropertyFeatureCard
        name="Bathrooms"
        icon={
          <div className="flex flex-row items-center gap-4">
            <BathroomIcon />
            <h1 className="font-normal text-[#0C4653] text-base font-serif">
              {essentials.bathrooms}
            </h1>
          </div>
        }
      />
      <PropertyFeatureCard
        name="Status"
        icon={
          <h1
            className={`font-inter text-base ${
              status === "Active" ? "text-[#FF970F]" : "text-red-500"
            } font-normal`}
          >
            {status}
          </h1>
        }
      />
    </div>
  );
}
