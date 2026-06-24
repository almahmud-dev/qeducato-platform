"use client";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>

      <div className="lg:hidden sticky top-0 z-50">
        <NavbarMobile />
      </div>
    </>
  );
}
