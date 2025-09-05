// src/components/HotServices.tsx
import {
  Landmark,
  Shirt,
  Building2,
  University,
  BadgeIndianRupee,
  Users,
} from "lucide-react";

const services = [
  { amount: "₹5 CR", title: "Collateral Free Loans", icon: Landmark },
  { amount: "₹2 CR", title: "NAIFF Loans", icon: Shirt },
  { amount: "₹50 L", title: "Seed fund", icon: Building2 },
  { amount: "₹10 CR", title: "Grant fund", icon: University },
  { amount: "₹1 CR", title: "Startup Seed Support", icon: BadgeIndianRupee },
  { amount: "₹50 L", title: "PMEGP", icon: Users },
];

export default function HotServices() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-10">
        Hot Services (Ft. Funding)
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative bg-[#3A80C1]/10 border border-gray-200 shadow-sm rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition"
          >
            {/* Top Circle Icon */}
            <div
              style={{
                background:
                  "linear-gradient(170.84deg, #2E6FB6 6.94%, rgba(123, 174, 224, 0.42) 95.19%)",
              }}
              className="absolute -top-6 w-12 h-12  rounded-full flex items-center justify-center shadow-md"
            >
              <service.icon className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <p className="text-lg font-bold text-[#264C92] mt-6">UP TO</p>

            {/* Gradient Text */}
            <h3
              className="text-4xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(170.84deg, #2E6FB6 6.94%, rgba(123, 174, 224, 0.42) 95.19%)",
              }}
            >
              {service.amount}
            </h3>

            <p className="text-sm text-gray-700 mt-2">{service.title}</p>

            {/* Button */}
            <button className="mt-5 px-5 py-1 bg-[#3A80C1] text-white text-sm rounded-md shadow hover:bg-blue-700 transition">
              Avail now →
            </button>
          </div>
        ))}
      </div>

      {/* View All link */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center"
        >
          View all <span className="ml-1">›</span>
        </a>
      </div>
    </section>
  );
}
