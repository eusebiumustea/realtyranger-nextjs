import { PropertyFeature } from "../property-feature";
import { PropertyReview } from "../property-review";

export interface Property {
  id: number;

  title: string;

  description: string;

  bathrooms: number;

  sqmeter: number;

  bedrooms: number;

  propertyType: "apartment" | "house";

  dealType: "rent" | "sell";

  reviewScore: number;

  images: string[];

  location: string;

  address: string;

  active: boolean;

  price: string;

  propertyFeatures: PropertyFeature[];

  propertyReviews: PropertyReview[];
}
