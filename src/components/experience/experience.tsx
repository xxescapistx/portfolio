import React from "react";
import { experience } from "@/components/experience/experiences";

const Experience = ({ exp }: { exp: experience }) => {
  return (
    <div className="flex flex-col items-start bg-slate-400">
      <h1 className="text-black font-bold text-lg sm:text-xl bg-slate-400">{exp.company}</h1>
      {exp.position.map((pos) => (
        <div className="flex flex-row justify-between w-[70vw] items-center" key={pos.title + pos.periodStart}>

        <h2 className="text-slate-800 text-md">
          {pos.title}
        </h2>

        <h2 className="text-slate-500 text-sm">
          {pos.periodStart} - {pos.periodEnd}
        </h2>
        </div>
      ))}
    </div>
  );
};

export default Experience;
