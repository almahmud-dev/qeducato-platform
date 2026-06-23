"use client";

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { navLinks } from "./navLinks";

const NavbarDesktop = () => {
  return (
    <div className="hidden lg:block">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold text-[#0D5C63]"
          >
            EduCato
          </Link>

          {/* Menu */}
          <nav>
            <ul className="flex items-center gap-8">

              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                >
                  {item.children ? (
                    <>
                      <button
                        className="
                          flex items-center gap-2
                          font-medium
                          text-gray-800
                          hover:text-[#FF6B3D]
                          transition
                        "
                      >
                        {item.label}
                        <FaChevronDown size={12} />
                      </button>

                      <div
                        className="
                          absolute
                          left-0
                          top-full
                          invisible
                          opacity-0
                          translate-y-3
                          group-hover:visible
                          group-hover:opacity-100
                          group-hover:translate-y-0
                          transition-all
                          duration-300
                          bg-white
                          shadow-xl
                          rounded-xl
                          min-w-[220px]
                          py-3
                        "
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="
                              block
                              px-5
                              py-3
                              text-sm
                              hover:bg-orange-50
                              hover:text-[#FF6B3D]
                            "
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="
                        font-medium
                        text-gray-800
                        hover:text-[#FF6B3D]
                        transition
                      "
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}

            </ul>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              bg-[#FF6B3D]
              text-white
              px-6
              py-3
              rounded-lg
              font-medium
              hover:opacity-90
              transition
            "
          >
            Apply Now
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;