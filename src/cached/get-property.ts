"use server";
import { authentificationRequest } from "@/helpers/request";
import { Property } from "@/models";
export default async (id: number) => {
  try {
    const response = await authentificationRequest<Property>({
      url: `/property/${id}`,
      fetchOptions: {
        next: { tags: [`property-${id}`] },
        cache: "force-cache",
      },
    });
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};
