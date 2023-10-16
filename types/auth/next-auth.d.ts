import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    googleAccessToken: string;
    googleRefreshToken: string;
    googleAccessTokenExpiresAt: number;
  }
}
