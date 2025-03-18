"use client";
import React from "react";

import { CounterAnimation } from "./Counter";

import { stats } from "@/data";

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="md:hidden flex flex-col gap-8">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex flex-col items-center">
            <CounterAnimation value={stat.value} type="value" />
            {index === 0 ? (
              <span className="flex items-center">
                <span className="text-xl text-[#9583FF] text-center">
                  Users Across {"\u00A0"}
                </span>
                <CounterAnimation
                  value={String(stat.label.match(/\d+/)?.[0])}
                  type="label"
                />
                <span className="text-xl text-[#9583FF] text-center">
                  + Countries
                </span>
              </span>
            ) : (
              <p className="mt-2 text-xl text-[#9583FF] text-center">
                {stat.label}
              </p>
            )}
            {index < stats.length - 1 && (
              <div className="mt-5 w-2/3 h-px bg-gradient-to-r from-transparent via-[#0B1133] to-transparent opacity-20" />
            )}
          </div>
        ))}
      </div>

      <div className="hidden md:block relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-8 items-center pb-4 px-4 no-scrollbar flex-wrap justify-center">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="flex-shrink-0 flex flex-col items-center min-w-[200px]">
                <CounterAnimation value={stat.value} type="value" />
                {index === 0 ? (
                  <span className="flex items-center">
                    <span className="text-xl text-[#9583FF] text-center">
                      Users Across {"\u00A0"}
                    </span>
                    <CounterAnimation
                      value={String(stat.label.match(/\d+/)?.[0])}
                      type="label"
                    />
                    <span className="text-xl text-[#9583FF] text-center">
                      + Countries
                    </span>
                  </span>
                ) : (
                  <p className="mt-2 text-xl text-[#9583FF] text-center">
                    {stat.label}
                  </p>
                )}
              </div>
              {index < stats.length - 1 && (
                <div className="flex-shrink-0 w-px h-24 bg-gradient-to-b from-transparent via-[#0B1133] to-transparent opacity-20" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
