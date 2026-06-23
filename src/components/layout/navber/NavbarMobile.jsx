"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import { navLinks } from "./navLinks";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  return (
    <div className="lg:hidden">

      <div className="h-16 px-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-[#0D5C63]"
        >
          EduCato
        </Link>

        <button
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaTimes size={22} />
          ) : (
            <FaBars size={22} />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white">

          {navLinks.map((item) => (
            <div key={item.label}>

              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setDropdown(
                        dropdown === item.label
                          ? null
                          : item.label
                      )
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      px-4
                      py-4
                    "
                  >
                    {item.label}

                    <FaChevronDown />
                  </button>

                  {dropdown === item.label && (
                    <div className="bg-gray-50">

                      {item.children.map(
                        (child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="
                              block
                              px-8
                              py-3
                            "
                          >
                            {child.label}
                          </Link>
                        )
                      )}

                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="
                    block
                    px-4
                    py-4
                  "
                >
                  {item.label}
                </Link>
              )}

            </div>
          ))}

          <div className="p-4">
            <Link
              href="/contact"
              className="
                block
                text-center
                bg-[#FF6B3D]
                text-white
                py-3
                rounded-lg
              "
            >
              Apply Now
            </Link>
          </div>

        </div>
      )}
    </div>
  );
};

export default NavbarMobile;