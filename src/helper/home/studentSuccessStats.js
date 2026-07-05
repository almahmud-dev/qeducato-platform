import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const statsData = [
  {
    targetValue: 15000,
    suffix: "+",
    label: "Success Graduates",
    icon: (
      <HiOutlineAcademicCap
        className="w-6 h-6 text-primary"
        aria-hidden="true"
      />
    ),
    iconBg: "bg-primary/10",
  },
  {
    targetValue: 98,
    suffix: "%",
    label: "Employment Rate",
    icon: (
      <HiOutlineBriefcase
        className="w-6 h-6 text-secondary"
        aria-hidden="true"
      />
    ),
    iconBg: "bg-secondary/10",
  },
  {
    targetValue: 200,
    suffix: "+",
    label: "Global Partners",
    icon: (
      <HiOutlineGlobeAlt
        className="w-6 h-6 text-foreground"
        aria-hidden="true"
      />
    ),
    iconBg: "bg-surface",
  },
  {
    targetValue: 150,
    suffix: "+",
    label: "Expert Faculty",
    icon: (
      <HiOutlineUserGroup className="w-5 h-5 text-primary" aria-hidden="true" />
    ),
    iconBg: "bg-primary/10",
  },
];
