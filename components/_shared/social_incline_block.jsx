import React from "react";

export default function SocialInclineBlock({ icon, iconName, link }) {
  return (
    <li className={iconName}>
      <a href={link} target="_blank" rel="noreferrer">
        {icon}
        <span> - {iconName}</span>
      </a>
    </li>
  );
}
