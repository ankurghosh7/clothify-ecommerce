import HeroSection from "@/components/global/sections/HeroSection";
import RecommendSection from "@/components/global/sections/RecommendSection";

export default function Home() {
  return (
    <main>
      <div className="px-10">
        <HeroSection />
      </div>
      <div className="padding-size -mt-16 w-full h-60 relative z-30">
        <RecommendSection />
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";
