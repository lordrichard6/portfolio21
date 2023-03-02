import React from "react";

export default function SingleTech({ key, tech, icon, text }) {
  return (
    <div className="w-3/4" key={key}>
      <div className="flex items-center">
        <div className="text-4xl border-solid border-2 p-1 mr-2 rounded">
          {icon}
        </div>
        <h3 className="text-2xl underline underline-offset-1">{tech}</h3>
      </div>
      <p className="text-md mt-1">{text}</p>
    </div>
  );
}
