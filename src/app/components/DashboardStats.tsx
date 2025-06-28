"use client";
import React from "react";
import Image from "next/image";
import { BarChart, Bar, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "", uv: 300 },
  { name: "", uv: 180 },
  { name: "", uv: 100 },
  { name: "", uv: 350 },
  { name: "", uv: 600 },
  { name: "", uv: 500 },
  { name: "", uv: 200 },
];

const stats = [
  { title: "Users", value: "32,984", icon: "/wallet.png", gradient: "from-[#1976d2] to-[#42a5f5]" },
  { title: "Clicks", value: "2.42m", icon: "/wallet.png", gradient: "from-[#1976d2] to-[#42a5f5]" },
  { title: "Sales", value: "$2,400", icon: "/document.png", gradient: "from-[#1976d2] to-[#42a5f5]" },
  { title: "Items", value: "320", icon: "/wallet.png", gradient: "from-[#1976d2] to-[#42a5f5]" },
];

export default function DashboardStats() {
  return (
    <div className="p-4 pb-8 rounded-2xl shadow-lg text-white bg-[linear-gradient(126.97deg,_rgba(6,11,40,0.74)_28.26%,_rgba(10,14,35,0.71)_91.2%)]">
      <div className="h-64 rounded-2xl py-6 bg-[linear-gradient(126.97deg,_#060C29_28.26%,_rgba(4,12,48,0.5)_91.2%)]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <YAxis
              stroke="#ccc"
              axisLine={false}
              tickLine={false}
              domain={[0, "dataMax"]}
              tickCount={7}
              interval={0}
              tick={{ fontSize: 12 }}
            />
            <Bar dataKey="uv" fill="#FFFFFF" radius={[10, 10, 10, 10]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6">
        <p className="text-sm text-green-400">Active Users (+23) than last week</p>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1">
                <div className="bg-[#1976d2] rounded-lg w-6 h-6 flex items-center justify-center">
                  <Image src={stat.icon} alt={stat.title} width={16} height={16} />
                </div>
                <span className="text-sm text-gray-400">{stat.title}</span>
              </div>
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className={`w-12 h-1 rounded bg-gradient-to-r ${stat.gradient} mt-2`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
