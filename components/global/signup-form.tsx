"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useSignIn } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { TUserSignInFormProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSigninForm } from "@/zod/user";
import { OAuthStrategy } from "@clerk/types";

const SignupFrom = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TUserSignInFormProps>({
    resolver: zodResolver(UserSigninForm),
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url") ?? "/";

  const onSubmit: SubmitHandler<TUserSignInFormProps> = async (d, e) => {
    e?.preventDefault();

    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: d.email,
        password: d.password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push(redirectUrl);
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const signInWith = (strategy: OAuthStrategy) => {
    if (!isLoaded) return;
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/auth/signup/sso-callback",
      redirectUrlComplete: "/",
    });
  };
  return (
    <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-lg space-y-8">
      <div className="space-y-2">
        <h1 className="text-xl font-medium">Sign in using email</h1>
        <p className="text-sm text-gray-500">
          Sign in using your email address to continue shopping and view your
          orders.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("password", { required: true })}
          />
        </div>
        <div className="flex justify-end items-center">
          <Link href="/auth/forgot-password" className="text-sm">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
      <div>
        <p className="text-sm text-gray-500 relative before:absolute before:w-5 before:h-1 before:bg-gray-500">
          Or sign in with
        </p>
        <div>
          <div className="flex space-x-2 mt-2">
            <Button
              className="w-full"
              variant={"outline"}
              onClick={() => signInWith("oauth_google")}
            >
              Google
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupFrom;
