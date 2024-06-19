"use client";
import { Logo } from "../Logo";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { useState } from "react";
const links = [
  {
    text: "Início",
    link: "#",
  },
  {
    text: "Serviços",
    link: "#nossos-servicos",
  },
  {
    text: "Sobre",
    link: "#sobre",
  },
  {
    text: "Projeto",
    link: "#projetos",
  },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const iconSize = {
    width: 24,
    height: 24,
  };

  return (
    <nav className="flex items-center justify-between px-4">
      <Logo bgDark />
      <button onClick={toggleMenu} type="button" className="md:hidden">
        <HamburgerMenuIcon {...iconSize} color="white" />
      </button>
      <div className="hidden md:flex justify-end flex-1 items-center">
        {links.map((l) => (
          <a
            key={l.text}
            className="p-5 hover:bg-gray-800 text-white transition-all"
            href={l.link}
          >
            {l.text}
          </a>
        ))}
      </div>
      {menuOpen && (
        <div className="fixed right-0 top-16 w-28 bg-gray-800 md:hidden flex flex-col items-center">
          {links.map((l) => (
            <a
              key={l.text}
              className="p-5 text-white w-full text-center hover:bg-gray-900 transition-all"
              href={l.link}
              onClick={(e) => {
                setMenuOpen(false);
              }}
            >
              {l.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
