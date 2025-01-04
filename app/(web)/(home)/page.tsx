import Categories from "@/components/global/sections/Categories";
import HeroSection from "@/components/global/sections/HeroSection";
import NewArrival from "@/components/global/sections/NewArrival";
import RecommendSection from "@/components/global/sections/RecommendSection";
import ReacentView from "@/components/global/sections/reacent-view";
export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="padding-size -mt-16 w-full relative z-10 py-10 space-y-8">
        <NewArrival />
        <ReacentView />
        <Categories />
        <RecommendSection />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
