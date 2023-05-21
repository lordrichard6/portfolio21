import React from "react";

export default function SingleTech({ key, tech, icon, text, color }) {
  return (
    <div className="w-4/5 mx-auto md:h-40" key={key}>
      <div className="flex items-center">
        <div className={`text-4xl border-solid border-2 p-1 mr-2 rounded ${color}`}>
          {icon}
        </div>
        <h3 className="text-3xl font-medium underline underline-offset-1">{tech}</h3>
      </div>
      <p className="normal-text mt-1">{text}</p>
    </div>
  );
}
