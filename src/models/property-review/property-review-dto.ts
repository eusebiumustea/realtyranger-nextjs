export interface CreatePropertyReviewDto {
  propertyId: number;

  username: string;

  avatar: string;

  description: string;

  totalAgrees: number;

  totalDisagrees: number;
}
