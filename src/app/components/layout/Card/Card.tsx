"use client";

import React from "react";
import Image from "next/image";
import { BarChart, Bar, YAxis, ResponsiveContainer } from "recharts";

const barChartData = [
  { name: "", uv: 300 },
  { name: "", uv: 180 },
  { name: "", uv: 100 },
  { name: "", uv: 350 },
  { name: "", uv: 600 },
  { name: "", uv: 500 },
  { name: "", uv: 200 },
];

const dashboardStats = [
  {
    title: "Users",
    value: "32,984",
    icon: "/wallet.png",
    gradient: "from-[#1976d2] to-[#42a5f5]",
  },
  {
    title: "Clicks",
    value: "2.42m",
    icon: "/wallet.png",
    gradient: "from-[#42a5f5] to-[#1976d2]",
  },
  {
    title: "Sales",
    value: "$2,400",
    icon: "/document.png",
    gradient: "from-[#00c6ff] to-[#0072ff]",
  },
  {
    title: "Items",
    value: "320",
    icon: "/wallet.png",
    gradient: "from-[#43e97b] to-[#38f9d7]",
  },
  {
    title: "Revenue",
    value: "$10.2k",
    icon: "/wallet.png",
    gradient: "from-[#f12711] to-[#f5af19]",
  },
  {
    title: "Conversions",
    value: "540",
    icon: "/document.png",
    gradient: "from-[#8e2de2] to-[#4a00e0]",
  },
];

export default function DashboardStats() {
  return (
    <div className="p-4 pb-8 rounded-2xl shadow-lg text-white bg-gradient-to-br from-[#060B28BF] to-[#0A0E23B7]">
      {/* Bar Chart */}
      <div className="h-64 rounded-2xl py-6 bg-gradient-to-br from-[#060C29] to-[#040C30]/50">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barChartData}>
            <YAxis
              stroke="#ccc"
              axisLine={false}
              tickLine={false}
              domain={[0, "dataMax"]}
              tickCount={7}
              tick={{ fontSize: 12 }}
            />
            <Bar dataKey="uv" fill="#FFFFFF" radius={[10, 10, 10, 10]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Horizontal scroll stats with hidden scrollbar */}
      <div className="mt-6">
        <p className="text-sm text-green-400 mb-4">Active Users (+23) than last week</p>
        <div
          className="
            flex
            gap-6
            overflow-x-auto
            scrollbar-hide
            scroll-smooth
            cursor-grab
            px-2
            select-none
          "
          onMouseDown={(e) => {
            const slider = e.currentTarget;
            let startX = e.pageX - slider.offsetLeft;
            let scrollLeft = slider.scrollLeft;

            const onMouseMove = (eMove: MouseEvent) => {
              eMove.preventDefault();
              const x = eMove.pageX - slider.offsetLeft;
              const walk = (x - startX) * 2; // scroll speed
              slider.scrollLeft = scrollLeft - walk;
            };

            const onMouseUp = () => {
              window.removeEventListener("mousemove", onMouseMove);
              window.removeEventListener("mouseup", onMouseUp);
              slider.style.cursor = "grab";
            };

            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
            slider.style.cursor = "grabbing";
          }}
        >
          {dashboardStats.map((stat) => (
            <StatItem key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatItem({
  title,
  value,
  icon,
  gradient,
}: {
  title: string;
  value: string;
  icon: string;
  gradient: string;
}) {
  return (
    <div className="min-w-[140px] flex-shrink-0 flex flex-col items-start">
      <div className="flex items-center gap-2 mb-1">
        <div className="bg-[#1976d2] rounded-lg w-6 h-6 flex items-center justify-center">
          <Image src={icon} alt={title} width={16} height={16} />
        </div>
        <span className="text-sm text-gray-400">{title}</span>
      </div>
      <div className="text-lg font-bold text-white">{value}</div>
      <div className={`w-12 h-1 rounded bg-gradient-to-r ${gradient} mt-2`} />
    </div>
  );
}
