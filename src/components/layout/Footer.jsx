import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B3B4A] text-white mt-20">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Subscribe for Newsletter</h3>

              <p className="text-white/70 mt-2">
                Get latest updates, news and educational resources.
              </p>
            </div>

            <form className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full lg:w-[320px]
                  px-4 py-3
                  outline-none
                  text-black
                  bg-white
                  rounded-l-lg
                "
              />

              <button
                className="
                  bg-[#FF6B3D]
                  px-6
                  rounded-r-lg
                  font-semibold
                  hover:opacity-90
                  transition
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold mb-5">EduCato</h2>

            <p className="text-white/70 leading-relaxed">
              Empowering students through modern education, innovative learning
              and career-focused courses.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B3D] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B3D] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B3D] transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B3D] transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/courses">Courses</Link>
              </li>

              <li>
                <Link href="/teachers">Teachers</Link>
              </li>

              <li>
                <Link href="/events">Events</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Pages</h3>

            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>

              <li>
                <Link href="/pricing">Pricing</Link>
              </li>

              <li>
                <Link href="/faq">FAQ</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

            <div className="space-y-4 text-white/70">
              <div className="flex gap-3">
                <FaLocationDot className="mt-1 shrink-0" />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex gap-3">
                <FaPhone className="mt-1 shrink-0" />
                <p>+880 1234 567890</p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0" />
                <p>info@educato.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/60 text-sm">
              © 2026 EduCato. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-white/60">
              <Link href="/privacy-policy">Privacy Policy</Link>

              <Link href="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
