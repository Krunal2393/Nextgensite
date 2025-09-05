import React from "react";
import { Users, UserCheck, Grid, CheckSquare } from "lucide-react";

type StatItem = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { icon: <Users className="h-8 w-8 text-blue-800" />, value: "150+", label: "GAMECHANGERS" },
  { icon: <UserCheck className="h-8 w-8 text-blue-800" />, value: "1200+", label: "SUCCESS STORIES" },
  { icon: <Grid className="h-8 w-8 text-blue-800" />, value: "1500+", label: "BREAKTHROUGHS" },
  { icon: <CheckSquare className="h-8 w-8 text-blue-800" />, value: "80+", label: "SOLUTIONS" },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 rounded-md bg-blue-100/60 shadow-sm p-6"
          >
            {stat.icon}
            <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
            <p className="text-sm font-semibold text-blue-800 text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
