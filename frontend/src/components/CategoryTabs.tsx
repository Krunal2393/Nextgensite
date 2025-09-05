import { useState } from "react";
import { Briefcase, Shield, DollarSign, Cpu } from "lucide-react";

const categories = [
  {
    id: "business",
    label: "Business Registration",
    icon: <Briefcase className="w-4 h-4" />,
    items: [
      "Private Limited",
      "Limited Liability Partnership",
      "Partnership Firm (ROF)",
      "Udyam Registration",
      "Private Limited Company Registration",
      "Private Limited Company Registration",
    ],
  },
  {
    id: "compliance",
    label: "Compliance Support",
    icon: <Shield className="w-4 h-4" />,
    items: ["Tax Filing", "GST Registration", "Annual Compliance"],
  },
  {
    id: "funding",
    label: "Funding Support",
    icon: <DollarSign className="w-4 h-4" />,
    items: ["Seed Funding", "Government Grants", "Investor Pitch Deck"],
  },
  {
    id: "digital",
    label: "Digital Transformation",
    icon: <Cpu className="w-4 h-4" />,
    items: ["Website Development", "Cloud Migration", "Automation Tools"],
  },
];

export default function CategoryTabs() {
  const [active, setActive] = useState("business");

  const current = categories.find((c) => c.id === active);

  return (
    <section className="py-10 bg-sky-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                active === cat.id
                  ? "bg-sky-600 text-white border-sky-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-sky-400"
              }`}
            >
              {cat.icon}
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {current?.items.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow rounded-lg text-center font-medium text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
