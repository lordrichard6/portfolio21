import React from "react";

export default function SocialInclineBlock({ icon, iconName, link }) {
  return (
    <li className={iconName}>
      <a href={link}>
        {icon}
        <span> - {iconName}</span>
      </a>
    </li>
  );
}
