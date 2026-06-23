"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

import { navLinks } from "./navLinks";

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-sm relative z-50">
      {/* Top */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <h2 className="text-2xl font-bold">
            <span className="text-[#0B5975]">QEDU</span>
            <span className="text-[#FF7448]">CATO</span>
          </h2>
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          absolute
          left-0
          top-full
          w-full
          bg-white
          shadow-xl
          transition-all
          duration-300
          overflow-hidden
          ${isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul>
          {navLinks.map((item) => (
            <li key={item.label} className="border-b border-gray-100">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      px-5
                      py-4
                      font-medium
                    "
                  >
                    {item.label}

                    <FiChevronDown
                      className={`
                        transition-transform
                        duration-300
                        ${openDropdown === item.label ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        openDropdown === item.label
                          ? "max-h-[500px]"
                          : "max-h-0"
                      }
                    `}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="
                            block
                            pl-10
                            pr-5
                            py-3
                            text-sm
                            text-gray-600
                            hover:text-[#FF7448]
                            hover:bg-gray-50
                          "
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block
                    px-5
                    py-4
                    font-medium
                  "
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Admission Button */}
        <div className="p-5">
          <Link
            href="/admission"
            className="
              w-full
              flex
              justify-center
              items-center
              bg-[#FF7448]
              text-white
              py-3
              rounded-lg
              font-semibold
            "
          >
            ADMISSION OPEN
          </Link>
        </div>
      </div>
    </nav>
  );
}
