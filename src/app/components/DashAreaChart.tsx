"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 150, pv: 500 },
  { name: "Feb", uv: 200, pv: 300 },
  { name: "Mar", uv: 300, pv: 220 },
  { name: "Apr", uv: 300, pv: 210 },
  { name: "May", uv: 350, pv: 230 },
  { name: "Jun", uv: 480, pv: 250 },
  { name: "Jul", uv: 400, pv: 200 },
  { name: "Aug", uv: 300, pv: 150 },
  { name: "Sep", uv: 350, pv: 180 },
  { name: "Oct", uv: 370, pv: 210 },
  { name: "Nov", uv: 300, pv: 220 },
  { name: "Dec", uv: 450, pv: 160 },
];

export default function DashAreaChart() {
  return (
    <div className="p-6 rounded-2xl shadow-lg text-white bg-[linear-gradient(126.97deg,_rgba(6,11,40,0.74)_28.26%,_rgba(10,14,35,0.71)_91.2%)]">
      <h2 className="text-lg font-semibold">Sales overview</h2>
      <p className="text-sm text-green-400">(+5) more in 2021</p>
      <div className="h-[320px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUvBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0075FF" stopOpacity={1} />
                <stop offset="100%" stopColor="#0075FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#67e8f9" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#67e8f9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
              fontSize={12}
            />
            <YAxis
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
              domain={[0, "dataMax"]}
              ticks={[0, 100, 200, 300, 400, 500]}
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "0.5rem",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Area
              type="basis"
              dataKey="uv"
              stroke="#0075FF"
              fillOpacity={1}
              fill="url(#colorUvBlue)"
              strokeWidth={3}
            />
            <Area
              type="basis"
              dataKey="pv"
              stroke="#67e8f9"
              fillOpacity={1}
              fill="url(#colorPv)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
