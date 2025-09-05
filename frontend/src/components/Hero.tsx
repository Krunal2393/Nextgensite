import FeatureCard from "./FeatureCard";
import { Eye, LineChart, BarChart3 } from "lucide-react";


export default function Hero() {
  return (
    <section className="w-full  min-h-screen bg-gradient-noise text-white flex flex-col justify-center pb-2.5">
      <div className="max-w-6xl z-30 mx-4 sm:mx-8 lg:mx-40 px-6 pt-32 text-center md:text-left">
        {/* Tagline */}
        <div
          className="inline-flex items-center border-1 font-semibold text-2xl bg-[#264C9280] gap-2 rounded-[10.94px] px-6 py-1  mb-4"
         
        >
          <span>Your Growth Partner</span>
          <span className="bg-sky-700 text-white p-3 rounded-xl text-sm font-semibold">
            Co-founder
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Your Vision, Our Execution. <br /> Zero Obstacles.
        </h1>

        {/* Subtext */}
        <p className="text-blue-100 max-w-2xl mb-8">
          Business is not a journey, it’s an expedition. Every obstacle ek pahar hai, 
          every win ek nayi duniya. We’re not here to advise; hum hain aapke saath 
          legends & legacies banane ke liye.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          <FeatureCard icon={<Eye />} title="Bold Vision" />
          <FeatureCard icon={<LineChart />} title="True Growth" />
          <FeatureCard icon={<BarChart3 />} title="Limitless Scale" />
        </div>
      </div>
    </section>
  );
}
