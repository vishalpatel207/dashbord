"use client";
import React from "react";

type OrderItem = {
  icon: string;
  message: React.ReactNode;
  date: string;
};

const orders: OrderItem[] = [
  {
    icon: "/notification.png",
    message: (
      <>
        <span className="font-semibold text-white">$2400, </span>
        Design changes
      </>
    ),
    date: "22 DEC 7:20 PM",
  },
  {
    icon: "/css3.png",
    message: (
      <>
        New order <span className="font-semibold text-white">#4219423</span>
      </>
    ),
    date: "21 DEC 11:21 PM",
  },
  {
    icon: "/server.png",
    message: <>Server Payments for April</>,
    date: "21 DEC 9:28 PM",
  },
  {
    icon: "/card.png",
    message: (
      <>
        New card added for order{" "}
        <span className="font-semibold text-white">#3210145</span>
      </>
    ),
    date: "20 DEC 3:52 PM",
  },
  {
    icon: "/xd.png",
    message: <>Unlock packages for Development</>,
    date: "19 DEC 11:35 PM",
  },
  {
    icon: "/xd.png",
    message: (
      <>
        New order <span className="font-semibold text-white">#9851258</span>
      </>
    ),
    date: "18 DEC 4:41 PM",
  },
];

const OrdersOverview: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(126.97deg,_rgba(6,11,40,0.74)_28.26%,_rgba(10,14,35,0.71)_91.2%)] rounded-2xl p-6 w-full">
      <div className="mb-6">
        <h2 className="text-white text-xl font-bold">Orders overview</h2>
        <p className="text-sm text-green-400 mt-1">● +30% this month</p>
      </div>

      <div className="space-y-6 max-h-[300px] overflow-y-auto scrollbar-hide">
        {orders.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-6 h-6 relative mt-1">
              <img src={item.icon} alt="icon" className="object-contain" />
            </div>
            <div>
              <p className="text-sm text-gray-200">{item.message}</p>
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersOverview;
