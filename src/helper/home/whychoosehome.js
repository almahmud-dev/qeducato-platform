import {
  HiOutlinePresentationChartLine,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi2";

export const reasonsList = [
  {
    icon: (
      <HiOutlinePresentationChartLine
        className="w-5 h-5 text-primary"
        aria-hidden="true"
      />
    ),
    iconBg: "bg-primary/10",
    title: "Industry-Focused Curriculum",
    desc: "Our programs are designed with industry input to ensure relevant, up-to-date, and future-ready skills.",
  },
  {
    icon: (
      <HiOutlineUserGroup
        className="w-5 h-5 text-secondary"
        aria-hidden="true"
      />
    ),
    iconBg: "bg-secondary/10",
    title: "Expert Faculty",
    desc: "Learn from experienced educators, researchers, and industry professionals who are passionate about your success.",
  },
  {
    icon: (
      <HiOutlineAcademicCap
        className="w-5 h-5 text-foreground"
        aria-hidden="true"
      />
    ),
    iconBg: "bg-surface",
    title: "Modern Facilities",
    desc: "State-of-the-art labs, libraries, and digital resources that inspire innovation and enhance learning.",
  },
  {
    icon: (
      <HiOutlineBriefcase className="w-5 h-5 text-primary" aria-hidden="true" />
    ),
    iconBg: "bg-primary/10",
    title: "Career Support",
    desc: "From internships to placement assistance, we support you at every step to achieve your career goals.",
  },
];
