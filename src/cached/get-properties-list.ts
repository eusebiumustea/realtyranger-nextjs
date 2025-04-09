"use server";
import { authentificationRequest } from "@/helpers/request";
import { PropertyCard } from "@/models";
export default async () => {
  try {
    const response = await authentificationRequest<PropertyCard[]>({
      url: "/property",
      method: "GET",
      fetchOptions: { next: { tags: ["properties"] }, cache: "force-cache" },
    });
    return response?.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
