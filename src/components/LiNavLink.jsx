import React from "react";

// eslint-disable-next-line react/prop-types
export default function LiNavLink({link, title}) {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
}
