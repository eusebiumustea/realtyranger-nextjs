"use server";

import { Property } from "@/models";
import { revalidateTag } from "next/cache";
import { authentificationRequest } from "../request";

export const manageProperty = async (property: Partial<Property>) => {
  try {
    const { id, ...propertyToUpdate } = property;
    await authentificationRequest({
      url: property.id ? `/property/${property.id}` : "/property",
      method: property.id ? "PATCH" : "POST",

      data: propertyToUpdate,
    });
    if (property.id) {
      revalidateTag(`property-${property.id}`);
    }

    revalidateTag("properties");
  } catch (error) {
    console.log("errro", JSON.stringify(error));
  }
};
