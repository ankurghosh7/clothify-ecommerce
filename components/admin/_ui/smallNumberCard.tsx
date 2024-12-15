import React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import calculatePercentageChange from "@/utils/calculatePercentageChange";

interface SmallNumberCardProps {
  icon: React.ElementType;
  content: string;
  title: string;
  previousValue: number;
  currentValue: number;
  iconColor?: string;
  iconBgColor?: string;
  showCircleGradient?: boolean;
  circleGradientColor?: string;
}

const SmallNumberCard = ({
  icon: Icon,
  content,
  title,
  currentValue,
  previousValue,
  circleGradientColor = "bg-amber-400",
  iconBgColor = "bg-green-400/20",
  iconColor = "text-green-500",
  showCircleGradient = true,
}: SmallNumberCardProps) => {
  const val = calculatePercentageChange(previousValue, currentValue);
  if (!val) return null;
  return (
    <div className="p-4 rounded-2xl bg-zinc-400/10 backdrop-blur-md w-fit min-w-60 border border-gray-400 relative overflow-hidden">
      <div className="relative z-10 w-full space-y-4">
        <div className="flex gap-2 items-center">
          <span className={cn("p-2 rounded-xl", iconBgColor)}>
            <Icon className={cn("size-8 ", iconColor)} />
          </span>
          <span className="text-lg">{title}</span>
        </div>
        <span className="text-4xl font-bold block">{content}</span>
        {/*  */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-200">Since last week</span>
          <div
            className={cn("rounded-full px-2 py-2 text-sm", {
              "bg-green-400/20 text-green-400": currentValue > previousValue,
              "bg-red-400/20 text-red-500": currentValue < previousValue,
            })}
          >
            <span className="flex items-center gap-2">
              {val.isPositive ? (
                <TrendingUp className="size-5 text-green-400" />
              ) : (
                <TrendingDown className="size-5 text-red-500" />
              )}
              <span className="font-medium">{val.value}</span>
            </span>
          </div>
        </div>
      </div>

      {showCircleGradient && (
        <div
          className={cn(
            "size-32 rounded-full  blur-2xl absolute -bottom-14 -left-10 opacity-70",
            circleGradientColor
          )}
        />
      )}
    </div>
  );
};

export default SmallNumberCard;
