import type { TRole } from ".";

export interface ISendOTP {
  email: string;
  name: string;
}

export interface IVerifyOTP {
  email: string;
  otp: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  role: TRole;
}
