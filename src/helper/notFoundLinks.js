import { FaLandmark } from "react-icons/fa6";
import { FiUsers, FiCalendar, FiHeadphones } from "react-icons/fi";

const notFoundLinks = [
  {
    id: "programs",
    icon: FaLandmark,
    title: "Our Programs",
    description:
      "Explore our wide range of undergraduate and graduate programs.",
    href: "/courses",
    iconClass: "bg-orange-50 text-[var(--primary)]",
  },
  {
    id: "gallery",
    icon: FiUsers,
    title: "Gallery",
    description: "Take a look at our campus life through photos and moments.",
    href: "/gallery",
    iconClass: "bg-purple-50 text-purple-500",
  },
  {
    id: "events",
    icon: FiCalendar,
    title: "Events",
    description: "Check out our upcoming events and activities on campus.",
    href: "/events",
    iconClass: "bg-emerald-50 text-emerald-500",
  },
  {
    id: "contact",
    icon: FiHeadphones,
    title: "Contact Us",
    description: "Still need help? We're here for you.",
    href: "/contact",
    iconClass: "bg-blue-50 text-blue-500",
  },
];

export default notFoundLinks;
