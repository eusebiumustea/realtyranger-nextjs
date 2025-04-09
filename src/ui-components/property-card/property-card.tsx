"use client";
import { PropertyCard } from "@/models";
import Image from "next/image";
import Link from "next/link";
import {
  BathroomIcon,
  BedroomIcon,
  LocationIcon,
  PropertySizeIcon,
  SquartMetersIcon,
} from "../assets";
export interface PropertyCardComponentProps extends PropertyCard {
  onClick?: () => void;
}

export function PropertyCardComponent({
  location,
  id,
  image,
  title,
  description,
  price,
  sqmeter,
  bathrooms,
  bedrooms,
  onClick,
}: PropertyCardComponentProps) {
  return (
    <Link
      className="max-w-[450px] flex flex-col gap-2 cursor-pointer select-none hover:shadow-lg hover:rounded-lg p-4 transition-all"
      onClick={onClick}
      href={`/properties/${id}`}
    >
      <img
        src={image}
        alt=""
        className="w-full max-h-[280px] rounded object-cover"
      />
      <div className="flex flex-row items-center gap-1">
        <LocationIcon />
        <h1 className="font-inter text-sm font-normal">{location}</h1>
      </div>
      <h1 className="font-inter text-2xl font-normal">{title}</h1>
      <h1 className="font-inter text-sm text-[#555555] font-normal pr-5">
        {description}
      </h1>
      <div className="w-full flex flex-row justify-between items-center pt-3 border-t border-[#E8E8E8]">
        <h1 className="text-[#0C4653] text-xl font-medium">{price}</h1>
        <div className="flex flex-row items-center gap-1 2sm:gap-3">
          <div className="flex flex-row items-center scale-[85%] 2sm:gap-1 2sm:scale-100">
            <PropertySizeIcon />
            <h1 className="flex flex-row items-center text-sm font-medium">
              {sqmeter}
              <SquartMetersIcon />
            </h1>
          </div>
          <div className="flex flex-row items-center scale-[85%] 2sm:gap-1 2sm:scale-100">
            <BedroomIcon />
            <h1 className="flex flex-row items-center text-sm font-medium">
              {bedrooms}
            </h1>
          </div>
          <div className="flex flex-row items-center scale-[85%] 2sm:gap-1 2sm:scale-100">
            <BathroomIcon />
            <h1 className="flex flex-row items-center text-sm font-medium">
              {bathrooms}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
