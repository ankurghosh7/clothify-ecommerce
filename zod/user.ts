import { TUserSignInFormProps } from "@/types";
import { z, ZodType } from "zod";
export const UserSigninForm: ZodType<TUserSignInFormProps> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password is too short" })
    .max(48, { message: "Password is too long" }),
});
