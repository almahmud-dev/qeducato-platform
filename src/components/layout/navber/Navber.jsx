"use client";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";



const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
};

export default Navbar;