// src/components/SparkToMotion.tsx
import { Zap, Layers, Rocket, Send, MoveRight } from "lucide-react";

const steps = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "The Spark",
    desc1: "Sab kuch ek dream se shuru hota hai.",
    desc2: "We help you shape your vision into bold, practical action.",
  },
  {
    icon: <Layers className="w-6 h-6 text-white" />,
    title: "The Structure",
    desc1: "Legal, financial & regulatory setup sorted.",
    desc2: "Aapko build karte hain scale ke liye, struggle ke liye nahi.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "The Lift",
    desc1: "Pitch decks, fundraising, resources – all in place.",
    desc2: "We connect you to the right investors, at the right time.",
  },
  {
    icon: <Send className="w-6 h-6 text-white" />,
    title: "The Push",
    desc1: "Go-to-market strategies + digital presence.",
    desc2:
      "Hum banate hain aapka brand jo market mein ghoome, chale, aur chale tez!",
  },
  {
    icon: <MoveRight className="w-6 h-6 text-white" />,
    title: "The Motion",
    desc1: "Startup sirf launch nahi hota: accelerate hota hai.",
    desc2: "Aur hum ensure karte hai ki aapki momentum kabhi rukhe nahi.",
  },
];

export default function SparkToMotion() {
  return (
    <div
      className="background: linear-gradient(180deg, #E8F4FF 0%, #E8F4FF 100%);
 min-h-screen flex items-center justify-center p-6"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          From Spark to Motion — The Next-Gen Way:
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300"></div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative bg-white shadow-sm rounded-lg p-5 pl-16"
              >
                {/* Icon */}
                <div className="absolute left-0 top-5 w-12 h-12 rounded-full bg-[#2E5AA8] flex items-center justify-center shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc1}</p>
                <p className="text-sm text-gray-600">{step.desc2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
