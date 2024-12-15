import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";

const Profile = async ({ user }: { user: User | null }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none outline-none ring-0 data-[state=open]:scale-90 data-[state=open]:opacity-90 transition-all duration-300 hover:scale-105 hover:ring-2 ring-green-500 rounded-full data-[state=open]:ring-2 data-[state=open]:ring-orange-500">
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-60 rounded-lg">
        <DropdownMenuLabel>
          <h3>{user?.firstName}</h3>
          <p>{user?.emailAddresses[0].emailAddress}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="">
          <Link href={"/admin/profile"} className="w-full h-full">
            Profile
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
