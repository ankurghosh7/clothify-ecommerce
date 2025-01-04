import { User } from "@clerk/nextjs/server";
import React from "react";

const ProfileInfo = ({ user }: { user: User }) => {
  return (
    <div>
      <img
        src={user.imageUrl}
        alt="Profile Picture"
        className="rounded-full h-20 w-20"
      />
      <h1 className="text-2xl font-semibold">Hello, {user.firstName}</h1>
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default ProfileInfo;
