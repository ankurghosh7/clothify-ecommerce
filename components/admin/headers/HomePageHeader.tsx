import React from "react";
import Notifaction from "./_components/Notifaction";
import Profile from "./_components/Profile";
import { currentUser } from "@clerk/nextjs/server";
import getTimeBasedGreeting from "@/utils/getTimeBasedGreeting";

const HomePageHeader = async () => {
  const user = await currentUser();
  const greeting = getTimeBasedGreeting();
  return (
    <header className="flex justify-between items-center  border-b">
      <div className="flex items-center justify-center h-16 ">
        <h1 className="text-2xl font-bold">
          {greeting}, {user?.firstName}
        </h1>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <Notifaction />
        <Profile user={user} />
      </div>
    </header>
  );
};

export default HomePageHeader;
