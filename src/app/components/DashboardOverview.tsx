"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DashboardOverview() {
  const [satisfactionPercent, setSatisfactionPercent] = useState(0);
  const [safetyScore, setSafetyScore] = useState(0);

  const targetSatisfaction = 95;
  const targetSafety = 9.3;

  useEffect(() => {
    // Satisfaction Progress Animation
    let satFrame = 0;
    const satTotalFrames = 60;
    const animateSatisfaction = () => {
      satFrame++;
      const progress = Math.min(satFrame / satTotalFrames, 1);
      setSatisfactionPercent(Math.floor(progress * targetSatisfaction));
      if (progress < 1) requestAnimationFrame(animateSatisfaction);
    };
    animateSatisfaction();

    // Safety Score Animation
    let safeFrame = 0;
    const safeTotalFrames = 60;
    const animateSafety = () => {
      safeFrame++;
      const progress = Math.min(safeFrame / safeTotalFrames, 1);
      setSafetyScore(parseFloat((progress * targetSafety).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animateSafety);
    };
    animateSafety();
  }, []);

  const satRadius = 90;
  const satCircumference = 2 * Math.PI * satRadius;

  const safeRadius = 68;
  const safeCircumference = 2 * Math.PI * safeRadius;

  return (
    <div className="grid w-full gap-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1.3fr]">
      {/* Welcome Card */}
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/jellyfish.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 h-full flex flex-col justify-between py-[36px] px-[32px] text-white">
          <div>
            <p className="text-sm text-white/70">Welcome back,</p>
            <h2 className="text-[28px] font-bold">Mark Johnson</h2>
            <p className="text-base text-white/60 mt-[18px]">
              Glad to see you again! <br /> Ask me anything.
            </p>
          </div>
          <button className="text-xs text-start mt-4 underline underline-offset-4">
            Tap to record →
          </button>
        </div>
      </div>

      {/* Satisfaction Rate */}
      <div className="text-white rounded-2xl p-6 w-full mx-auto shadow-lg relative bg-[linear-gradient(127.09deg,_rgba(6,11,40,0.94)_19.41%,_rgba(10,14,35,0.49)_76.65%)]">
        <div className="mb-4">
          <h2 className="text-sm font-semibold">Satisfaction Rate</h2>
          <p className="text-xs text-white/60">From all projects</p>
        </div>

        <div className="relative w-[212px] h-[212px] mx-auto">
          <svg width="212" height="212">
            <defs>
              <linearGradient id="smilecircleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="23.84%" stopColor="#0075FF" />
                <stop offset="81.07%" stopColor="#0075FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="106"
              cy="106"
              r={satRadius}
              stroke="#18305a"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="106"
              cy="106"
              r={satRadius}
              stroke="url(#smilecircleGradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={satCircumference}
              strokeDashoffset={satCircumference - (satCircumference * satisfactionPercent) / 100}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
            />
          </svg>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0075FF] rounded-full flex items-center justify-center shadow-md">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2" />
              <path
                d="M11 19c1.333 1.333 5.667 1.333 7 0"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="14" r="1" fill="white" />
              <circle cx="20" cy="14" r="1" fill="white" />
            </svg>
          </div>

          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#111d35] px-4 py-4 rounded-xl flex justify-between text-xs w-56 shadow-md">
            <span className="text-white/50">0%</span>
            <div className="text-center">
              <p className="text-base font-bold leading-none">{satisfactionPercent}%</p>
              <p className="text-white/60 text-[10px] -mt-0.5">Based on likes</p>
            </div>
            <span className="text-white/50">100%</span>
          </div>
        </div>
      </div>

      {/* Referral Tracking */}
      <div className="rounded-2xl shadow-lg p-4 pe-2 w-full max-w-xl flex flex-col bg-[linear-gradient(126.97deg,_rgba(6,11,40,0.74)_28.26%,_rgba(14,21,58,0.71)_91.2%)]">
        <div className="flex justify-between items-center mb-6">
          <span className="text-white text-base font-semibold">Referral Tracking</span>
          <button className="p-[6px] flex items-center justify-center rounded-[12px] bg-[#23284A]/60">
            <img src="/dots.svg" alt="More options" className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-row gap-2 items-center flex-1">
          {/* Stats */}
          <div className="flex flex-col gap-4 flex-1 max-w-[180px]">
            <div className="rounded-xl bg-[linear-gradient(126.97deg,_#060C29_28.26%,_rgba(4,12,48,0.5)_91.2%)] px-5 py-4 shadow-sm">
              <div className="text-xs text-white/60 mb-1">Invited</div>
              <div className="text-xl text-white font-bold leading-none">
                145 <span className="text-base font-normal">people</span>
              </div>
            </div>
            <div className="rounded-xl bg-[linear-gradient(126.97deg,_#060C29_28.26%,_rgba(4,12,48,0.5)_91.2%)] px-5 py-4 shadow-sm">
              <div className="text-xs text-white/60 mb-1">Bonus</div>
              <div className="text-xl font-bold text-white leading-none">1,465</div>
            </div>
          </div>

          {/* Circular Progress */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-44 h-44 rounded-xl flex items-center justify-center">
              <svg className="w-40 h-40">
                <defs>
                  <linearGradient id="circleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#05CD99" />
                    <stop offset="92%" stopColor="rgba(5,205,153,0)" />
                  </linearGradient>
                </defs>
                <circle
                  cx="80"
                  cy="80"
                  r={safeRadius}
                  stroke="#18305a"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r={safeRadius}
                  stroke="url(#circleGradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={safeCircumference}
                  strokeDashoffset={safeCircumference - (safeCircumference * (safetyScore * 10)) / 100}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-base text-white/60 mb-1">Safety</span>
                <span className="text-5xl font-bold text-white leading-none">{safetyScore}</span>
                <span className="text-xs text-white/40 mt-1">Total Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
