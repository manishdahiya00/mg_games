"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About Us", icon: "ℹ️" },
  { href: "/blog", label: "Blog", icon: "✏️" },
  { href: "/terms", label: "Terms and Conditions", icon: "📄" },
  { href: "/privacy", label: "Privacy", icon: "🔒" },
  { href: "/trending", label: "Trending", icon: "🔥" },
  { href: "/most-liked-games", label: "Most Liked Games", icon: "👍" },
  { href: "/new-games", label: "New Games", icon: "🆕" },
  { href: "/rewarded-games", label: "Rewarded Games", icon: "🏆" },
];

const categories = [
  { href: "/multiplayer", label: "Multiplayer", icon: "👥" },
  { href: "/action", label: "Action", icon: "💥" },
  { href: "/adventure", label: "Adventure", icon: "🗺️" },
  { href: "/girls", label: "Girls", icon: "👧" },
  { href: "/driving", label: "Driving", icon: "🚗" },
  { href: "/funny", label: "Funny", icon: "😂" },
  { href: "/strategy", label: "Strategy", icon: "♟️" },
  { href: "/management", label: "Management", icon: "📊" },
  { href: "/classic", label: "Classic", icon: "🕹️" },
  { href: "/board", label: "Board", icon: "🎲" },
  { href: "/puzzle", label: "Puzzle", icon: "🧩" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#1e2837] text-white shadow-lg">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wider text-white">
              MG<span className="text-[#4bffa5]">Games</span>
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#4bffa5] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#1e2837] shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col
    ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } md:translate-x-0 h-screen`}
      >
        <div className="p-4 border-b border-[#4bffa5]/20">
          <Link href="/" className="flex items-center justify-center">
            <span className="text-2xl font-bold tracking-wider text-white">
              MG<span className="text-[#4bffa5]">Games</span>
            </span>
          </Link>
        </div>
        <div className="flex justify-between items-center p-4 md:hidden">
          <span className="font-bold text-xl text-white">Menu</span>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-[#2a3749] text-white hover:text-[#4bffa5] transition-colors duration-300"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 overflow-y-auto flex-grow">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 px-2 py-1 rounded-md hover:bg-[#2a3749] transition-colors duration-300 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-4 border-t border-[#4bffa5]/20">
            <h3 className="text-[#ff6b6b] font-semibold mb-2">CATEGORIES</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="flex items-center space-x-3 px-2 py-1 rounded-md hover:bg-[#2a3749] transition-colors duration-300 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span>{category.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;
