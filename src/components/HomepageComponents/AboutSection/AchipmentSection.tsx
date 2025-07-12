"use client";

import { Button } from "@/components/ui/button";
import { FaUsers, FaUserTie, FaCodeBranch, FaTools } from "react-icons/fa";
import { cn } from "@/lib/utils"; // if you use the cn util
import MainContainer from "@/components/shared/Container/MainContainer";

const stats = [
  {
    icon: <FaUsers className="text-white size-6" />,
    value: "434k",
    label: "Happy Customers",
  },
  {
    icon: <FaUserTie className="text-white size-6" />,
    value: "123+",
    label: "Co-Agent",
  },
  {
    icon: <FaCodeBranch className="text-white size-6" />,
    value: "120",
    label: "Branches Around",
  },
  {
    icon: <FaTools className="text-white size-6" />,
    value: "150k",
    label: "Built Hose",
  },
];

export default function AchievementSection() {
  return (
    <section className="relative md:py-16 md:h-[300px] h-fit my-5 md:mb-44 px-3 md:bg-[url('/Project-bg.png')] bg-none">
      <MainContainer>
        <div className="mx-auto max-w-7xl rounded p-3 flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-800 md:absolute top-1/2 right-0 left-0">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              The Achievement <br />
              <span className="text-gray-800">my Project.</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              There are many variations of passages of Lorem Ipsum available,
              majority have suffered.
              <br />
              <br />
              Suspe ndisse suscipit sagittis leo. <br />
              Entum estibulum dignissim as posuere. <br />
              Entum estibulum dignissim as posuere.
            </p>
            <Button className="rounded-full px-6">Consultation →</Button>
          </div>

          {/* Right Stats */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 rounded-xl shadow-md p-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:shadow-sm transition"
              >
                <div className="bg-gray-900 p-3 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-lg font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
