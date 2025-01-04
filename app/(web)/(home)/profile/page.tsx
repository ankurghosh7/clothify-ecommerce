import ProfileInfo from "@/components/user/profile-info";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const UserProfilePage = async () => {
  const user = await currentUser();
  if (!user) {
    return <div>Not logged in</div>;
  }
  return (
    <div className="px-4 xl:px-20 flex">
      <aside className=" border-r xl:w-80 ">
        {/* <ProfileInfo user={user} /> */}
        <div></div>
      </aside>
      <div className="flex-1"></div>
    </div>
  );
};

export default UserProfilePage;
