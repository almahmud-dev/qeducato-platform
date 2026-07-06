import { MdMenuBook } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import banner1 from "@/../public/images/home/banner/university.webp";
import banner2 from "@/../public/images/home/banner/students.webp";
import banner3 from "@/../public/images/home/banner/cap.webp";

export const heroImageProps = {
  fill: true,
  sizes: "(max-width: 767px) 100vw, (max-width: 1536px) 100vw, 1920px",
  className: "object-cover object-[center_20%]",
  placeholder: "blur",
  quality: 70,
};

export const featureCards = [
  {
    title: "Apply for Admission",
    desc: "Begin your academic journey with a simple and guided application process. Our admissions team is here to support you every step of the way.",
    icon: FaUserGraduate,
    href: "/apply",
    bgColor: "bg-[#104c64]/90",
  },
  {
    title: "Explore Our Programs",
    desc: "Discover undergraduate and postgraduate programs designed to equip you with industry-relevant knowledge and practical skills for the future.",
    icon: MdMenuBook,
    href: "/courses",
    bgColor: "bg-secondary/90",
  },
  {
    title: "Scholarships & Financial Aid",
    desc: "Explore scholarships and funding opportunities that help outstanding students achieve their academic goals with greater financial confidence.",
    icon: PiCertificateFill,
    href: "/scholarships",
    bgColor: "bg-[#104c64]/90",
  },
];

export const heroBanner = [
  { src: banner1, alt: "Qeducato University main campus building" },
  { src: banner2, alt: "Qeducato University students on campus" },
  { src: banner3, alt: "Qeducato University graduation cap ceremony" },
];