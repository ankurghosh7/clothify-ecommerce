"use client";

import React, { useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [reenterNewPassword, setReenterNewPassword] = useState<string>();
  const [code, setCode] = useState<string>("");
  const [successfulCreation, setSuccessfulCreation] = useState<boolean>(false);
  const [successfulVerifyCode, setSuccessfulVerifyCode] =
    useState<boolean>(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  // If the user is already signed in,
  // redirect them to the home page
  if (isSignedIn) {
    router.push("/");
  }

  // Send the password reset code to the user's email
  async function create(e: React.FormEvent) {
    e.preventDefault();
    if (!signIn) {
      setError("An error occurred");
      return;
    }
    try {
      const resetPassword = await signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });

      if (!resetPassword) {
        setError("An error occurred");
        return;
      }
      setSuccessfulCreation(true);
      setError("");
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage);
      setError(err.errors[0].shortMessage);
    }
  }

  // Reset the user's password.
  // Upon successful reset, the user will be
  // signed in and redirected to the home page
  async function verifyEmailCode() {
    if (!signIn) {
      setError("An error occurred");
      return;
    }

    try {
      const signInVerifyCode = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        // password,
      });
      if (!signInVerifyCode) {
        setError("An error occurred");
        return;
      }
      // Check if 2FA is required
      setSuccessfulVerifyCode(true);
      setError("");
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage);
      setError(err.errors[0].shortMessage);
    }
  }

  async function changePassword(e: React.FormEvent) {
    e.preventDefault();
    if (!setActive) {
      setError("An error occurred");
      return;
    }
    try {
      const changePassword = await signIn?.resetPassword({
        password: newPassword,
        signOutOfOtherSessions: true,
      });
      if (!changePassword) {
        setError("An error occurred");
        return;
      }
      if (changePassword.status === "complete") {
        setActive({ session: changePassword.createdSessionId });
        setError("");
        router.push("/");
      } else {
        console.log(changePassword);
      }
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage);
      setError(err.errors[0].shortMessage);
    }
  }
  return (
    <div className="shadow-lg w-full sm:max-w-[24rem] p-8 rounded-xl mx-auto  space-y-6 ">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">
          {!successfulCreation
            ? "Forgot Password?"
            : successfulVerifyCode
              ? "Enter Verifaction Code"
              : "Enter New Password"}
        </h1>
        <p className="text-sm text-gray-600">
          {!successfulCreation
            ? "  Enter your email address below and we'll send you a password reset code"
            : successfulVerifyCode
              ? `Enter the code that send this email ${email}`
              : "Enter your new password below"}
        </p>
      </div>
      <div>
        {!successfulCreation && (
          <>
            <form className="space-y-6" onSubmit={create}>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="e.g john@doe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  //   {...register("email", { required: true })}
                />
              </div>

              <Button type="submit" className="mx-auto">
                Send password reset code
              </Button>
              {error && <p>{error}</p>}
            </form>
          </>
        )}

        {successfulCreation && !successfulVerifyCode && (
          <div>
            <InputOTP
              maxLength={6}
              containerClassName="justify-center"
              onComplete={verifyEmailCode}
              value={code}
              onChange={(e) => setCode(e)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="sm:w-14 sm:h-14 text-2xl " />
                <InputOTPSlot index={1} className="sm:w-14 sm:h-14 text-2xl" />
                <InputOTPSlot index={2} className="sm:w-14 sm:h-14 text-2xl" />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={3} className="sm:w-14 sm:h-14 text-2xl" />
                <InputOTPSlot index={4} className="sm:w-14 sm:h-14 text-2xl" />
                <InputOTPSlot index={5} className="sm:w-14 sm:h-14 text-2xl" />
              </InputOTPGroup>
            </InputOTP>
          </div>
        )}

        {successfulCreation && successfulVerifyCode && (
          <form onSubmit={changePassword} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="new_password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  id="new_password"
                  type="password"
                  placeholder="e.g ********"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="re_new_password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Reenter New Password
                </label>
                <input
                  id="re_new_password"
                  type="password"
                  placeholder="e.g ********"
                  value={reenterNewPassword}
                  onChange={(e) => {
                    setReenterNewPassword(e.target.value);
                    if (e.target.value !== newPassword) {
                      setError("Passwords do not match");
                    } else {
                      setError("");
                    }
                  }}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <p className="text-sm text-red-500">{error}</p>
              </div>
            </div>
            <Button className="mx-auto" type="submit">
              Change Password
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
