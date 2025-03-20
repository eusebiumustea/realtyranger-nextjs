import { authentificationRequest } from "@/helpers/request";
import { PropertyCard } from "@/models";
import { cache } from "react";
const cachedFunction = async () => {
  try {
    const response = await authentificationRequest<PropertyCard[]>({
      url: "/property",
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default cache(cachedFunction);
