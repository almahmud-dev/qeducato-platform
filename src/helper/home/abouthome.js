import {
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineTrophy,
} from "react-icons/hi2";
import { RiBankLine } from "react-icons/ri";

export const features = [
  {
    icon: (
      <HiOutlineAcademicCap className="w-5 h-5 text-primary" aria-hidden="true" />
    ),
    iconBg: "bg-primary/10",
    title: "Academic Excellence",
    desc: "Top-ranked programs taught by world-class faculty.",
  },
  {
    icon: (
      <HiOutlineGlobeAlt className="w-5 h-5 text-secondary" aria-hidden="true" />
    ),
    iconBg: "bg-secondary/10",
    title: "Global Opportunities",
    desc: "International partnerships and global exposure.",
  },
  {
    icon: (
      <HiOutlineBookOpen className="w-5 h-5 text-foreground" aria-hidden="true" />
    ),
    iconBg: "bg-surface",
    title: "Innovative Learning",
    desc: "Modern resources and technology for future-ready skills.",
  },
  {
    icon: <HiOutlineHeart className="w-5 h-5 text-primary" aria-hidden="true" />,
    iconBg: "bg-primary/10",
    title: "Student Support",
    desc: "Personalized guidance for every step of your journey.",
  },
];

// countTo = numeric target for GSAP count-up
// prefix/suffix = static text wrapped around the animated number ("#" , "K+", "+", "%")
export const stats = [
  {
    icon: (
      <HiOutlineUserGroup className="w-5 h-5 text-primary" aria-hidden="true" />
    ),
    iconBg: "bg-primary/10",
    countTo: 15,
    prefix: "",
    suffix: "K+",
    label: "Global Students",
    subLabel: "from 120+ countries",
  },
  {
    icon: <RiBankLine className="w-5 h-5 text-secondary" aria-hidden="true" />,
    iconBg: "bg-secondary/10",
    countTo: 200,
    prefix: "",
    suffix: "+",
    label: "Academic Programs",
    subLabel: "Undergraduate & Graduate",
  },
  {
    icon: (
      <HiOutlineTrophy className="w-5 h-5 text-foreground" aria-hidden="true" />
    ),
    iconBg: "bg-surface",
    countTo: 98,
    prefix: "",
    suffix: "%",
    label: "Employment Rate",
    subLabel: "Graduates working globally",
  },
  {
    icon: <HiOutlineHeart className="w-5 h-5 text-primary" aria-hidden="true" />,
    iconBg: "bg-primary/10",
    countTo: 1,
    prefix: "#",
    suffix: "",
    label: "Top Ranked University",
    subLabel: "For Innovation & Impact",
  },
];