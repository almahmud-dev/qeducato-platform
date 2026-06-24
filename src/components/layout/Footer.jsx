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
import Container from "../ui/Container";
import Image from "next/image";

//============================================
// Section heading with orange underline accent
//============================================
const FooterHeading = ({ children }) => (
  <div className="mb-6">
    <h3 className="text-base font-bold text-white">{children}</h3>
    <span className="mt-2 block w-8 h-0.75 rounded-full bg-primary" />
  </div>
);
//=============================
// Social icon button
//=============================
const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B3D] focus:ring-offset-2 focus:ring-offset-[#062d3a]"
  >
    {children}
  </a>
);
//==============================
// Nav link with animated dash
//==============================
const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
    >
      <span className="w-0 h-px bg-[#FF6B3D] group-hover:w-3 transition-all duration-300 shrink-0" />
      {children}
    </Link>
  </li>
);
//==========================================
// Contact row with circular accent icon
//==========================================
const ContactRow = ({ icon, children }) => (
  <div className="flex items-start gap-3">
    <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 text-white">
      {icon}
    </span>
    <div className="text-sm text-white/75 leading-relaxed pt-1.5">
      {children}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* ---------- Newsletter Strip ----------*/}

      <div className="bg-[#0e4558] relative overflow-hidden">
        {/* subtle diagonal texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_12px)]" />

        <Container size="xl">
          <div className="py-10 xl:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 relative">
            {/* Left */}
            <div className="flex items-center gap-5">
              {/* decorative icon block */}
              <div className="hidden sm:flex w-14 h-14 rounded-xl bg-[#FF6B3D]/15 border border-[#FF6B3D]/20 items-center justify-center shrink-0">
                <FaEnvelope
                  size={22}
                  className="text-[#FF6B3D]"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="headingFive font-bold text-white leading-tight">
                  Subscribe for Newsletter
                </h3>
                <p className="text-white/60 text-sm mt-0.5">
                  Get latest updates, news and educational resources.
                </p>
              </div>
            </div>

            {/* Right — input + button */}
            <form className="flex w-full max-w-[600px] flex-col gap-3 sm:flex-row sm:gap-0 sm:rounded-sm sm:bg-white sm:p-1">
              <label htmlFor="footer-email" className="sr-only">
                Email Address
              </label>

              <input
                id="footer-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email Address..."
                className="w-full rounded-sm bg-white px-5 py-4 text-base text-slate-700 placeholder:text-slate-400 outline-none sm:flex-1 sm:rounded-none sm:bg-transparent sm:px-6 sm:py-5 md:text-lg"
              />

              <button
                type="submit"
                className="w-full rounded-sm bg-[#0B5A78] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#094960] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto sm:min-w-[180px] sm:px-8 sm:py-5 md:min-w-[210px] md:text-lg"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/*============== Main Footer Body =============== */}

      <div className="bg-[#062d3a] relative overflow-hidden">
        {/* decorative circle outline — matches image reference */}
        <div className="pointer-events-none absolute -left-28 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/5" />

        <Container size="xl">
          <div className="py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* ------ About ----- */}
            <div>
              <Image
                src="/images/logo/footerlogo.png"
                alt="QEDUCATO Logo"
                width={240}
                height={62}
                priority
                className="h-12 w-auto"
              />

              <p className="text-white/70 text-sm leading-relaxed pt-4">
                Empowering students with quality education, practical skills,
                and meaningful learning experiences that prepare them for
                success in the real world.
              </p>

              <div className="flex gap-3 mt-6">
                <SocialLink href="#" label="Follow us on Facebook">
                  <FaFacebookF size={13} aria-hidden="true" />
                </SocialLink>

                <SocialLink href="#" label="Follow us on Instagram">
                  <FaInstagram size={13} aria-hidden="true" />
                </SocialLink>

                <SocialLink href="#" label="Connect on LinkedIn">
                  <FaLinkedinIn size={13} aria-hidden="true" />
                </SocialLink>

                <SocialLink href="#" label="Watch on YouTube">
                  <FaYoutube size={13} aria-hidden="true" />
                </SocialLink>
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <FooterHeading>Our Links</FooterHeading>

              <ul className="space-y-3">
                <FooterLink href="/about">About Qeducato</FooterLink>
                <FooterLink href="/courses">Academic Programs</FooterLink>
                <FooterLink href="/teachers">Our Faculty</FooterLink>
                <FooterLink href="/events">Events & Programs</FooterLink>
                <FooterLink href="/blog">Our Blog</FooterLink>
              </ul>
            </div>

            {/* ── Pages ── */}
            <div>
              <FooterHeading>Pages</FooterHeading>

              <ul className="space-y-3">
                <FooterLink href="/gallery">Campus Gallery</FooterLink>
                <FooterLink href="/pricing">Tuition & Fees</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </ul>
            </div>

            {/* ── Contact ── */}
            <div>
              <FooterHeading>Contact Us</FooterHeading>

              <div className="space-y-4">
                <ContactRow icon={<FaPhone size={13} aria-hidden="true" />}>
                  <a
                    href="tel:+8801234567890"
                    className="block hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                  >
                    +880 1335 567890
                  </a>
                </ContactRow>

                <ContactRow icon={<FaEnvelope size={13} aria-hidden="true" />}>
                  <a
                    href="mailto:info@educato.com"
                    className="block hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                  >
                    info@educato.com
                  </a>
                </ContactRow>

                <ContactRow
                  icon={<FaLocationDot size={13} aria-hidden="true" />}
                >
                  <p>New York, Unitate States </p>
                </ContactRow>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ============== Copyright Bar ================ */}
      <div className="bg-[#051f2b] border-t border-white/5">
        <Container size="xl">
          <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-xs">
              © 2026 EduCato. All rights reserved.
            </p>

            <div className="flex gap-6 text-xs text-white/50">
              <Link
                href="/privacy-policy"
                className="hover:text-white/80 transition-colors duration-200 focus:outline-none focus:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-conditions"
                className="hover:text-white/80 transition-colors duration-200 focus:outline-none focus:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
