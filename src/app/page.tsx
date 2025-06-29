import React from "react";
import OrdersOverview from "./components/layout/Order/Orders";
import ProjectTable from "./components/layout/Company/ProjectCompany";
import DashboardOverview from "./components/layout/DashbordPriview/DashbordPriview";
import Chart from "./components/layout/Chart/Chart";
import DashboardStats from "./components/layout/Card/Card";

const dashboardStatsData = [
  { label: "Today's Money", value: "$53,000", change: "+55%", icon: "./wallet.png" },
  { label: "Orders", value: "2,200", change: "+5%", icon: "./global.png" },
  { label: "Refunds", value: "-320", change: "-2%", icon: "./document.png" },
  { label: "Earnings", value: "$17,000", change: "+8%", icon: "./cart.png" },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dashboardStatsData.map((stat) => (
          <div
            key={stat.label}
            className="flex justify-between items-center bg-gradient-to-br from-[#162447] to-[#0b162b] rounded-2xl p-5 shadow-lg"
          >
            <div>
              <div className="text-sm text-gray-400">{stat.label}</div>
              <div className="flex items-center mt-2">
                <div className="text-[18px] font-bold text-white mr-2">{stat.value}</div>
                <div
                  className={`text-sm ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                >
                  {stat.change}
                </div>
              </div>
            </div>

            <div className="w-[45px] h-[45px] rounded-xl bg-[#1583f7] flex items-center justify-center">
              <img src={stat.icon} alt={stat.label} />
            </div>
          </div>
        ))}
      </div>

      <DashboardOverview />

      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="xl:col-span-3 lg:col-span-2 flex flex-col">
          <Chart />
        </div>
        <div className="xl:col-span-2 lg:col-span-2 flex flex-col">
          <DashboardStats />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col h-full">
          <ProjectTable />
        </div>
        <div className="flex flex-col h-full">
          <OrdersOverview />
        </div>
      </div>
    </div>
  );
}
