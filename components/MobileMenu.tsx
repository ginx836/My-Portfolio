"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { navLinks, socialLinks } from "@/constants";

import { Menu, X, Phone } from "lucide-react";

const MobileMenu = () => {
  const [is0pen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!is0pen);
  };

  return (
    <div className="tablet:hidden">
      {/* toggle button */}
      <button
        className="text-grey-700 hover:text-blue transition-colors"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <Menu />
      </button>

      {/* sidebar */}
      <div
        className={`w-full h-full flex flex-col bg-peach-600 fixed top-0 left-0 z-50 trnasition-all duration-300 ease-in-out transform
      ${is0pen ? "-translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
          <Link href={"/"} aria-label="Accueil">
            <h5 className="text-blue text-xl font-semibold">GinxDev.</h5>
          </Link>
          <button
            className="text-grey-700 hover:text-blue transition-colors"
            onClick={toggleMenu}
            aria-label="Fermer le menu"
          >
            <X />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-10">
          <ul className="flex flex-col items-center gap-5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.url}
                  label={link.label}
                  className="text-3xl"
                  onClick={toggleMenu}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full h-20 flex items-center justify-center max-width border-t border-peach">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              className="text-grey-700 hover:text-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
