export enum Role {
  User = "user",
  Admin = "admin",
}
export interface JwtPayload {
  sub: number;
  email: string;
  firstName: string;
  lastName: string;
  iat: number;
  roles: Role[];
}
