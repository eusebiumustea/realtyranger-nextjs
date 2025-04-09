"use client";
import { PropertyCard } from "@/models";
import { buttonTheme } from "@/theme/button";
import { useRouter } from "next/navigation";
import { FiEdit, FiExternalLink } from "react-icons/fi";
import { LocationIcon } from "../assets";
export function EditPropertyCard(property: PropertyCard) {
  const {
    id,
    image,
    location,
    sqmeter,
    description,
    title,
    price,
    bathrooms,
    bedrooms,
  } = property;
  const router = useRouter();
  return (
    <div className="max-w-[800px] flex flex-col sm:flex-row gap-4 bg-slate-50 p-3 drop-shadow-lg rounded-2xl">
      <div className="flex flex-col sm:flex-row gap-4 select-none transition-all">
        <img
          src={image}
          alt=""
          className="w-full max-w-[450px] sm:max-h-[220px] sm:max-w-[250px] rounded object-cover"
        />
        <div>
          <div className="flex flex-row items-center gap-1">
            <LocationIcon />
            <h1 className="font-inter text-sm font-normal">{location}</h1>
          </div>
          <h1 className="font-inter text-2xl font-normal">{title}</h1>
          <h1 className="font-inter text-sm text-[#555555] font-normal pr-5">
            {description}
          </h1>
          <div className="w-full flex flex-row justify-between items-center pt-3">
            <h1 className="text-[#0C4653] text-xl font-medium">{price}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-col gap-y-4 items-start">
        <button
          onClick={() => router.push(`/properties/${property.id}`)}
          className={buttonTheme({
            variant: "icon-text",
            className: "shadow-none",
          })}
        >
          <FiExternalLink size={16} />
          <h1 className="font-inter text-[16px]">Open</h1>
        </button>
        <button
          onClick={() => router.push(`/property-manager/${property.id}`)}
          className={buttonTheme({
            variant: "icon-text",
            className: "shadow-none",
          })}
        >
          <FiEdit size={16} />
          <h1 className="font-inter text-[16px]">Edit</h1>
        </button>
      </div>
    </div>
  );
}
