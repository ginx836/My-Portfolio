"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  label,
  className = "",
  onClick = () => {},
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}): JSX.Element => {
  //Check if current pathname is active
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`navlinks ${className}
      ${
        pathname === href
          ? "after:scale-x-100 after:origin-right"
          : "after-scale-x-0 after:origin-left"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
