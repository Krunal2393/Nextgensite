import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "We partner with startups, MSMEs, and ambitious entrepreneurs, turning raw ideas into thriving business ventures.",
  },
  {
    q: "How do you simplify business processes?",
    a: "By handling registrations, compliances, and providing structured guidance tailored to your needs.",
  },
  {
    q: "Do you provide funding support?",
    a: "Yes, we help with government schemes, seed funds, and investor connections.",
  },
  {
    q: "How does your consultancy stand out?",
    a: "We focus on personalized, end-to-end support from registration to growth strategies.",
  },
  {
    q: "Can you help with scaling and marketing?",
    a: "Absolutely. We provide strategies to amplify impact and increase visibility in your target market.",
  },
  {
    q: "Is your support one-time or long-term?",
    a: "We offer both—one-time assistance and long-term partnership models.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg bg-sky-50/40 shadow-sm">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
