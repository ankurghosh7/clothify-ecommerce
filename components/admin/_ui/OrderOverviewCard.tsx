import Link from "next/link";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface OrderOverviewCardProps {
  orers: {
    total: number;
    complete: number;
  };

  shipped: {
    total: number;
    complete: number;
  };

  pending: {
    total: number;
    complete: number;
  };

  cancelled: {
    total: number;
    complete: number;
  };
}

const OrderOverviewCard = () => {
  return (
    <div className="w-full h-fit bg-zinc-200/10 backdrop-blur-lg p-4 rounded-lg space-y-4 border border-zinc-400">
      <div className="flex justify-between items-center">
        <span>Order Overview</span>
        <Link
          href={"/admin/orders"}
          className={cn(
            buttonVariants({
              variant: "outline",
            })
          )}
        >
          View details
        </Link>
      </div>
      <div className="space-y-4">
        <OrderOverviewCardProgress
          complete={50}
          title="Delivered"
          total={180}
        />
        <OrderOverviewCardProgress complete={20} title="Shipped" total={80} />
        <OrderOverviewCardProgress complete={40} title="Pending" total={60} />

        <OrderOverviewCardProgress complete={5} title="Cancelled" total={10} />
      </div>
    </div>
  );
};

export default OrderOverviewCard;

function OrderOverviewCardProgress({
  total,
  complete,
  title,
}: {
  total: number;
  complete: number;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm md:text-base font-medium">
        <span>{title}</span>
        <span>{total}</span>
      </div>

      <div className="flex justify-between gap-2 items-center">
        <Progress
          value={complete}
          className="bg-zinc-400/40"
          indicatorClassName="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
        <span className="text-xs text-gray-300">25%</span>
      </div>
    </div>
  );
}
