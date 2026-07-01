import Image from "next/image";
import Banner from "@/components/Banner";
import TrendingIdeas from "@/components/TrendingIdeas";
import WhyChooseUs from "@/components/WhyChooseUs";
import CommunityStats from "@/components/CommunityStats";

export default function Home() {
  return (
    <div >
       <Banner/>
       <TrendingIdeas/>
       <WhyChooseUs/>
       <CommunityStats/>
    </div>
  );
}
