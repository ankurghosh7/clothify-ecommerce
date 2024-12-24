"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useSignUp } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { TUserSignUpFormProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignUpForm } from "@/zod/user";
import { OAuthStrategy } from "@clerk/types";
import { FcGoogle } from "react-icons/fc";

const SignupFrom = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TUserSignUpFormProps>({
    resolver: zodResolver(UserSignUpForm),
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url") ?? "/";

  const onSubmit: SubmitHandler<TUserSignUpFormProps> = async (d, e) => {
    e?.preventDefault();

    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signUp.create({
        phoneNumber: d.number,
        emailAddress: d.email,
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
    return signUp.authenticateWithRedirect({
      strategy,
      redirectUrl: "/auth/signup/sso-callback",
      redirectUrlComplete: "/",
    });
  };
  return (
    <div className="w-full sm:w-3/4 md:max-w-[30rem] mx-auto p-6 rounded-lg shadow-lg space-y-8">
      <div className="space-y-2">
        <h1 className="text-xl font-medium">Sign Up</h1>
        <p className="text-sm text-gray-500">
          Sign in to access your account and start your journey with us.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-4">
          <div className="w-full">
            <label
              htmlFor="full_name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="full_name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("first_name", { required: true })}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("last_name", { required: true })}
            />
          </div>
        </div>
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
            htmlFor="number"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("number", { required: true })}
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

        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>
      <p className="flex gap-5 items-center justify-center text-sm text-gray-500 relative before:relative before:w-10 before:h-[1px] before:bg-gray-500 after:relative after:content-[''] after:w-10 after:h-[1px] after:bg-gray-500">
        Or sign in with
      </p>
      <div>
        <div className="flex space-x-2 mt-2">
          <Button
            className="w-full"
            variant={"outline"}
            onClick={() => signInWith("oauth_google")}
          >
            <FcGoogle className="size-6" />
            <span>Sign in with Google</span>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupFrom;
