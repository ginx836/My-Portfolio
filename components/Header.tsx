import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import { navLinks, socialLinks } from "@/constants";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-peach">
        <h1 className="text-purple text-xl font-semibold">GinxDev.</h1>
      <nav className="flex items-center gap-12 max-tablet:hidden">
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.url} label={link.label} />
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              target="_blank"
              key={index}
              className="w-8 h-8 flex items-center justify-center rounded"
            >
              <Image src={link.icon} alt="icon" width={25} height={25} />
            </a>
          ))}
        </div>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
