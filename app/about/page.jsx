import ReadyToPlan from "../components/ReadyToPlan";
import TimeLine from "./TimeLine";
import Teams from "./Teams";
import Partners from "./Partners";
import MissionVision from "./MissionVision";
import HeroSection from "./HeroSection";

export const metadata = {
  title: "About Us",
  description: "This is about us page",
};

export default function AboutPage() {

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-white bg-black">
      {/* HERO */}
      <HeroSection/>

      {/* MISSION / VISION / VALUES */}
      <MissionVision/>

      {/* TIMELINE */}
      <TimeLine/>

      {/* TEAM */}
      <Teams/>

      {/* PARTNERS */}
      <Partners/>

      {/* CTA */}
      <ReadyToPlan />
    </main>
  );
}
