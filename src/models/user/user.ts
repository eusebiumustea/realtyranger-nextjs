export enum Role {
  User = 1,
  Admin = 2,
}
export interface JwtPayload {
  sub: number;
  email: string;
  firstName: string;
  lastName: string;
  iat: number;
  roles: Role[];
}
