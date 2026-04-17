import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { IUser } from "../models/user.model";

const ACCESS_SECRET: Secret =
  process.env.JWT_ACCESS_SECRET || "access_secret_key";

const REFRESH_SECRET: Secret =
  process.env.JWT_REFRESH_SECRET || "refresh_secret_key";

const ACCESS_EXPIRES: SignOptions["expiresIn"] =
  (process.env.JWT_ACCESS_EXPIRES_IN as SignOptions["expiresIn"]) || "15m";

const REFRESH_EXPIRES: SignOptions["expiresIn"] =
  (process.env.JWT_REFRESH_EXPIRES_IN as SignOptions["expiresIn"]) || "7d";

export interface TokenPayload {
  userId: string;
  email: string;
}

export const generateAccessToken = (user: IUser): string => {
  return jwt.sign(
    { userId: user._id.toString(), email: user.email },
    ACCESS_SECRET,
    { expiresIn: ACCESS_EXPIRES }
  );
};

export const generateRefreshToken = (user: IUser): string => {
  return jwt.sign(
    { userId: user._id.toString(), email: user.email },
    REFRESH_SECRET,
    { expiresIn: REFRESH_EXPIRES }
  );
};

export const verifyAccessToken = (token: string): TokenPayload => {
  return jwt.verify(token, ACCESS_SECRET) as TokenPayload;
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  return jwt.verify(token, REFRESH_SECRET) as TokenPayload;
};

export const generateTokens = (user: IUser) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return { accessToken, refreshToken };
};