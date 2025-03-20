import { authentificationRequest } from "@/helpers/request";
import { Property } from "@/models";
import { cache } from "react";
const cachedFunction = async (id: number) => {
  try {
    const response = await authentificationRequest<Property>({
      url: `/property/${id}`,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export default cache(cachedFunction);
