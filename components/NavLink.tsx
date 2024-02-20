"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => {
  //Check if current pathname is active
  const pathname = usePathname();

  return (
    <Link
      href={href}
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
