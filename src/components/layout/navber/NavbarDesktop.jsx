"use client";

import Link from "next/link";
import { navLinks } from "./navLinks";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { FiPhoneCall, FiMail, FiSearch, FiChevronDown } from "react-icons/fi";

export default function NavbarDesktop() {
  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-[#0B5975] text-white h-[72px]">
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* Left */}
          <div className="relative bg-[#FF7448] h-full px-12 flex items-center gap-5">
            <span className="font-medium">Follow us:</span>

            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />

            <div
              className="
              absolute
              right-[-70px]
              top-0
              w-0
              h-0
              border-t-[72px]
              border-t-[#FF7448]
              border-r-[70px]
              border-r-transparent
            "
            />
          </div>

          {/* Right */}
          <div className="flex items-center h-full">
            <div className="flex items-center gap-3 px-8 border-l border-white/20 h-full">
              <FiPhoneCall className="text-[#FF7448] text-2xl" />

              <div>
                <p className="text-xs">Call Now !</p>

                <p className="font-semibold">+91 7052 101 786</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-8 border-l border-white/20 h-full">
              <FiMail className="text-[#FF7448] text-2xl" />

              <div>
                <p className="text-xs">Email Now</p>

                <p className="font-semibold">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto h-[90px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h2 className="text-[34px] font-bold">
              <span className="text-[#0B5975]">QEDU</span>

              <span className="text-[#FF7448]">CATO</span>
            </h2>
          </Link>

          {/* Menu */}
          <ul className="flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 font-semibold text-slate-800 hover:text-[#FF7448] transition"
                >
                  {item.label}

                  {item.dropdown && (
                    <FiChevronDown
                      className="
                      transition-all
                      duration-300
                      group-hover:rotate-180
                    "
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div
                    className="
                    absolute
                    left-0
                    top-full
                    mt-6
                    min-w-[250px]
                    bg-white
                    shadow-xl
                    border
                    border-gray-100
                    opacity-0
                    invisible
                    translate-y-3
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="
                          block
                          px-6
                          py-4
                          border-b
                          border-gray-100
                          hover:bg-[#FF7448]
                          hover:text-white
                          transition
                        "
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <button>
              <FiSearch size={20} className="cursor-pointer" />
            </button>
          </ul>

          {/* CTA */}
          <Link
            href="/admission"
            className="
              h-full
              px-10
              flex
              items-center
              bg-[#FF7448]
              text-white
              font-semibold
            "
          >
            ADMISSION OPEN
          </Link>
        </div>
      </nav>
    </header>
  );
}
