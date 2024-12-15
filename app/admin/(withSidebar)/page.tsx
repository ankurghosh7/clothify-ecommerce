import SmallNumberCard from "@/components/admin/_ui/smallNumberCard";
import HomePageHeader from "@/components/admin/headers/HomePageHeader";
import React from "react";
import { HandCoins } from "lucide-react";
import OrderOverviewCard from "@/components/admin/_ui/OrderOverviewCard";

const AdminDashboardPage = () => {
  return (
    <div className="">
      <HomePageHeader />
      <div className="grid grid-cols-3 gap-4 items-start justify-between mt-10">
        <div className="col-span-2 flex items-center justify-between">
          <SmallNumberCard
            content="$1,430"
            icon={HandCoins}
            title="Total Sales"
            currentValue={1430}
            previousValue={1000}
          />
          <SmallNumberCard
            content="430"
            icon={HandCoins}
            title="Total Orders"
            currentValue={430}
            previousValue={270}
            circleGradientColor="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            iconBgColor="bg-blue-400/20"
            iconColor="text-blue-500"
          />
          <SmallNumberCard
            content="430"
            icon={HandCoins}
            title="Total Orders"
            currentValue={430}
            previousValue={270}
            circleGradientColor="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            iconBgColor="bg-blue-400/20"
            iconColor="text-blue-500"
          />
        </div>
        <OrderOverviewCard />
      </div>
    </div>
  );
};

export default AdminDashboardPage;

export const dynamic = "force-dynamic";
