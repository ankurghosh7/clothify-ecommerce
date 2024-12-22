"use client";
import { useUser, SignOutButton } from "@clerk/nextjs";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const AuthBtn = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <Skeleton className="h-12 w-12 rounded-full" />;
  }
  if (!isSignedIn || !user) {
    return (
      <Link
        href={"/auth/signin"}
        className={cn(
          "hidden lg:block",
          buttonVariants({
            variant: "outline",
          })
        )}
      >
        Sign In
      </Link>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar>
          <AvatarImage src={user.imageUrl} />
          <AvatarFallback>{user.fullName}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/profile"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SignOutButton>Sign Out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthBtn;
