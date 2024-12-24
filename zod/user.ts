import { TUserSignInFormProps, TUserSignUpFormProps } from "@/types";
import { z, ZodType } from "zod";
export const UserSigninForm: ZodType<TUserSignInFormProps> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(48, { message: "Password is too long" }),
});

export const UserSignUpForm: ZodType<TUserSignUpFormProps> = z.object({
  email: z.string({ message: "Email is required" }).email(),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password is too short" })
    .max(48, { message: "Password is too long" }),

  first_name: z
    .string({ message: "FIrst name is required" })
    .min(3, { message: "First name is too short" }),
  last_name: z
    .string({ message: "Last name is required" })
    .min(2, { message: "Last name is is too short" }),
  number: z
    .string({ message: "Number is required" })
    .min(10, { message: "Phone number is too short" })
    .max(12, { message: "Phone number is too long" }),
});
