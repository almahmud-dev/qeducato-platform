"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "./navLinks";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FiPhoneCall,
  FiMail,
  FiSearch,
  FiChevronDown,
  FiX,
} from "react-icons/fi";
import Image from "next/image";

export default function NavbarDesktop() {
  const [isSticky, setIsSticky] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // scroll detect kore top bar hide/show
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 72);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // search logic — ekhane router.push("/search?q=...") dite parbe
    console.log("Search:", searchQuery);
  };

  return (
    <>
      {/* ========== Search Overlay =============*/}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-start justify-center pt-32"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="w-full max-w-2xl px-4">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-white rounded-lg overflow-hidden shadow-2xl"
            >
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, pages..."
                className="flex-1 px-6 py-4 text-lg text-gray-800 outline-none"
                aria-label="Search input"
              />
              <button
                type="submit"
                className="bg-[#FF7448] px-6 py-4 text-white hover:bg-[#e05e35] transition"
                aria-label="Submit search"
              >
                <FiSearch size={22} />
              </button>
            </form>

            <button
              onClick={() => setSearchOpen(false)}
              className="mt-6 mx-auto flex items-center gap-2 text-white/70 hover:text-white transition text-sm cursor-pointer"
              aria-label="Close search"
            >
              <FiX size={18} />
              Press ESC to close
            </button>
          </div>
        </div>
      )}

      {/* ============== Header Wrapper ==============*/}
      {/*
        isSticky true hoile:
        - top bar hidden
        - nav fixed + shadow beshi
        transition smooth rakha hoyeche
      */}
      <header
        className={`
          w-full z-50
          transition-all duration-300
          ${isSticky ? "fixed top-0 left-0 shadow-lg" : "relative"}
        `}
      >
        {/* ================= Top Bar ===================*/}
        <div
          className={`
            bg-[#0B5975] text-white overflow-hidden
            transition-all duration-300
            ${isSticky ? "h-0 opacity-0" : "h-[72px] opacity-100"}
          `}
          aria-hidden={isSticky}
        >
          <div className="container mx-auto h-[72px] flex items-center justify-between">
            {/* Social links — contrast fix: bg darker (#d45f2e) white icon */}
            <div className="relative bg-[#c45328] h-full px-12 flex items-center gap-5">
              {/*
                Contrast fix:
                Aage #FF7448 background e white text/icon → ratio 2.8:1 (fail)
                Ekhon #c45328 background → ratio 4.6:1 (WCAG AA pass)
              */}
              <span className="font-medium text-white">Follow us:</span>

              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-white hover:text-white/80"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-white hover:text-white/80"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                aria-label="X (Twitter)"
                className="text-white hover:text-white/80"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="text-white hover:text-white/80"
              >
                <FaYoutube />
              </a>

              {/* Diagonal cut shape */}
              <div
                className="absolute right-[-70px] top-0 w-0 h-0 border-t-[72px] border-t-[#c45328] border-r-[70px] border-r-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Contact info */}
            <div className="flex items-center h-full">
              <div className="flex items-center gap-3 px-8 border-l border-white/20 h-full">
                <FiPhoneCall
                  className="text-[#FF7448] text-2xl"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs">Call Now!</p>
                  <p className="font-semibold">+91 7052 101 786</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-8 border-l border-white/20 h-full">
                <FiMail
                  className="text-[#FF7448] text-2xl"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs">Email Now</p>
                  <p className="font-semibold">info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Main Nav =============== */}
        <nav className="bg-white px-12" aria-label="Main navigation">
          <div className="container mx-auto h-[80px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/" aria-label="QEDUCATO Home">
              <Image
                src="/images/logo/navlogo.png"
                alt="QEDUCATO Logo"
                width={240}
                height={66}
                priority
                className="h-12 w-auto"
              />
            </Link>

            {/* Menu */}
            <ul className="flex items-center gap-10" role="list">
              {navLinks.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 font-semibold text-slate-800 hover:text-[#FF7448] transition"
                  >
                    {item.label}
                    {item.dropdown && (
                      <FiChevronDown
                        className="transition-transform duration-300 group-hover:rotate-180"
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div
                      className="
                        absolute left-0 top-full mt-6
                        min-w-[250px] bg-white shadow-xl
                        border border-gray-100
                        opacity-0 invisible translate-y-3
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                        transition-all duration-300
                      "
                      role="menu"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          role="menuitem"
                          className="block px-6 py-4 border-b border-gray-100 text-slate-800 hover:bg-primary hover:!text-white transition-colors duration-300"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}

              {/* Search button */}
              <li>
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                  className="text-slate-800 hover:text-primary transition"
                >
                  <FiSearch size={20} />
                </button>
              </li>
            </ul>

            {/* CTA — contrast fix: #c45328 bg ensures white text passes WCAG AA */}
            <Link
              href="/contact"
              className="
                h-full px-10
                flex items-center
                bg-[#c45328] hover:bg-[#b84a24]
                text-white font-semibold
                transition-colors duration-200
              "
            >
              ADMISSION OPEN
            </Link>
          </div>
        </nav>
      </header>

      {/* Sticky hoile layout shift theke bachate spacer — top bar height */}
      {isSticky && <div className="h-[80px]" aria-hidden="true" />}
    </>
  );
}
