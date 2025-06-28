"use client";
import React, { useEffect, useState } from "react";

type Project = {
  company: string;
  logo: string;
  members: string[];
  budget: string;
  completion: number;
};

const projects: Project[] = [
  { company: "Chakra Soft UI Version", logo: "/xd.png", members: ["A", "B", "C", "D"], budget: "$14,000", completion: 60 },
  { company: "Add Progress Track", logo: "/progresstrack.png", members: ["A", "B", "C"], budget: "$3,000", completion: 10 },
  { company: "Fix Platform Errors", logo: "/slack.png", members: ["A", "B"], budget: "Not set", completion: 100 },
  { company: "Launch Mobile App", logo: "/android.png", members: ["A", "B", "C", "D"], budget: "$32,000", completion: 100 },
  { company: "New Pricing Page", logo: "/spotify.png", members: ["A", "B", "C"], budget: "$400", completion: 25 },
  { company: "Redesign Online Shop", logo: "/figma.png", members: ["A"], budget: "$7,600", completion: 40 },
  { company: "Improve Analytics", logo: "/google.png", members: ["A", "B", "C", "D", "E"], budget: "$9,800", completion: 75 },
  { company: "Migrate Database", logo: "/mysql.png", members: ["A", "B"], budget: "$1,200", completion: 50 },
  { company: "SEO Optimization", logo: "/seo.png", members: ["A", "B", "C"], budget: "$5,500", completion: 85 },
];

const ProjectTable: React.FC = () => {
  const [animatedProgress, setAnimatedProgress] = useState<number[]>(projects.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(projects.map((p) => p.completion));
    }, 300); // Delay for animation after reload
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-2xl p-6 shadow-lg bg-[linear-gradient(126.97deg,_rgba(6,11,40,0.74)_28.26%,_rgba(10,14,35,0.71)_91.2%)]">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <p className="text-white text-xl font-bold">Projects</p>
          <p className="text-green-400 text-sm">● 30 done this month</p>
        </div>
      </div>

      <div className="relative">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead className="sticky top-0 bg-[rgba(6,11,40,0.9)] backdrop-blur-md">
            <tr className="text-gray-400 text-sm">
              <th className="pb-2 font-normal">COMPANIES</th>
              <th className="pb-2 font-normal">MEMBERS</th>
              <th className="pb-2 font-normal">BUDGET</th>
              <th className="pb-2 font-normal">COMPLETION</th>
            </tr>
          </thead>
        </table>

        <div className="overflow-y-auto max-h-[300px] scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <tbody className="text-white text-sm">
              {projects.map((proj, index) => (
                <tr
                  key={index}
                  className="border-t border-[#22304a] hover:bg-[#121c35]/40 transition"
                >
                  <td className="py-3.5 flex items-center gap-3">
                    <img
                      src={proj.logo}
                      alt={proj.company}
                      className="w-6 h-6 rounded object-contain"
                    />
                    <span>{proj.company}</span>
                  </td>

                  <td className="py-3.5">
                    <div className="flex">
                      {proj.members.map((member, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 bg-[#22304a] rounded-full flex items-center justify-center text-white text-xs border-2 border-[#0b162b] -ml-3 first:ml-0"
                        >
                          {member}
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="py-4">{proj.budget}</td>

                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span>{proj.completion}%</span>
                      <div className="w-32 bg-[#22304a] h-2 rounded-full overflow-hidden">
                        <div
                          className="h-2 bg-[#1583f7] rounded-full transition-all duration-700"
                          style={{ width: `${animatedProgress[index]}%` }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
